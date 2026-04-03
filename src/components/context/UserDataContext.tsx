import { ColorScheme } from "@/src/constants/colors";
import useColors from "@/src/hooks/useColors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Directory, File, Paths } from "expo-file-system/next";
import * as ImagePicker from "expo-image-picker";
import { createContext, useContext, useEffect, useState } from "react";

const AVATAR_KEY = "user_avatar_path";
const DEFAULT_AVATAR = "https://api.dicebear.com/9.x/rings/svg";

type UserDataContextType = {
  avatar: string;
  pickAvatar: () => Promise<void>;
  restoreDefaultAvatar: () => Promise<void>;
};

const UserDataContext = createContext<UserDataContextType | null>(null);
const colorDefaultAvatar = (colors: ColorScheme) =>
  DEFAULT_AVATAR.concat(`?ringColor=${colors.primary.replace("#", "")}`);

export function UserDataProvider({ children }: { children: React.ReactNode }) {
  const colors = useColors();
  const [avatar, setAvatar] = useState<string>(colorDefaultAvatar(colors));

  const restoreDefaultAvatar = async () => {
    const defaultAvatar = colorDefaultAvatar(colors);

    setAvatar(defaultAvatar); // update UI immediately
    await AsyncStorage.setItem(AVATAR_KEY, defaultAvatar);
  };

  useEffect(() => {
    setAvatar((prev) => {
      if (prev.includes(DEFAULT_AVATAR)) {
        return colorDefaultAvatar(colors);
      }
      return prev;
    });
  }, [colors]);

  useEffect(() => {
    loadAvatar();
  }, []);

  const loadAvatar = async () => {
    try {
      const saved = await AsyncStorage.getItem(AVATAR_KEY);
      if (saved) setAvatar(saved);
    } catch (e) {
      console.error("Błąd ładowania avatara:", e);
    }
  };

  const pickAvatar = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") return;

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (result.canceled) return;

      const asset = result.assets[0];

      // 🔍 detect extension
      let extension = "jpg";
      if (
        asset.fileName?.toLowerCase().endsWith(".png") ||
        asset.mimeType === "image/png"
      ) {
        extension = "png";
      }

      // 📁 source file from picker
      const sourceFile = new File(asset.uri);

      // 🗂️ ensure avatars directory exists
      const avatarsDir = new Directory(Paths.document, "avatars");
      if (!avatarsDir.exists) {
        avatarsDir.create();
      }

      // 🆕 unique destination file
      const destFile = new File(
        avatarsDir,
        `avatar_${Date.now()}.${extension}`,
      );

      // 🧹 delete old avatar if it exists locally
      const oldPath = await AsyncStorage.getItem(AVATAR_KEY);
      if (oldPath && !oldPath.startsWith("http")) {
        const oldFile = new File(oldPath);
        if (oldFile.exists) oldFile.delete();
      }

      // 📋 copy to permanent location
      sourceFile.copy(destFile);

      const finalUri = destFile.uri;
      setAvatar(finalUri);
      await AsyncStorage.setItem(AVATAR_KEY, finalUri);
    } catch (e) {
      console.error("Błąd podczas wybierania avatara:", e);
    }
  };

  return (
    <UserDataContext.Provider
      value={{ avatar, pickAvatar, restoreDefaultAvatar }}
    >
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  const ctx = useContext(UserDataContext);
  if (!ctx) throw new Error("useUserData must be used within UserDataProvider");
  return ctx;
}
