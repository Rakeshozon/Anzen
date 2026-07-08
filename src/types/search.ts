export interface SearchHistory {
  id: string;
  userId: string;
  country: string;
  state: string;
  city: string;
  timestamp: number;
  lastAccessed: number;
  attractions?: string[];
  isPinned?: boolean;
}
