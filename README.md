# Allowee - Financial Tracking & Optimization for Nigerian Students 🇳🇬

Allowee is a comprehensive financial platform designed specifically for the unique needs of Nigerian university students. It combines expense tracking, AI-driven budget optimization, and a campus marketplace to help students make the most of their "Allowee" (allowance).

## 🚀 Key Features

### 🏦 Finance Tracking & Bank Sync
- **Secure Transaction Logging**: Fast manual entry or automated sync via Mock Mono/Okra integration.
- **Student-Centric Categories**: "Ramen-tier Groceries", "Salo & Cafeteria", "Engineering Textbooks", etc.
- **Privacy First**: App-level PIN/Biometric lock (Try PIN `1234`) and a dashboard "Privacy Mode" to hide sensitive balances.

### 🤖 Budget My Allowee (AI Agent)
- **Tier-Based Optimization**: Choose your vibe from **LAPO Baby** (Survival), **Yanga** (Balanced), **Cool Kids** (Leisure), to **NEPO Babies** (Premium).
- **Campus Marketplace Integration**: Our AI scans real-time price listings from your specific university (UNILAG, CU, UI, ABUAD, etc.) to build a feasible weekly/monthly spend plan.

### 🏫 Campus Marketplace
- **Real-time Price Discovery**: Find the cheapest cafeteria meals, bookstore essentials, and hair salon prices across 18+ onboarded Nigerian universities.
- **Merchant Mode**: A portal for school authorities and vendors to list and manage campus items.

### 🤝 Social Feed & Leaderboard
- **Share Your Allowee Plan**: Share your most efficient budgeting templates with students across the country.
- **Semester Leaderboard**: Get upvoted for your budgeting skills and win campus vouchers.

## 🛡️ Security & Privacy
- **Arithmetic Correctness**: Uses `decimal.js` for all calculations to ensure 100% precision.
- **Strict Rate Limiting**: Protection against brute-force and API abuse.
- **Data Portability**: Download your complete history in CSV or JSON format anytime.
- **Transparency**: Clear disclaimers and data-handling policies built into the UI.

## 🛠️ Tech Stack
- **Frontend**: Next.js 15, Tailwind CSS, Framer Motion, Lucide React.
- **Backend**: Node.js (ESM), Express, Zod (Validation), Prisma ORM.
- **Database**: PostgreSQL with Decimal support.

## 🏃 Getting Started

### Prerequisites
- Node.js 20+
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd allowee
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   # Configure .env with DATABASE_URL and JWT_SECRET
   npx prisma generate
   npx prisma db push
   npm run build
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run build
   npm run dev
   ```

4. **Access the App**
   Open `http://localhost:3000`. Default demo PIN is `1234`.

## 🌐 Free Deployment
For instructions on how to deploy this app for free (Vercel + Render + Neon), see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 📄 License
This project is licensed under the ISC License. Built with ❤️ for the Nigerian student community.
