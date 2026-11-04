# Next.js, NextAuth and MongoDB boilerplate

A commented starter for beginners: login with mobile number and password, protected pages, and an optional MongoDB user lookup. It uses the Next.js Pages Router.

| Package | Version |
| --- | --- |
| Next.js | 16 |
| React | 19 |
| NextAuth | 4 |
| MongoDB driver | 7 |

Requires Node.js 20.19 or newer.

## Getting started

```bash
git clone https://github.com/MahamedHMahamoud/fullstack-nextjs-next_auth-mongodb-boilerplate.git
cd fullstack-nextjs-next_auth-mongodb-boilerplate
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000 and log in with the demo user: mobile `123456789`, password `password`.

## Environment variables

| Variable | When | Purpose |
| --- | --- | --- |
| `NEXTAUTH_URL` | Always | Full URL of the app |
| `NEXTAUTH_SECRET` | Production | Signs the session. Generate with `openssl rand -base64 32` |
| `MONGODB_URI` | With MongoDB | Connection string for your database |

## Project structure

| File | What it does |
| --- | --- |
| `pages/login.js` | Login form. Redirects to `/` if you are already logged in |
| `pages/index.js` | Protected page. `getServerSideProps` redirects to `/login` without a session |
| `pages/api/auth/[...nextauth].js` | NextAuth setup, checks the credentials |
| `pages/api/system/login.js` | `POST` endpoint that looks up a user in MongoDB |
| `lib/db.js` | Shared MongoDB connection |
| `components/general/` | Layout, plus a header showing the user and a sign-out button, and a footer |

## Connecting MongoDB

1. Set `MONGODB_URI` in `.env.local`, for example `mongodb://localhost:27017/YourDatabaseName`.
2. Add users to a `users` collection with the fields `mobile`, `password`, `fname` and `status`.
3. In `pages/api/auth/[...nextauth].js`, replace the hardcoded user with the commented `fetch` call.

## Before you deploy

This is a tutorial starter, so two things are deliberately simple and must change for real use:

- Remove the hardcoded demo user, or anyone can log in with it.
- Hash passwords, for example with bcrypt or argon2. `pages/api/system/login.js` compares plain text.

Also set `NEXTAUTH_SECRET`, and add rate limiting to the login routes.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Runs the production build |
