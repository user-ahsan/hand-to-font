"use client";

import { useUser } from '@clerk/nextjs';

export function useUserProfile() {
  const { user, isLoaded } = useUser();

  // Get user's display name with fallback logic
  const getDisplayName = () => {
    if (!user) return 'Creator';
    
    if (user.firstName && user.lastName) {
      return `${user.firstName} ${user.lastName}`;
    } else if (user.firstName) {
      return user.firstName;
    } else if (user.fullName) {
      return user.fullName;
    } else if (user.username) {
      return user.username;
    } else {
      return 'Creator';
    }
  };

  // Get user's first name only
  const getFirstName = () => {
    if (!user) return 'Creator';
    return user.firstName || user.fullName?.split(' ')[0] || user.username || 'Creator';
  };

  // Get user's username or email as fallback
  const getUsername = () => {
    if (!user) return '';
    return user.username || user.emailAddresses[0]?.emailAddress || '';
  };

  // Check if user has completed profile setup
  const hasCompleteProfile = () => {
    if (!user) return false;
    return !!(user.firstName && user.lastName);
  };

  return {
    user,
    isLoaded,
    displayName: getDisplayName(),
    firstName: getFirstName(),
    username: getUsername(),
    hasCompleteProfile: hasCompleteProfile(),
    email: user?.emailAddresses[0]?.emailAddress || '',
    profileImageUrl: user?.imageUrl || '',
  };
}