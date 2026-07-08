'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { db } from '@/config/firebase';
import { useAuth } from './AuthContext';
import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { SearchHistory } from '@/types/search';

interface SearchContextType {
  searches: SearchHistory[];
  loading: boolean;
  error: string | null;
  saveSearch: (search: Omit<SearchHistory, 'id' | 'userId' | 'timestamp' | 'lastAccessed' | 'isPinned'>) => Promise<void>;
  deleteSearch: (searchId: string) => Promise<void>;
  fetchSearches: () => Promise<void>;
  pinSearch: (searchId: string) => Promise<void>;
  unpinSearch: (searchId: string) => Promise<void>;
  getRecentSearches: (limit: number) => SearchHistory[];
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [searches, setSearches] = useState<SearchHistory[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSearches = useCallback(async () => {
    if (!user) return;

    try {
      setLoading(true);
      setError(null);
      const q = query(
        collection(db, 'searchHistory'),
        where('userId', '==', user.uid),
        orderBy('lastAccessed', 'desc')
      );
      const querySnapshot = await getDocs(q);
      const results: SearchHistory[] = [];
      querySnapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        } as SearchHistory);
      });
      setSearches(results);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch searches';
      setError(errorMessage);
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, [user]);

  const saveSearch = useCallback(
    async (search: Omit<SearchHistory, 'id' | 'userId' | 'timestamp' | 'lastAccessed' | 'isPinned'>) => {
      if (!user) throw new Error('User not authenticated');

      try {
        setError(null);
        const now = new Date().getTime();
        await addDoc(collection(db, 'searchHistory'), {
          ...search,
          userId: user.uid,
          timestamp: now,
          lastAccessed: now,
          isPinned: false,
        });
        await fetchSearches();
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to save search';
        setError(errorMessage);
        throw err;
      }
    },
    [user, fetchSearches]
  );

  const deleteSearch = useCallback(
    async (searchId: string) => {
      try {
        setError(null);
        await deleteDoc(doc(db, 'searchHistory', searchId));
        setSearches((prev) => prev.filter((s) => s.id !== searchId));
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to delete search';
        setError(errorMessage);
        throw err;
      }
    },
    []
  );

  const pinSearch = useCallback(
    async (searchId: string) => {
      try {
        setError(null);
        await updateDoc(doc(db, 'searchHistory', searchId), {
          isPinned: true,
        });
        await fetchSearches();
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to pin search';
        setError(errorMessage);
        throw err;
      }
    },
    [fetchSearches]
  );

  const unpinSearch = useCallback(
    async (searchId: string) => {
      try {
        setError(null);
        await updateDoc(doc(db, 'searchHistory', searchId), {
          isPinned: false,
        });
        await fetchSearches();
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to unpin search';
        setError(errorMessage);
        throw err;
      }
    },
    [fetchSearches]
  );

  const getRecentSearches = useCallback(
    (limit: number) => {
      return searches.slice(0, limit);
    },
    [searches]
  );

  return (
    <SearchContext.Provider
      value={{
        searches,
        loading,
        error,
        saveSearch,
        deleteSearch,
        fetchSearches,
        pinSearch,
        unpinSearch,
        getRecentSearches,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchHistory = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchHistory must be used within SearchProvider');
  }
  return context;
};
