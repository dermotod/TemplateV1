# DODs Supabase Template

This is a full-stack template project to create applications and websites with AI.

## Getting started

To create a new project, you go to `/paths`, choose from our list of Paths, and then use Cursor's Composer feature to quickly scaffold your project!
You can also edit the Path's prompt template to be whatever you like!

## Technologies used

This doesn't really matter, but is useful for the AI to understand more about this project. We are using the following technologies
- React with Next.js 14 App Router
- TailwindCSS
- Supabase Auth, Storage, and Database
- Multiple AI endpoints including OpenAI, Anthropic, and Replicate using Vercel's AI SDK

## Quick Start Guide

Follow these steps to get up and running with this template:

### 1. Clone and Setup Repository

```bash
# Clone the repository
git clone https://github.com/original-owner/original-repo.git my-project
cd my-project

# Remove the original git history and initialize a new repository
rm -rf .git
git init
git add .
git commit -m "Initial commit"
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Configure API Keys (Optional)

Create a `.env.local` file in the root directory with the API keys you need:
```
# Supabase Configuration 
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# OpenAI API
OPENAI_API_KEY=your_openai_api_key

# Anthropic API
ANTHROPIC_API_KEY=your_anthropic_api_key

# Firecrawl API key
FIRECRAWL_API_KEY=your_firecrawl_api_key

#Resend API key
RESEND_API_KEY=your_resend_api_key
```

### 4. Run Locally

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Visit `http://localhost:3000` to see your application.

### 5. Customize Your Project

You can ask Cursor AI to help you implement features like:
- "Add a contact form to the homepage"
- "Create a blog section with markdown support"
- "Implement a dark mode toggle"
- "Add a product catalog with filtering options"

Or create a markdown file in the `/paths` directory with your project requirements, then ask Cursor to build out your application based on that specification. For example:

### 6. Push Your Code to GitHub

1. Create a new repository on GitHub
2. In Cursor or your code editor, use the Source Control panel (usually on the left sidebar)
3. Click on the "Remote" option and add your GitHub repository URL:
   ```
   git remote add origin https://github.com/your-username/your-new-repo.git
   ```
4. Push your changes to GitHub:
   ```
   git push -u origin main
   ```

### 7. Deploy to Netlify

1. Log in to [Netlify](https://app.netlify.com/)
2. Click "New site from Git"
3. Select your GitHub repository
4. Configure build settings: 
   - Build command: `npm run build`
   - Publish directory: `.next`
   
5. Add your environment variables in the Netlify dashboard: 
   - Go to Site settings > Environment variables
   - Add all the variables from your `.env.local` file
   
6. Deploy your site

For more advanced Netlify configuration, refer to the `DEPLOYMENT.md` file in this repository. You can also ask the AI tool to "implement the Netlify deployment option" to automatically generate the necessary configuration files.

Your site will be live at the URL provided by Netlify!

### Enable Authentication (Optional)

If you want to use authentication features, you'll need to set up Supabase first and add your Supabase API keys to the `.env.local` file. Then you can ask Cursor to "enable authentication for this template" to make the necessary code changes.

## Deployment

This template can be deployed to Vercel, Netlify, or Cloudflare Pages.

When you're ready to deploy your application, refer to the [Deployment Guide](./DEPLOYMENT.md) for detailed instructions on setting up your preferred platform.

You can use Cursor's Composer feature to generate the necessary configuration files for your chosen deployment platform by following the instructions in the deployment guide.

## Saving a Cloned Project to a New GitHub Repository

If you've cloned this template and want to save it to your own GitHub repository, follow these steps:

### Step 1: Clone the Original Repository
```bash
git clone https://github.com/original-owner/original-repo.git
cd original-repo
```

### Step 2: Create a New Repository on GitHub
1. Go to [GitHub](https://github.com)
2. Click the "+" icon in the top-right corner
3. Select "New repository"
4. Name your repository
5. Do NOT initialize with README, .gitignore, or license
6. Click "Create repository"

### Step 3: Change the Remote URL
You need to change the remote URL to point to your new repository:
```bash
# Check current remote
git remote -v

# Remove the original remote
git remote remove origin

# Add your new repository as the origin
git remote add origin https://github.com/your-username/your-new-repo.git
```

### Step 4: Push to Your New Repository
```bash
# Push all branches and tags
git push -u origin --all
git push origin --tags
```

### Optional: If You Want a Fresh Git History
If you want to start with a clean history (removing all previous commits):
```bash
# Remove the .git directory
rm -rf .git

# Initialize a new git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your new repository as the origin
git remote add origin https://github.com/your-username/your-new-repo.git

# Push to your new repository
git push -u origin main  # or 'master' depending on your default branch name
```