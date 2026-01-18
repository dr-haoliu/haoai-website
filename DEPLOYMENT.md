# Deployment Guide

This guide will help you deploy the HaoAI website to Vercel and configure the custom domain haoai.org.

## Prerequisites

- A Vercel account (free account works)
- A GitHub account (you already have the repository at `dr-haoliu/haoai-website`)
- Domain haoai.org registered with a domain provider

## Step 1: Deploy to Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository: `dr-haoliu/haoai-website`
4. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `/` (or `./haoai-website` if you want)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
5. Click "Deploy"

### Option B: Via Vercel CLI

First, install Vercel CLI:

```bash
npm install -g vercel
```

Then navigate to the project directory and deploy:

```bash
cd haoai-website
vercel login
vercel
```

Follow the prompts to link your project and deploy.

## Step 2: Configure Custom Domain

### In Vercel Dashboard

1. Go to your project dashboard in Vercel
2. Click on the "Settings" tab
3. Click on "Domains" in the left sidebar
4. Enter `haoai.org` and click "Add"

### Update DNS Settings

Your domain provider will require you to update DNS records. Vercel will provide you with the specific records to add:

**Option 1: A Records** (if available)
```
Type: A
Name: @
Value: 76.76.21.21

Type: A  
Name: @
Value: 76.76.19.19
```

**Option 2: CNAME** (recommended)
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

⚠️ **Note**: The exact IP addresses and DNS records will be provided by Vercel after you add the domain. Use those specific values.

### Common Domain Providers

- **Namecheap**: Navigate to Advanced DNS
- **GoDaddy**: Go to DNS Management
- **Google Domains**: Go to DNS settings
- **Cloudflare**: Go to DNS management
- **Network Solutions**: Manage my domain names → DNS

## Step 3: Enable HTTPS

After configuring DNS:
1. Wait up to 24 hours for DNS propagation
2. Vercel will automatically provision SSL certificate
3. The domain will show as "Valid Configuration" in Vercel dashboard

## Step 4: Environment Variables (Optional)

If you need environment variables:

1. Go to Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add variables like:
   - `NEXT_PUBLIC_SITE_URL=https://haoai.org`

## Step 5: Test the Deployment

1. Visit `https://haoai.org`
2. Check all sections load correctly
3. Test dark/light mode toggle
4. Verify mobile responsiveness
5. Check social links work

## Step 6: Configure GitHub Actions (Optional)

If you want automatic deployments on push to main:

1. Go to your Vercel project settings
2. Copy the environment variables needed:
   - `VERCEL_TOKEN` (from Vercel Account Settings → Tokens)
   - `VERCEL_ORG_ID` (from Vercel project settings)
   - `VERCEL_PROJECT_ID` (from Vercel project settings)

3. Go to your GitHub repository: `dr-haoliu/haoai-website`
4. Add these secrets at: Settings → Secrets and variables → Actions
5. Push to main branch to trigger automatic deployment

## Troubleshooting

### DNS Propagation Issues

Use these tools to check DNS status:
- [DNSChecker](https://dnschecker.org/)
- [WhatsMyDNS](https://www.whatsmydns.net/)

### Build Errors

Check the Vercel deployment logs for specific errors. Common issues:
- Node.js version mismatch (should be 18+)
- Missing dependencies
- TypeScript errors

Domain not pointing correctly:
Verify your DNS records match what Vercel provides exactly.

## Production Checklist

- [ ] Vercel deployment successful
- [ ] Custom domain configured
- [ ] DNS records updated
- [ ] HTTPS enabled
- [ ] All pages load correctly
- [ ] Mobile responsive tested
- [ ] Social links functional
- [ ] Dark/light mode working
- [ ] OpenGraph metadata verified

## URLs After Deployment

- Vercel URL: `https://haoai-website.vercel.app`
- Custom Domain: `https://haoai.org`

## Support

If you need help:
- Vercel Documentation: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- GitHub Issues: https://github.com/dr-haoliu/haoai-website/issues