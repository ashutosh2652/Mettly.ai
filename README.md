# Meetly.AI

A modern web application for managing AI-powered meetings and agents built with Next.js.

## Project Overview

Meetly.AI is a platform that helps users manage meetings and AI agents. It features:

- User authentication with email/password and social logins (Google, GitHub)
- Dashboard interface for managing meetings and AI agents
- Responsive design with mobile-first approach
- Modern UI components using Radix UI primitives
- PostgreSQL database with Drizzle ORM
- Type-safe API using tRPC

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Authentication:** Custom auth solution with better-auth
- **Database:** PostgreSQL with Drizzle ORM
- **API:** tRPC for type-safe APIs
- **UI Components:**
  - Radix UI primitives
  - Tailwind CSS for styling
  - class-variance-authority for component variants
  - Lucide icons
- **Fonts:** Geist Sans and Geist Mono
- **Form Handling:** React Hook Form with Zod validation

## Project Structure

```bash
app
├── api
│   ├── auth
│   │   ├── [...nextauth]
│   │   └── route.ts
│   ├── agents
│   │   ├── route.ts
│   │   └── [id]
│   │       ├── route.ts
│   ├── meetings
│   │   ├── route.ts
│   │   └── [id]
│   │       ├── route.ts
│   └── users
│       ├── route.ts
│       └── [id]
│           ├── route.ts
├── components
│   ├── auth
│   │   ├── LoginForm.tsx
│   │   └── RegisterForm.tsx
│   ├── dashboard
│   │   ├── AgentCard.tsx
│   │   ├── MeetingCard.tsx
│   │   └── StatsOverview.tsx
│   ├── layout
│   │   └── Navbar.tsx
│   └── ui
│       ├── Button.tsx
│       ├── Input.tsx
│       └── Modal.tsx
├── lib
│   ├── auth.ts
│   ├── db.ts
│   └── trpc.ts
├── middleware
│   └── auth.ts
├── pages
│   ├── api
│   │   └── auth
│   │       └── [...nextauth].ts
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx
│   ├── login.tsx
│   └── register.tsx
└── styles
    ├── globals.css
    └── tailwind.css
```

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Environment Variables

This project requires the following environment variables to be set up in your `.env` file:

```
DATABASE_URL=your_postgres_database_url
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXT_PUBLIC_APP_URL=your_app_url
```
