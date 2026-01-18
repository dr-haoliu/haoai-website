# HaoAI Website

Agentic AI for Great Good in Bioinformatics - Official website for HaoAI organization, showcasing research in AI applications for biomedical and healthcare fields.

## 🌟 Features

- Modern, responsive design built with Next.js 14+ and Tailwind CSS
- Dark/light mode with persistent theme preference
- Comprehensive sections: About, Research, News, Projects, Publications, Team
- Optimized for performance and SEO
- Built-in TypeScript for type safety
- Accessible components following WCAG guidelines

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-org/haoai-website.git
cd haoai-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
haoai-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Layout components (Navbar, Footer)
│   ├── sections/          # Page sections (Hero, About, Research, etc.)
│   └── ui/                # Reusable UI components (Button, Card, etc.)
├── lib/
│   └── utils.ts           # Utility functions (cn for className merging)
├── public/                # Static assets
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
```

## 🎨 Design System

The website uses a custom design system with:

- **Colors**: Primary blue and secondary green palette for bioinformatics theme
- **Typography**: Inter font family for modern, clean text
- **Spacing**: Consistent spacing scale following Tailwind defaults
- **Dark Mode**: Full support for dark/light theme switching

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Add custom domain `haoai.org` in Vercel dashboard
4. Update DNS settings at your domain registrar

### Environment Variables

Set up the following environment variables for production:

- `NEXT_PUBLIC_SITE_URL`: Your production URL (e.g., https://haoai.org)

## 📝 Content Management

Content is currently managed through:
- React components for static content
- Data files (JSON/TypeScript) for dynamic sections
- Planned: MDX for blog posts and news articles

## 🔧 Technologies

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **UI Components**: Custom components with React
- **Utilities**: clsx, tailwind-merge

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

- Website: [https://haoai.org](https://haoai.org)
- Founder: Dr. Hao Liu (Montclair State University)
- Email: liuha [at] montclair [dot] edu

## 🔗 Links

- Personal Website: [https://dr-haoliu.github.io](https://dr-haoliu.github.io)
- GitHub: [https://github.com/dr-haoliu](https://github.com/dr-haoliu)
- LinkedIn: [https://linkedin.com/in/drliuhao](https://linkedin.com/in/drliuhao)
- Twitter: [https://twitter.com/liuhao530](https://twitter.com/liuhao530)