"use client";

export default function ProfileSetupInstructions() {
  return (
    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
      <h3 className="text-blue-400 font-semibold text-lg mb-4">
        🛠️ Profile Setup Instructions
      </h3>
      <div className="text-gray-300 space-y-3">
        <p className="text-sm leading-relaxed">
          To enable enhanced profile collection during sign-up, you need to configure your Clerk dashboard:
        </p>
        
        <div className="bg-black/30 rounded-lg p-4 space-y-2">
          <p className="text-blue-300 font-medium">📋 Steps to Configure:</p>
          <ol className="text-sm space-y-2 ml-4 list-decimal text-gray-300">
            <li>Go to your <a href="https://dashboard.clerk.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Clerk Dashboard</a></li>
            <li>Navigate to <strong>User & Authentication → User Profile</strong></li>
            <li>Enable these fields and set them as <strong>Required</strong>:
              <ul className="ml-4 mt-2 space-y-1 list-disc">
                <li><code className="bg-white/10 px-2 py-1 rounded text-xs">First Name</code></li>
                <li><code className="bg-white/10 px-2 py-1 rounded text-xs">Last Name</code></li>
                <li><code className="bg-white/10 px-2 py-1 rounded text-xs">Username</code> (with uniqueness validation)</li>
              </ul>
            </li>
            <li>In <strong>Session & Users → Restrictions</strong>, enable username uniqueness</li>
            <li>Save your changes and test the sign-up flow</li>
          </ol>
        </div>
        
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
          <p className="text-green-400 text-sm">
            ✅ Once configured, new users will be prompted to enter their first name, last name, and choose a unique username during registration.
          </p>
        </div>
      </div>
    </div>
  );
}