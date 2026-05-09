# 🚀 Deploying Allowee for Free

You can deploy Allowee entirely for free using the following stack. This setup provides a custom `*.vercel.app` and `*.onrender.com` domain.

## 1. Database: Neon or Supabase (PostgreSQL)
Both offer generous free tiers for PostgreSQL.
- **Neon.tech**: Optimized for serverless, easy setup.
- **Supabase.com**: Solid choice, includes a nice UI for data.
- **Action**: Create a database and copy the `DATABASE_URL` (Connection String).

## 2. Backend: Render or Railway
- **Render.com**:
    - Create a "Web Service".
    - Connect your GitHub repo.
    - Set `Root Directory` to `backend`.
    - Build Command: `npm install && npm run build`
    - Start Command: `node dist/index.js`
    - **Environment Variables**: Add `DATABASE_URL` and `JWT_SECRET`.
- **Note**: Render's free tier "spins down" after inactivity. The first request might take 30-50 seconds to wake it up.

## 3. Frontend: Vercel
Vercel is the best home for Next.js apps.
- **Vercel.com**:
    - Import your repo.
    - Select `frontend` as the root directory.
    - Vercel automatically detects Next.js settings.
    - **Environment Variables**:
        - `NEXT_PUBLIC_API_URL`: Your Render backend URL (e.g., `https://allowee-api.onrender.com/api`)
- **Domain**: You will get a free `allowee.vercel.app` domain.

## 4. Keeping it "Warm"
Since Render's free tier sleeps, you can use a free service like **Cron-job.org** to ping your `https://your-api.onrender.com/api/health` endpoint every 14 minutes to keep it awake.

## 📝 Required Env Vars Summary
| Key | Where to set | Description |
|---|---|---|
| `DATABASE_URL` | Backend | Postgres connection string |
| `JWT_SECRET` | Backend | A long random string |
| `FRONTEND_URL` | Backend | Your Vercel URL (for CORS) |
| `NEXT_PUBLIC_API_URL` | Frontend | Your Backend URL + `/api` |
