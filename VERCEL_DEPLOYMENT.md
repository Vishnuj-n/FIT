# Deploying FitAi to Vercel

This guide will help you deploy the FitAi application to Vercel with proper environment variable configuration.

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free tier is sufficient)
- Your API keys for:
  - [TomTom Maps](https://developer.tomtom.com/) - For location and mapping features
  - [Serper API](https://serper.dev/) - For search functionality
  - [Groq AI](https://console.groq.com/) - For chatbot and AI features

## Preparing Your Code

Ensure all API keys are removed from the codebase:
1. No hardcoded API keys in any JavaScript files
2. Configuration files set up to read from environment variables
3. Create a `.env.local` file (based on `.env.example`) for local development, but **don't commit this file**

## Deployment Steps

### 1. Push Your Code to GitHub

First, push your code to a GitHub repository:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/fitai.git
git push -u origin main
```

### 2. Connect Repository to Vercel

1. Log in to your [Vercel account](https://vercel.com/login)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure the project:
   - Framework Preset: Other
   - Root Directory: ./
   - Build Command: (leave blank, as we're using static files)
   - Output Directory: ./

### 3. Add Environment Variables

Add the following environment variables in the Vercel dashboard under "Settings" → "Environment Variables":

| Name | Value | Description |
|------|-------|-------------|
| `TOMTOM_API_KEY` | Your TomTom API key | For maps and location services |
| `SERPER_API_KEY` | Your Serper API key | For web search functionality |
| `GROQ_API_KEY` | Your Groq API key | For AI chat and workout plan generation |

Important notes about environment variables:
- Ensure these are added to the "Production" environment at minimum
- If you need different values for Preview/Development environments, add those separately
- Click "Save" after adding all variables

### 4. Configure Build Settings

1. Go to "Settings" → "Build & Development Settings"
2. Ensure the following configuration:
   - Framework Preset: Other
   - Build Command: (leave blank)
   - Output Directory: ./
   - Install Command: (leave blank)

### 5. Deploy

1. Click "Deploy" and Vercel will build and deploy your application
2. Once deployment completes, Vercel will provide a URL where your app is accessible
3. Test all functionality to ensure API keys are being properly loaded

### 6. Set Up Custom Domain (Optional)

1. Go to "Settings" → "Domains"
2. Add your custom domain and follow Vercel's instructions for domain verification

## Troubleshooting

If you encounter issues with API keys not being recognized:

1. Check your browser console for errors
2. Verify that environment variables are correctly set in the Vercel dashboard
3. Ensure all API keys are valid and have necessary permissions
4. Try clearing browser cache or using incognito mode for testing
5. If problems persist, check [Vercel's documentation on environment variables](https://vercel.com/docs/concepts/projects/environment-variables)

## Updating API Keys

If you need to update your API keys in the future:

1. Go to your Vercel project dashboard
2. Click on "Settings"
3. Navigate to "Environment Variables"
4. Edit the values as needed
5. Redeploy your application for the changes to take effect

## Troubleshooting

If your APIs aren't working after deployment:

1. Check if the environment variables are correctly set in the Vercel dashboard
2. Verify that the API keys are valid
3. Look at the browser console for any errors
4. Check the deployment logs in Vercel for any build or runtime issues

## Local Development with Environment Variables

For local development, create a `.env` file based on the `.env.example` template:

```
# Copy the .env.example file
cp .env.example .env

# Edit the file with your actual API keys
nano .env
```

Note: The `.env` file is not used in production. Vercel uses the environment variables set in the dashboard.
