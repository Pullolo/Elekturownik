import Books from "@/src/components/content/books";
import Epochs from "@/src/components/content/epochs";
import Questions from "@/src/components/content/questions";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import BackButton from "@/src/components/ui/BackButton";
import SegmentedControl from "@/src/components/ui/SegmentedControl";
import { useLocalSearchParams } from "expo-router";
import { Book, HelpCircle, Landmark } from "lucide-react-native";
import { useEffect, useState } from "react";

type Tab = "books" | "epochs" | "questions";

const TABS = [
  { key: "questions" as Tab, label: "Pytania", icon: HelpCircle },
  { key: "books" as Tab, label: "Książki", icon: Book },
  { key: "epochs" as Tab, label: "Epoki", icon: Landmark },
];

export default function Content() {
  const [questionsQuery, setQuestionsQuery] = useState("");
  const [booksQuery, setBooksQuery] = useState("");
  const [epochsQuery, setEpochsQuery] = useState("");

  const { tab } = useLocalSearchParams();
  const [selectedTab, setSelectedTab] = useState<Tab>(
    tab ? (tab as Tab) : "questions",
  );

  useEffect(() => {
    if (!tab) return;
    setSelectedTab(tab as Tab);
  }, [tab]);

  return (
    <ScreenWrapper className="gap-4">
      <BackButton
        text={
          selectedTab === "questions"
            ? `Wszystkie pytania 2026`
            : selectedTab === "books"
              ? `Wszystkie lektury`
              : `Wszystkie epoki`
        }
      />
      <SegmentedControl
        segments={TABS}
        selected={selectedTab}
        onChange={setSelectedTab}
      />

      {selectedTab === "books" && (
        <Books query={booksQuery} setQuery={setBooksQuery} />
      )}
      {selectedTab === "epochs" && (
        <Epochs query={epochsQuery} setQuery={setEpochsQuery} />
      )}
      {selectedTab === "questions" && (
        <Questions query={questionsQuery} setQuery={setQuestionsQuery} />
      )}
    </ScreenWrapper>
  );
}
