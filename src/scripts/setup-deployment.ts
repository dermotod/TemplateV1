#!/usr/bin/env node

import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const VERCEL_CONFIG = `{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}`;

const NETLIFY_CONFIG = `[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[plugins]]
  package = "@netlify/plugin-nextjs"`;

const CLOUDFLARE_CONFIG = `name = "my-next-app"
compatibility_date = "2023-01-01"
compatibility_flags = ["nodejs_compat"]

[build]
  command = "npm run build"
  output = ".next"

[site]
  bucket = ".next"`;

async function main() {
  console.log(chalk.blue('🚀 Deployment Configuration Generator'));
  
  const { platform } = await inquirer.prompt([
    {
      type: 'list',
      name: 'platform',
      message: 'Select your deployment platform:',
      choices: ['Vercel', 'Netlify', 'Cloudflare Pages']
    }
  ]);
  
  let filename = '';
  let content = '';
  
  switch (platform) {
    case 'Vercel':
      filename = 'vercel.json';
      content = VERCEL_CONFIG;
      break;
    case 'Netlify':
      filename = 'netlify.toml';
      content = NETLIFY_CONFIG;
      break;
    case 'Cloudflare Pages':
      filename = 'wrangler.toml';
      content = CLOUDFLARE_CONFIG;
      break;
  }
  
  const filePath = path.join(process.cwd(), filename);
  
  if (fs.existsSync(filePath)) {
    const { overwrite } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'overwrite',
        message: `${filename} already exists. Overwrite?`,
        default: false
      }
    ]);
    
    if (!overwrite) {
      console.log(chalk.yellow('Operation cancelled.'));
      return;
    }
  }
  
  fs.writeFileSync(filePath, content);
  console.log(chalk.green(`✅ Created ${filename} for ${platform} deployment`));
  
  console.log(chalk.blue('\nNext steps:'));
  console.log(`1. Push your code to GitHub`);
  console.log(`2. Follow the ${platform} deployment steps in DEPLOYMENT.md`);
  console.log(`3. Don't forget to set up your environment variables!`);
}

main().catch(console.error); 