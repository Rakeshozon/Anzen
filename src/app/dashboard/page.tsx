'use client';

import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useAuth } from '@/context/AuthContext';
import { useSearchHistory } from '@/context/SearchContext';
import { SearchHistory } from '@/components/SearchHistory';
import { Button } from '@/components/ui/button';
import { LogOut, User, Home } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}

const DashboardContent = () => {
  const { user, logout } = useAuth();
  const { fetchSearches } = useSearchHistory();
  const router = useRouter();

  useEffect(() => {
    fetchSearches();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5DC] to-[#FFE8CC]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-[#FF9933]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold text-[#FF9933]">Dekho India</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              <User size={20} />
              <span className="font-semibold">{user?.displayName}</span>
            </div>

            <Button
              onClick={handleLogout}
              variant="outline"
              className="flex items-center gap-2 border-[#FF9933] text-[#FF9933] hover:bg-[#FF9933] hover:text-white"
            >
              <LogOut size={18} />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Section */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome, {user?.displayName}! 👋</h2>

              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-[#FF9933] to-[#E68A23] rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-2">Ready to Explore?</h3>
                  <p className="mb-4">Start discovering amazing attractions across India or resume your previous searches.</p>
                  <Link href="/">
                    <Button className="bg-white text-[#FF9933] hover:bg-gray-100 flex items-center gap-2">
                      <Home size={18} />
                      Back to Explore
                    </Button>
                  </Link>
                </div>

                <div className="p-6 bg-blue-50 border-l-4 border-blue-500 rounded">
                  <h3 className="font-semibold text-blue-900 mb-2">💡 Tip</h3>
                  <p className="text-blue-800">
                    Your searches are now automatically saved! You can resume from any location anytime you visit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Search History */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <SearchHistory limit={5} />
          </div>
        </div>
      </main>
    </div>
  );
};