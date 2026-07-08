'use client';

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useSearchHistory } from '@/context/SearchContext';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LogOut, LayoutDashboard, LogIn, UserPlus } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { user, logout } = useAuth();
  const { getRecentSearches } = useSearchHistory();
  const router = useRouter();

  const recentSearches = getRecentSearches(5);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5DC] to-[#FFE8CC]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-[#FF9933]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-[#FF9933]">Dekho India</h1>

          <div className="flex items-center gap-4">
            {user ? (
              <>
                <span className="text-gray-700 font-semibold">Welcome, {user.displayName}</span>
                <Link href="/dashboard">
                  <Button className="flex items-center gap-2 bg-[#FF9933] hover:bg-[#E68A23] text-white">
                    <LayoutDashboard size={18} />
                    Dashboard
                  </Button>
                </Link>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="flex items-center gap-2 border-[#FF9933] text-[#FF9933]"
                >
                  <LogOut size={18} />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button className="flex items-center gap-2 bg-[#FF9933] hover:bg-[#E68A23] text-white">
                    <LogIn size={18} />
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="flex items-center gap-2 bg-[#32CD32] hover:bg-green-600 text-white">
                    <UserPlus size={18} />
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Section */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-4xl font-bold text-[#FF9933] mb-4">Explore India's Beauty</h2>
              <p className="text-gray-700 text-lg mb-6">
                Discover amazing attractions across India. With our app, you can explore cities, find beautiful locations, and save your favorite searches for later.
              </p>

              {user ? (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    ✨ Your searches are automatically saved and synced across all devices!
                  </p>
                  <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                    <h3 className="font-semibold text-green-900">🎉 Ready to explore?</h3>
                    <p className="text-green-800 text-sm">
                      Select your location to start discovering attractions and managing your search history.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                  <h3 className="font-semibold text-blue-900">📝 Create an Account</h3>
                  <p className="text-blue-800 text-sm mb-3">
                    Sign up to save your searches and resume exploring from where you left off!
                  </p>
                  <Link href="/signup">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Features */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">✨ Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#FF9933] font-bold">✓</span>
                  <span className="text-gray-700">Browse attractions by city</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF9933] font-bold">✓</span>
                  <span className="text-gray-700">Save your searches</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF9933] font-bold">✓</span>
                  <span className="text-gray-700">Resume from last location</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF9933] font-bold">✓</span>
                  <span className="text-gray-700">Rate and review</span>
                </li>
              </ul>
            </div>

            {/* Recent Searches (if logged in) */}
            {user && recentSearches.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">📍 Recent Searches</h3>
                <div className="space-y-2">
                  {recentSearches.map((search) => (
                    <div
                      key={search.id}
                      className="p-3 bg-gray-50 rounded border border-gray-200 text-sm"
                    >
                      <p className="font-semibold text-gray-800">
                        {search.country} → {search.state} → {search.city}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {new Date(search.lastAccessed).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}