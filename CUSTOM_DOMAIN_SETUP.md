# Custom Domain Setup for haoai.org

## Overview
This guide walks through configuring the custom domain `haoai.org` for the HaoAI website deployed on Vercel.

## Prerequisites
- Domain `haoai.org` already purchased
- Live website deployed: https://haoai-website.vercel.app
- Access to domain registrar (where you bought haoai.org)
- Vercel account connected to GitHub

## Step 1: Add Domain in Vercel

### Option A: Using Vercel CLI
```bash
cd haoai-website
vercel domains add haoai.org
```

### Option B: Using Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Select the `haoai-website` project
3. Go to Settings → Domains
4. Click "Add Domain"
5. Enter `haoai.org` and click "Add"

Both options will generate DNS records that you need to configure.

## Step 2: Configure DNS Records

After adding the domain in Vercel, you'll get DNS records to add. The typical records are:

### For Root Domain (haoai.org)
```
Type: A
Name: @
Value: 76.76.21.21
```

### For www Subdomain (optional but recommended)
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### How to Add DNS Records

The exact steps depend on your domain registrar:

**GoDaddy**
1. Log in to GoDaddy
2. Go to My Products → Domains
3. Click DNS next to your domain
4. Add the A and CNAME records above

**Namecheap**
1. Log in to Namecheap
2. Go to Domain List → Manage
3. Go to Advanced DNS
4. Add new A and CNAME records

**Google Domains**
1. Log in to Google Domains
2. Click on your domain
3. Go to DNS → Custom resource records
4. Add the A and CNAME records

**Cloudflare**
1. Log in to Cloudflare
2. Select your domain
3. Go to DNS → Records
4. Add A and CNAME records
5. **Important**: Set proxy status to "DNS only" (gray cloud icon)

## Step 3: Verify DNS Propagation

DNS changes can take anywhere from 5 minutes to 48 hours to propagate worldwide.

Check if DNS is propagated:

```bash
# Check A record
dig haoai.org A +short

# Expected output:
# 76.76.21.21

# Check CNAME record
dig www.haoai.org CNAME +short

# Expected output:
# cname.vercel-dns.com
```

On Windows:
```cmd
nslookup haoai.org
nslookup www.haoai.org
```

Online tools:
- https://www.whatsmydns.net/
- https://dnschecker.org/

## Step 4: HTTPS Configuration

Vercel automatically provisions SSL certificates for all custom domains.

1. Wait for DNS to propagate
1. Go to Vercel Dashboard → Domains
1. Wait for the SSL certificate status to become "Valid" (green checkmark)
1. This typically happens automatically within 24 hours

Forcing HTTPS:
1. In Vercel Dashboard → Settings → Domains
1. Ensure "Enforce HTTPS" is enabled
1. This redirects all HTTP traffic to HTTPS

## Step 5: Update Site URLs

Once the domain is active, update these files:

### Update SEO Metadata
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: 'HaoAI - Agentic AI for Bioinformatics',
  description: 'Advancing AI research in bioinformatics and healthcare',
  url: 'https://haoai.org',  // Update this
  openGraph: {
    url: 'https://haoai.org',  // Update this
    siteName: 'HaoAI',
    title: 'HaoAI - Agentic AI for Bioinformatics',
    description: 'Advancing AI research in bioinformatics and healthcare',
    images: [
      {
        url: 'https://haoai.org/og-image.png',  // Update this
        width: 1200,
        height: 630,
      }
    ]
  }
}
```

### Update Sitemap
```bash
npm install next-sitemap
```

```javascript
// sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://haoai.org',
  generateRobotsTxt: true,
}
```

```bash
# Add to package.json scripts
"scripts": {
  "postbuild": "next-sitemap"
}
```

## Step 6: Test the Domain

Once DNS is propagated:

1. Visit https://haoai.org
2. Verify:
   - [ ] Page loads correctly
   - [ ] Styles are loading (no broken CSS)
   - [ ] HTTPS is active (padlock icon)
   - [ ] All internal links work
   - [ ] Contact forms and interactive elements work
   - [ ] Images and assets are loading

3. Test redirects:
   - http://haoai.org → https://haoai.org
   - http://www.haoai.org → https://haoai.org (if configured)

## Troubleshooting

### Issue: Domain not working
- **Check DNS propagation**: Use a tool like https://www.whatsmydns.net/
- **Wait longer**: DNS can take up to 48 hours
- **Verify records**: Ensure you added the correct DNS records

### Issue: HTTP instead of HTTPS
- **Check SSL status**: In Vercel Dashboard
- **Wait for certificate**: SSL certificates can take up to 24 hours
- **Verify DNS records**: Incorrect records can prevent SSL

### Issue: "www" version doesn't work
- **Add CNAME record**: Ensure you added the www CNAME
- **Check Cloudflare**: If using Cloudflare, disable proxy (gray cloud)

### Issue: Vercel shows "Pending" status
- **DNS records incorrect**: Verify you added exactly what Vercel provided
- **Wrong record type**: Ensure A records and CNAME records are correct
- **Values mismatch**: Copy values exactly from Vercel dashboard

## Alternative: Use Vercel's Managed DNS

If you want Vercel to manage all your DNS:

1. In Vercel Dashboard → Domains
2. Click "Use DNS providers"
3. Follow instructions to switch your domain's nameservers to Vercel

This simplifies setup but means Vercel manages all DNS.

## Security Best Practices

After domain setup:

1. **Enable HSTS** (optional, advanced)
   ```javascript
   // next.config.js
   module.exports = {
     async headers() {
       return [
         {
           source: '/(.*)',
           headers: [
             {
               key: 'Strict-Transport-Security',
               value: 'max-age=31536000; includeSubDomains'
             }
           ]
         }
       ]
     }
   }
   ```

2. **Monitor SSL expiration**: Vercel auto-renews, but check occasionally

3. **Set up email forwarding**: For contact@haoai.org (depending on registrar)

## Next Steps After Domain Setup

1. Update all hardcoded URLs to use `haoai.org`
2. Add sitemap and robots.txt
3. Set up analytics (Google Analytics, etc.)
4. Configure social media links
5. Add structured data (JSON-LD for SEO)

## Need Help?

- Vercel docs: https://vercel.com/docs/concepts/deployments/overview
- DNS issues: Contact your domain registrar
- Vercel support: https://vercel.com/support

---

**Status**: ⏳ Pending DNS configuration by domain owner
**Expected completion**: 24-48 hours after DNS records are added