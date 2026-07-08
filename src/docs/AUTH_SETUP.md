# Authentication & Search History Setup

## ✅ COMPLETE IMPLEMENTATION

All Firebase authentication and search history features have been successfully integrated!

## 📋 SETUP INSTRUCTIONS

### 1. WRAP YOUR APP WITH PROVIDERS

The root layout has already been updated with the `Providers` component. This wraps your entire app with:
- AuthContext (for authentication)
- SearchContext (for search history management)

### 2. USE AUTHENTICATION IN YOUR COMPONENTS

**Get current user:**
```typescript
import { useAuth } from '@/context/AuthContext';

const MyComponent = () => {
  const { user, login, logout, loginWithGoogle } = useAuth();
  
  if (!user) return <p>Not logged in</p>;
  return <p>Welcome {user.displayName}!</p>;
};
```

**Login:**
```typescript
const { login } = useAuth();
await login('user@example.com', 'password');
```

**Sign up:**
```typescript
const { signup } = useAuth();
await signup('user@example.com', 'password', 'John Doe');
```

**Google Sign-In:**
```typescript
const { loginWithGoogle } = useAuth();
await loginWithGoogle();
```

### 3. SAVE SEARCHES

**Automatically save searches:**
```typescript
import { useSearchHistory } from '@/context/SearchContext';

const MyComponent = () => {
  const { saveSearch } = useSearchHistory();
  
  const handleSelectCity = async (country, state, city) => {
    await saveSearch({
      country,
      state,
      city,
      attractions: ['Taj Mahal', 'Red Fort']
    });
  };
};
```

### 4. DISPLAY SEARCH HISTORY

```typescript
import { SearchHistory } from '@/components/SearchHistory';

const MyComponent = () => {
  return (
    <SearchHistory 
      limit={10} 
      onSelectSearch={(search) => {
        // Handle when user clicks a search
        console.log('Selected:', search);
      }}
    />
  );
};
```

### 5. PROTECT ROUTES

```typescript
import { ProtectedRoute } from '@/components/ProtectedRoute';

export default function ProtectedPage() {
  return (
    <ProtectedRoute>
      <YourContent />
    </ProtectedRoute>
  );
}
```

## 📍 PAGES CREATED

| Page | Path | Purpose |
|------|------|----------|
| Login | `/login` | User login |
| Signup | `/signup` | User registration |
| Dashboard | `/dashboard` | User dashboard with search history |
| Home | `/` | Main page with auth UI |

## 🗄️ DATABASE STRUCTURE (FIRESTORE)

### Users Collection
```
users/{userId}
├── email: string
├── displayName: string
├── photoURL?: string (from Google)
├── createdAt: timestamp
└── lastLogin: timestamp
```

### Search History Collection
```
searchHistory/{searchId}
├── userId: string (user who owns this search)
├── country: string
├── state: string
├── city: string
├── timestamp: number (when created)
├── lastAccessed: number (when last viewed)
├── attractions?: string[] (optional)
└── isPinned?: boolean (star feature)
```

## 🔐 SECURITY RULES

**Current Firestore Rules:**
- ✅ Users can only read/write their own searches
- ✅ Search history is isolated by userId
- ✅ All operations require authentication
- ✅ Public read access to `visits` collection

**Update rules in Firebase Console:**
Go to: Firestore → Rules → Update with rules from `firestore.rules`

## 🎯 AUTHENTICATION METHODS

| Method | Status | Setup |
|--------|--------|-------|
| Email/Password | ✅ Ready | Works out of the box |
| Google Sign-In | ✅ Ready | Already configured |
| Phone | ✅ Setup | Requires SMS provider config |

## 🪝 HOOKS AVAILABLE

### useAuth()
```typescript
const {
  user,              // Current user or null
  loading,           // Loading state
  error,             // Error message
  login,             // Login function
  signup,            // Signup function
  logout,            // Logout function
  loginWithGoogle,   // Google login
  loginWithPhone     // Phone login
} = useAuth();
```

