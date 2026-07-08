'use client';

import React, { useEffect } from 'react';
import { useSearchHistory } from '@/context/SearchContext';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Trash2, Pin, MapPin, Calendar } from 'lucide-react';
import { SearchHistory as SearchHistoryType } from '@/types/search';

interface SearchHistoryProps {
  onSelectSearch?: (search: SearchHistoryType) => void;
  limit?: number;
}

export const SearchHistory: React.FC<SearchHistoryProps> = ({ onSelectSearch, limit = 10 }) => {
  const { user } = useAuth();
  const { searches, loading, error, fetchSearches, deleteSearch, pinSearch, unpinSearch } =
    useSearchHistory();

  useEffect(() => {
    if (user) {
      fetchSearches();
    }
  }, [user]);

  if (!user) {
    return (
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-gray-700">Please login to view your search history</p>
      </div>
    );
  }

  if (loading) {
    return <div className="p-4 text-center text-gray-500">Loading search history...</div>;
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded">
        <p className="text-red-700">Error: {error}</p>
      </div>
    );
  }

  const displayedSearches = searches.slice(0, limit);

  if (displayedSearches.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        <p>No search history yet. Start exploring!</p>
      </div>
    );
  }

  const handlePinClick = async (e: React.MouseEvent, searchId: string, isPinned: boolean) => {
    e.stopPropagation();
    try {
      if (isPinned) {
        await unpinSearch(searchId);
      } else {
        await pinSearch(searchId);
      }
    } catch (err) {
      console.error('Pin error:', err);
    }
  };

  const handleDeleteClick = async (e: React.MouseEvent, searchId: string) => {
    e.stopPropagation();
    try {
      if (confirm('Are you sure you want to delete this search?')) {
        await deleteSearch(searchId);
      }
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Searches</h3>

      <div className="space-y-2">
        {displayedSearches.map((search) => (
          <div
            key={search.id}
            className="p-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition cursor-pointer"
            onClick={() => onSelectSearch?.(search)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin size={16} className="text-[#FF9933]" />
                  <h4 className="font-semibold text-gray-800">
                    {search.country} → {search.state} → {search.city}
                  </h4>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar size={14} />
                  <span>{new Date(search.lastAccessed).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => handlePinClick(e, search.id, search.isPinned || false)}
                  title={search.isPinned ? 'Unpin' : 'Pin'}
                  className={search.isPinned ? 'text-[#FF9933]' : 'text-gray-400'}
                >
                  <Pin size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => handleDeleteClick(e, search.id)}
                  title="Delete"
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
