# Deployment Guide

This template can be deployed to Vercel, Netlify, or Cloudflare Pages. Follow the instructions for your preferred platform.

## Quick Deploy Options

| Platform | Best For |
|----------|----------|
| Vercel | Next.js projects, serverless functions, preview deployments |
| Netlify | JAMstack sites, form handling, edge functions |
| Cloudflare Pages | Global CDN, free SSL, Workers integration |

## Deployment Instructions

### Prerequisites
- A GitHub account
- Your project code pushed to a GitHub repository
- Supabase project (if using Supabase features)
- API keys for any AI services you're using (OpenAI, Anthropic, Replicate, Deepgram)

## Using the Setup Script

This template includes a setup script to help you generate the necessary configuration files for your chosen deployment platform:

```bash
# Install dependencies first if you haven't already
npm install

# Run the setup script
npm run setup-deployment
```

The script will prompt you to select your deployment platform and generate the appropriate configuration file.

## Platform-Specific Setup

### Vercel

1. **Create configuration file**:
   
   Create a `vercel.json` file in your project root:

   ```json
   {
     "framework": "nextjs",
     "buildCommand": "npm run build",
     "devCommand": "npm run dev",
     "installCommand": "npm install"
   }
   ```

2. **Deploy steps**:
   - Sign up or log in to [Vercel](https://vercel.com)
   - Click "Add New... > Project"
   - Import your GitHub repository
   - Configure environment variables (see Environment Variables section)
   - Click "Deploy"

3. **One-click deploy**:
   
   Alternatively, use this button in your README:
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/your-repo)

### Netlify

1. **Create configuration file**:
   
   Create a `netlify.toml` file in your project root:

   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [build.environment]
     NODE_VERSION = "18"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

2. **Deploy steps**:
   - Sign up or log in to [Netlify](https://netlify.com)
   - Click "Add new site > Import an existing project"
   - Connect to GitHub and select your repository
   - Configure environment variables (see Environment Variables section)
   - Click "Deploy site"

3. **One-click deploy**:
   
   Alternatively, use this button in your README:
   [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/your-repo)

### Cloudflare Pages

1. **Create configuration file**:
   
   Create a `wrangler.toml` file in your project root:

   ```toml
   name = "my-next-app"
   compatibility_date = "2023-01-01"
   compatibility_flags = ["nodejs_compat"]

   [build]
     command = "npm run build"
     output = ".next"

   [site]
     bucket = ".next"
   ```

2. **Deploy steps**:
   - Sign up or log in to [Cloudflare](https://dash.cloudflare.com/)
   - Navigate to Pages and click "Create a project"
   - Connect your GitHub account and select your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Build output directory: `.next`
     - Node.js version: 18
   - Configure environment variables (see Environment Variables section)
   - Click "Save and Deploy"

## Environment Variables

### Required Environment Variables

For Supabase integration:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

For AI integrations (as needed):
```
OPENAI_API_KEY=your_openai_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
REPLICATE_API_TOKEN=your_replicate_api_token
DEEPGRAM_API_KEY=your_deepgram_api_key
```

### Setting Environment Variables

- **Vercel**: Project Settings > Environment Variables
- **Netlify**: Site Settings > Build & Deploy > Environment
- **Cloudflare Pages**: Pages project > Settings > Environment variables

## Custom Domains

All three platforms support custom domains:

- **Vercel**: Project Settings > Domains > Add
- **Netlify**: Site Settings > Domain Management > Add custom domain
- **Cloudflare Pages**: Pages project > Custom domains > Set up a custom domain

## Continuous Deployment

All three platforms automatically deploy when you push changes to your repository:

- **Vercel**: Supports preview deployments for all branches
- **Netlify**: Supports branch deploys and deploy previews
- **Cloudflare Pages**: Supports preview deployments for all branches

## Using Cursor to Generate Configuration Files

When you're ready to deploy, you can use Cursor to generate the necessary configuration files:

1. Open your project in Cursor
2. Use the Composer feature with the following prompt:

```
I want to deploy my Next.js app to [PLATFORM] (replace with Vercel, Netlify, or Cloudflare Pages).
Please generate the appropriate configuration file and explain any additional steps I need to take.
My project uses Supabase for authentication and database, and integrates with [AI_SERVICES] (replace with any of: OpenAI, Anthropic, Replicate, Deepgram).
```

3. Cursor will generate the appropriate configuration file for your chosen platform
4. Follow the platform-specific deployment steps outlined above

## Troubleshooting

### Common Issues

- **Build failures**: Ensure all dependencies are correctly installed and your Next.js configuration is compatible with the deployment platform
- **Environment variable issues**: Double-check that all required environment variables are correctly set
- **API connection problems**: Verify API keys and ensure services are properly configured

For platform-specific troubleshooting:
- [Vercel Troubleshooting](https://vercel.com/docs/concepts/deployments/troubleshooting)
- [Netlify Troubleshooting](https://docs.netlify.com/configure-builds/troubleshooting-tips/)
- [Cloudflare Pages Troubleshooting](https://developers.cloudflare.com/pages/platform/troubleshooting/) 