### useSearchHistory()
```typescript
const {
  searches,          // Array of search history
  loading,           // Loading state
  error,             // Error message
  saveSearch,        // Save new search
  deleteSearch,      // Delete search
  pinSearch,         // Pin search as favorite
  unpinSearch,       // Unpin search
  fetchSearches,     // Fetch from Firestore
  getRecentSearches  // Get recent searches
} = useSearchHistory();
```

## 💡 COMPLETE EXAMPLE: City Search with History

```typescript
'use client';

import { useAuth } from '@/context/AuthContext';
import { useSearchHistory } from '@/context/SearchContext';
import { Button } from '@/components/ui/button';

export default function CityExplorer() {
  const { user } = useAuth();
  const { saveSearch, getRecentSearches, deleteSearch } = useSearchHistory();

  const handleSelectCity = async (country: string, state: string, city: string) => {
    if (!user) {
      alert('Please login first');
      return;
    }

    // Save search to Firestore
    await saveSearch({
      country,
      state,
      city,
      attractions: ['Museum', 'Park', 'Temple']
    });

    // Now show city attractions...
    console.log(`Exploring ${city}, ${state}, ${country}`);
  };

  const recentSearches = getRecentSearches(5);

  return (
    <div className="p-8">
      <h1>City Explorer</h1>

      {user && (
        <div>
          <h2>Welcome, {user.displayName}</h2>

          {/* Recent Searches */}
          <div className="mt-6">
            <h3>Recent Searches</h3>
            {recentSearches.map((search) => (
              <div key={search.id} className="p-4 border rounded mb-2">
                <p>
                  {search.country} → {search.state} → {search.city}
                </p>
                <button
                  onClick={() =>
                    handleSelectCity(search.country, search.state, search.city)
                  }
                >
                  Resume
                </button>
                <button
                  onClick={() => deleteSearch(search.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {/* New Search */}
          <div className="mt-6">
            <button
              onClick={() => handleSelectCity('India', 'Delhi', 'New Delhi')}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Explore Delhi
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
```

## 🚀 DEPLOYMENT

Everything is live on the `dekho_india` branch and auto-updates your Firebase Hosting!

### Firestore Rules Deployment

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Deploy rules
firebase deploy --only firestore:rules
```

## ⚠️ IMPORTANT NOTES

1. **Make sure `.env.local` is in `.gitignore`** - Never commit API keys!
2. **Firebase credentials are public-side safe** - They can be exposed; security comes from Firestore rules
3. **Always fetch searches in components** - Call `fetchSearches()` on mount
4. **Test with real user data** - Create test accounts and verify data isolation
5. **Monitor Firestore usage** - Keep an eye on read/write operations to manage costs

## 📞 TROUBLESHOOTING

**User not persisting after refresh:**
- Make sure `Providers` wrapper is in root layout
- Check Firebase initialization in `src/config/firebase.ts`

**Searches not saving:**
- Verify user is authenticated
- Check Firestore rules allow write access
- Check browser console for errors

**Google Sign-In not working:**
- Verify OAuth credentials in Firebase Console
- Check authorized domains in Firebase settings

**Rate limiting on SMS:**
- Check Firebase Console for SMS quota
- Phone authentication SMS quota: 1000/day (default)

## ✨ NEXT STEPS

1. ✅ Test login/signup flow
2. ✅ Integrate search save into your city selection
3. ✅ Add search resume functionality
4. ✅ Customize UI/styling as needed
5. ✅ Monitor Firestore usage and costs
6. ✅ Deploy Firestore rules from `firestore.rules`

## 📚 RESOURCES

- [Firebase Auth Docs](https://firebase.google.com/docs/auth)
- [Firestore Docs](https://firebase.google.com/docs/firestore)
- [Firebase Security Rules](https://firebase.google.com/docs/firestore/security/start)
- [Next.js Context API](https://react.dev/reference/react/useContext)
