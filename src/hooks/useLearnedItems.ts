import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type ItemType = "books" | "questions";

interface LearnedState {
  books: string[];
  questions: string[];
}

interface UseLearnedItemsReturn {
  // Data
  learnedBooks: string[];
  learnedQuestions: string[];
  counts: { books: number; questions: number; total: number };

  // Checks
  isBookLearned: (id: string) => boolean;
  isQuestionLearned: (id: string) => boolean;

  // Mutations
  markLearned: (type: ItemType, id: string) => Promise<void>;
  unmarkLearned: (type: ItemType, id: string) => Promise<void>;
  toggleLearned: (type: ItemType, id: string) => Promise<void>;
  markManyLearned: (type: ItemType, ids: string[]) => Promise<void>;
  clearLearned: (type: ItemType) => Promise<void>;
  clearAll: () => Promise<void>;

  // State
  isLoading: boolean;
  error: string | null;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const STORAGE_KEYS: Record<ItemType, string> = {
  books: "@learned_books",
  questions: "@learned_questions",
};

const INITIAL_STATE: LearnedState = { books: [], questions: [] };

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useLearnedItems(): UseLearnedItemsReturn {
  const [state, setState] = useState<LearnedState>(INITIAL_STATE);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ── Load from storage on mount ───────────────────────────────────────────
  useEffect(() => {
    const load = async () => {
      try {
        const [booksRaw, questionsRaw] = await AsyncStorage.multiGet([
          STORAGE_KEYS.books,
          STORAGE_KEYS.questions,
        ]);

        setState({
          books: booksRaw[1] ? JSON.parse(booksRaw[1]) : [],
          questions: questionsRaw[1] ? JSON.parse(questionsRaw[1]) : [],
        });
      } catch (e) {
        setError("Failed to load learned items.");
        console.error("[useLearnedItems] load error:", e);
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, []);

  // ── Persist a type's list to AsyncStorage ────────────────────────────────
  const persist = useCallback(async (type: ItemType, ids: string[]) => {
    await AsyncStorage.setItem(STORAGE_KEYS[type], JSON.stringify(ids));
  }, []);

  // ── Mark a single item as learned ────────────────────────────────────────
  const markLearned = useCallback(
    async (type: ItemType, id: string) => {
      try {
        setState((prev) => {
          if (prev[type].includes(id)) return prev; // already there
          const updated = [...prev[type], id];
          persist(type, updated);
          return { ...prev, [type]: updated };
        });
      } catch (e) {
        setError(`Failed to mark ${type} item as learned.`);
        console.error("[useLearnedItems] markLearned error:", e);
      }
    },
    [persist],
  );

  // ── Remove a single item ─────────────────────────────────────────────────
  const unmarkLearned = useCallback(
    async (type: ItemType, id: string) => {
      try {
        setState((prev) => {
          const updated = prev[type].filter((i) => i !== id);
          persist(type, updated);
          return { ...prev, [type]: updated };
        });
      } catch (e) {
        setError(`Failed to unmark ${type} item.`);
        console.error("[useLearnedItems] unmarkLearned error:", e);
      }
    },
    [persist],
  );

  // ── Toggle a single item ─────────────────────────────────────────────────
  const toggleLearned = useCallback(
    async (type: ItemType, id: string) => {
      setState((prev) => {
        const isLearned = prev[type].includes(id);
        const updated = isLearned
          ? prev[type].filter((i) => i !== id)
          : [...prev[type], id];
        persist(type, updated);
        return { ...prev, [type]: updated };
      });
    },
    [persist],
  );

  // ── Mark multiple items at once ──────────────────────────────────────────
  const markManyLearned = useCallback(
    async (type: ItemType, ids: string[]) => {
      try {
        setState((prev) => {
          const merged = Array.from(new Set([...prev[type], ...ids]));
          persist(type, merged);
          return { ...prev, [type]: merged };
        });
      } catch (e) {
        setError(`Failed to mark multiple ${type} items.`);
        console.error("[useLearnedItems] markManyLearned error:", e);
      }
    },
    [persist],
  );

  // ── Clear all learned for a type ─────────────────────────────────────────
  const clearLearned = useCallback(async (type: ItemType) => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEYS[type]);
      setState((prev) => ({ ...prev, [type]: [] }));
    } catch (e) {
      setError(`Failed to clear ${type}.`);
      console.error("[useLearnedItems] clearLearned error:", e);
    }
  }, []);

  // ── Clear everything ─────────────────────────────────────────────────────
  const clearAll = useCallback(async () => {
    try {
      await AsyncStorage.multiRemove([
        STORAGE_KEYS.books,
        STORAGE_KEYS.questions,
      ]);
      setState(INITIAL_STATE);
    } catch (e) {
      setError("Failed to clear all learned items.");
      console.error("[useLearnedItems] clearAll error:", e);
    }
  }, []);

  // ── Derived helpers ──────────────────────────────────────────────────────
  const isBookLearned = useCallback(
    (id: string) => state.books.includes(id),
    [state.books],
  );

  const isQuestionLearned = useCallback(
    (id: string) => state.questions.includes(id),
    [state.questions],
  );

  const counts = {
    books: state.books.length,
    questions: state.questions.length,
    total: state.books.length + state.questions.length,
  };

  return {
    learnedBooks: state.books,
    learnedQuestions: state.questions,
    counts,
    isBookLearned,
    isQuestionLearned,
    markLearned,
    unmarkLearned,
    toggleLearned,
    markManyLearned,
    clearLearned,
    clearAll,
    isLoading,
    error,
  };
}
