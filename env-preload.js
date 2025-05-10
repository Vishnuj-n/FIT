/**
 * FitAi Environment Variables Preloader
 * This script attempts to fetch environment variables from various sources
 * and makes them available to the application before other scripts run.
 */

(function() {
  console.log('Env preloader running');
  
  // Create a global ENV object to store environment variables if not already exists
  window.ENV = window.ENV || {};
  // For local development, USE ENVIRONMENT VARIABLES instead of hardcoding
  // WARNING: Never commit actual API keys to code!
  const devVariables = {
    // Placeholder structure only - no actual keys here
    TOMTOM_API_KEY: "",
    SERPER_API_KEY: "",
    GROQ_API_KEY: "",
    YOUTUBE_API_KEY: ""
  };
  
  // Try to get variables from various sources
  // 1. Check for window.__env (Vercel runtime variables)
  // 2. Check for NEXT_PUBLIC_* variables (Next.js convention)
  // 3. Fall back to dev variables for local development
  
  const vercelVars = window.__env || {};
  const nextPublicVars = {};
  
  // Look for Next.js public variables if they exist
  if (typeof window !== 'undefined') {
    Object.keys(window).forEach(key => {
      if (key.startsWith('NEXT_PUBLIC_')) {
        const envKey = key.replace('NEXT_PUBLIC_', '');
        nextPublicVars[envKey] = window[key];
      }
    });
  }
  
  // Merge variables with correct precedence
  window.ENV = {
    ...devVariables,         // Lowest priority 
    ...nextPublicVars,       // Medium priority
    ...vercelVars            // Highest priority
  };
  
  console.log("Environment variables loaded:", {
    hasVercelVars: Object.keys(vercelVars).length > 0,
    hasNextVars: Object.keys(nextPublicVars).length > 0,
    hasDevFallbacks: Object.keys(devVariables).length > 0
  });
})();
