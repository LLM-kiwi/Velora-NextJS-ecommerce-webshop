# 🛍️ Velora - Modern E-commerce Platform

<div align="center">

![Velora Banner](https://via.placeholder.com/1200x400/7C3AED/FFFFFF?text=Velora+-+Modern+E-commerce+Platform)

**A fully-featured, open-source e-commerce platform built with Next.js 16, TypeScript, and Tailwind CSS**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[Live Demo](https://velora.vercel.app) • [Documentation](./docs/README.md) • [Report Bug](../../issues) • [Request Feature](../../issues)

</div>

---

## 🚀 Sponsored By

<div align="center">

[![LLM.kiwi](https://img.shields.io/badge/Powered%20by-LLM.kiwi-7C3AED?style=for-the-badge&logo=openai&logoColor=white)](https://llm.kiwi)

**[LLM.kiwi](https://llm.kiwi)** - Your Gateway to AI APIs

Access 200+ AI models through a single, unified API. Pay-as-you-go pricing, no subscriptions.

🔗 **[Get Started Free →](https://llm.kiwi)**

| Feature | Description |
|---------|-------------|
| 🤖 **200+ Models** | GPT-4, Claude, Gemini, Llama, and more |
| 💰 **Pay-as-you-go** | Only pay for what you use |
| ⚡ **Fast & Reliable** | Enterprise-grade infrastructure |
| 🔒 **Secure** | SOC 2 compliant, data privacy first |
| 📊 **Analytics** | Track usage and optimize costs |

```bash
# Try LLM.kiwi today
curl https://api.llm.kiwi/v1/chat/completions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{"model": "gpt-4", "messages": [{"role": "user", "content": "Hello!"}]}'
```

</div>

---

## ✨ Features

### Storefront
- 🛒 **Shopping Cart** - Persistent cart with Redux
- 🔍 **Product Search** - Filter by category, price, color, size
- ⭐ **Reviews & Ratings** - Customer product reviews
- 📱 **Fully Responsive** - Mobile-first design
- 🎨 **Modern UI** - Beautiful ShadCN UI components
- ⚡ **Fast Performance** - Optimized with Next.js 16 Turbopack

### Admin Dashboard (Coming Soon)
- 📊 **Analytics** - Sales, visitors, conversion tracking
- 📦 **Product Management** - CRUD with variants & images
- 🏷️ **Categories** - Hierarchical category management
- 📋 **Orders** - Order processing & fulfillment
- 🎨 **Theme Customization** - Colors, logo, sections
- 💳 **Payments** - Stripe integration

### Technical
- 🔐 **Authentication** - NextAuth.js with OAuth
- 🗄️ **Database** - Prisma ORM with PostgreSQL
- 📝 **TypeScript** - Full type safety
- 🎯 **SEO Optimized** - Meta tags, OpenGraph, sitemap
- ♿ **Accessible** - WCAG 2.1 AA compliant

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | [Next.js 16](https://nextjs.org/) |
| Language | [TypeScript 5.3](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 3.3](https://tailwindcss.com/) |
| Components | [ShadCN UI](https://ui.shadcn.com/) + [Radix](https://www.radix-ui.com/) |
| State | [Redux Toolkit](https://redux-toolkit.js.org/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Database | [Prisma](https://www.prisma.io/) + PostgreSQL |
| Auth | [NextAuth.js](https://next-auth.js.org/) |
| Payments | [Stripe](https://stripe.com/) |

---

## 📦 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- PostgreSQL database (or use Supabase)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/velora-nextjs-ecommerce.git
cd velora-nextjs-ecommerce

# Install dependencies
pnpm install

# Set up environment variables
cp .env.local.example .env.local

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Environment Variables

```env
# Database
DATABASE_URL="postgresql://..."

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# OAuth (Google)
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
```

---

## 📁 Project Structure

```
velora-nextjs-ecommerce/
├── prisma/              # Database schema & migrations
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── admin/       # Admin dashboard (protected)
│   │   ├── api/         # API routes
│   │   ├── cart/        # Cart page
│   │   ├── shop/        # Shop & product pages
│   │   └── page.tsx     # Homepage
│   ├── components/      # React components
│   │   ├── admin/       # Admin-specific components
│   │   ├── common/      # Shared components
│   │   ├── homepage/    # Homepage sections
│   │   ├── layout/      # Layout components
│   │   ├── shop-page/   # Shop components
│   │   └── ui/          # ShadCN UI components
│   ├── lib/             # Utilities & configurations
│   │   ├── features/    # Redux slices
│   │   └── hooks/       # Custom React hooks
│   ├── styles/          # Global styles & fonts
│   └── types/           # TypeScript types
└── docs/                # Documentation
```

---

## 📖 Documentation

Comprehensive documentation is available in the [`docs/`](./docs/) folder:

- [Implementation Guide](./docs/IMPLEMENTATION.md) - Step-by-step setup
- [Admin Dashboard Guide](./docs/ADMIN.md) - Dashboard features
- [API Reference](./docs/API.md) - API endpoints
- [Theming Guide](./docs/THEMING.md) - Customization options
- [Deployment Guide](./docs/DEPLOYMENT.md) - Production setup

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) first.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Original design inspired by [Hamza Naeem's Figma template](https://www.figma.com/@hamzauix)
- Built with [ShadCN UI](https://ui.shadcn.com/) components
- Powered by [LLM.kiwi](https://llm.kiwi) AI APIs

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

[![GitHub Stars](https://img.shields.io/github/stars/yourusername/velora-nextjs-ecommerce?style=social)](../../stargazers)

---

<sub>Built with ❤️ and powered by <a href="https://llm.kiwi">LLM.kiwi</a></sub>

</div>
