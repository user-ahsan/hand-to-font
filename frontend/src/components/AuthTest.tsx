"use client";

import { useAuth } from '@clerk/nextjs';
import { useUserProfile } from '../hooks/useUserProfile';

export default function AuthTest() {
  const { isLoaded, userId, sessionId } = useAuth();
  const { displayName, firstName, username, email, hasCompleteProfile } = useUserProfile();

  // In case the user signs out while on the page.
  if (!isLoaded || !userId) {
    return (
      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-4">
        <p className="text-red-400">❌ Not authenticated</p>
      </div>
    );
  }

  return (
    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-4">
      <h3 className="text-green-400 font-semibold mb-2">✅ Authentication Status</h3>
      <div className="text-gray-300 text-sm space-y-1">
        <p><strong>User ID:</strong> {userId}</p>
        <p><strong>Session ID:</strong> {sessionId}</p>
        <p><strong>Display Name:</strong> {displayName}</p>
        <p><strong>First Name:</strong> {firstName}</p>
        <p><strong>Username:</strong> {username || 'Not set'}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Profile Complete:</strong> {hasCompleteProfile ? '✅ Yes' : '⚠️ Incomplete'}</p>
      </div>
    </div>
  );
}