# Deployment Guide

## Deploy to Vercel

This project is configured to deploy on Vercel with serverless functions.

### Prerequisites
- GitHub account
- Vercel account (sign up at vercel.com)

### Deployment Steps

1. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   \`\`\`

2. **Import on Vercel**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Vercel will auto-detect the configuration from `vercel.json`
   - Click "Deploy"

3. **Environment Variables (Optional)**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add `PING_MESSAGE` if you want to customize the ping response

### Project Structure

- **Frontend**: React SPA built with Vite → deployed as static site
- **API**: Serverless functions in `/api` directory
  - `GET /api/ping` - Health check endpoint
  - `GET /api/demo` - Demo endpoint

### Local Development

\`\`\`bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
\`\`\`

### API Endpoints

After deployment, your API will be available at:
- `https://your-domain.vercel.app/api/ping`
- `https://your-domain.vercel.app/api/demo`

## Alternative: Deploy to Netlify

The project also includes Netlify configuration in `/netlify/functions/api.ts`:

1. Push to GitHub
2. Go to https://app.netlify.com
3. Import your repository
4. Deploy

## Technical Details

- **Frontend Framework**: React 18 + React Router 6
- **Build Tool**: Vite
- **API**: Vercel Serverless Functions (or Netlify Functions)
- **Styling**: TailwindCSS 3
- **TypeScript**: Full type safety
