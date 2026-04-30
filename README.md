# Sun Cart - E-Commerce Platform

A modern, full-stack e-commerce application built with Next.js 16 and MongoDB, featuring secure authentication, product management, and user profiles.

## 🚀 Production Deployment

**Live Application:** [https://sun-cart-aul78crp5-morshed-alam-tonmoy.vercel.app](https://sun-cart-aul78crp5-morshed-alam-tonmoy.vercel.app)

**Deployed on:** Vercel (Production)

---

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Running Locally](#running-locally)
- [Deployment](#deployment)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 16.2.4 with Turbopack
- **UI Library:** React 19.2.4
- **Styling:** 
  - Tailwind CSS 4
  - DaisyUI 5.5.19
  - Animate.css 4.1.1
- **Icons:** React Icons 5.6.0
- **Notifications:** React Toastify 11.1.0

### Backend
- **Runtime:** Node.js
- **Database:** MongoDB 7.2.0
- **Authentication:** Better Auth 1.6.9
  - Email & Password Authentication
  - Google OAuth Social Login
  - MongoDB Adapter

### Development Tools
- **Linting:** ESLint 9
- **Compiler:** Babel React Compiler
- **CSS Processing:** Tailwind CSS PostCSS 4
- **Version Control:** Git & GitHub

### Deployment
- **Hosting:** Vercel
- **Build Tool:** Next.js Build System

---

## ✨ Features

### Authentication System
- ✅ Email & Password Sign Up & Sign In
- ✅ Google OAuth Social Login Integration
- ✅ Secure Session Management
- ✅ User Profile Management
- ✅ Protected Routes & API Endpoints
- ✅ Persistent Authentication with MongoDB

### Product Management
- ✅ Product Listing & Display
- ✅ Product Details Page
- ✅ Product Cards with Images
- ✅ Dynamic Product Filtering
- ✅ Remote Image Optimization

### User Features
- ✅ User Profile Page
- ✅ User Profile Update Modal
- ✅ Shopping Cart Functionality
- ✅ User Dashboard
- ✅ Responsive Navigation

### UI/UX
- ✅ Modern Responsive Design
- ✅ Mobile-First Approach
- ✅ Smooth Animations with Animate.css
- ✅ Toast Notifications for User Feedback
- ✅ Dynamic Navigation with Active Links
- ✅ Brand Components & Banner

### Additional Features
- ✅ Summer Tips Section
- ✅ Product Branding Display
- ✅ Footer with Links
- ✅ Dynamic Routing for Product Details
- ✅ Not Found (404) Page Handler

---

## 📁 Project Structure

```
sun-cart/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── signin/          # Sign In Page
│   │   │   └── signup/          # Sign Up Page
│   │   ├── (main)/
│   │   │   ├── home/            # Home Page
│   │   │   ├── product/         # Product Listing
│   │   │   └── profile/         # User Profile
│   │   ├── api/
│   │   │   └── auth/[...all]/   # Better Auth API Routes
│   │   ├── layout.js            # Root Layout
│   │   ├── page.js              # Landing Page
│   │   ├── not-found.jsx        # 404 Page
│   │   └── globals.css          # Global Styles
│   ├── component/
│   │   ├── banner/              # Banner Component
│   │   ├── brand/               # Brand Component
│   │   ├── products/            # Product Components
│   │   │   ├── card.jsx         # Single Product Card
│   │   │   ├── cards.jsx        # Product Cards Container
│   │   │   └── ProductsCards.jsx
│   │   ├── shared/
│   │   │   ├── Footer.jsx       # Footer Component
│   │   │   ├── Navbar.jsx       # Navigation Bar
│   │   │   └── NavLink.jsx      # Nav Link Component
│   │   ├── summerTips/          # Summer Tips Component
│   │   └── UpdateUserModal/     # User Profile Modal
│   ├── lib/
│   │   ├── auth.js              # Better Auth Config
│   │   └── auth-client.js       # Client-Side Auth
│   └── assets/                  # Static Assets
├── public/
│   └── data.json                # Product Data
├── next.config.mjs              # Next.js Configuration
├── postcss.config.mjs           # PostCSS Configuration
├── tailwind.config.js           # Tailwind Configuration
├── eslint.config.mjs            # ESLint Configuration
├── jsconfig.json                # JS Configuration
└── package.json                 # Dependencies

```

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- MongoDB database (local or Atlas)
- Google OAuth credentials (optional, for social login)

### Clone Repository
```bash
git clone https://github.com/morshed-alam-tonmoy/sun-cart.git
cd sun-cart
```

### Install Dependencies
```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# MongoDB Connection
SUN_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>

# Google OAuth Credentials
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Application URL (for Vercel deployment)
NEXT_PUBLIC_APP_URL=https://your-vercel-domain.vercel.app
```

### Getting Credentials

**MongoDB Atlas:**
1. Create account at [mongodb.com/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster and get connection string
3. Use as `SUN_URI`

**Google OAuth:**
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create OAuth 2.0 credentials
3. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://your-domain.vercel.app/api/auth/callback/google` (production)
4. Copy `Client ID` and `Client Secret`

---

## 🏃 Running Locally

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

---

## 🚀 Deployment

### Deploy to Vercel

The application is configured for easy Vercel deployment with automatic GitHub integration.

**Option 1: Vercel CLI**
```bash
npm install -g vercel
vercel --prod
```

**Option 2: GitHub Integration**
1. Push code to GitHub repository
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables in Project Settings
5. Deploy

**Option 3: Manual Deployment**
```bash
vercel --prod
```

### Pre-Deployment Checklist
- ✅ All environment variables configured
- ✅ MongoDB connection working
- ✅ Google OAuth credentials valid
- ✅ Production URL set in `NEXT_PUBLIC_APP_URL`
- ✅ Build passes locally: `npm run build`
- ✅ No console errors or warnings

---

## 🔌 API Endpoints

### Authentication Routes
All authentication endpoints are handled by Better Auth at:
```
/api/auth/[...all]
```

**Supported Endpoints:**
- `POST /api/auth/sign-up/email` - Email signup
- `POST /api/auth/sign-in/email` - Email signin
- `POST /api/auth/sign-in/social` - Social login (Google)
- `POST /api/auth/sign-out` - Sign out
- `GET /api/auth/session` - Get current session

### Product Data
```
/public/data.json - Static product data
```

---

## 🔐 Authentication

### Better Auth Integration
- **Server-side:** [auth.js](src/lib/auth.js) - Better Auth configuration with MongoDB
- **Client-side:** [auth-client.js](src/lib/auth-client.js) - Client authentication utilities

### Protected Routes
- `/home` - Requires authentication
- `/product` - Requires authentication
- `/profile` - Requires authentication

### Public Routes
- `/` - Landing page
- `/signin` - Sign in page
- `/signup` - Sign up page

---

## 🎨 Styling & Theming

### Tailwind CSS
- Utility-first CSS framework
- DaisyUI components for rapid development
- Custom animations with Animate.css

### Responsive Design
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## 📱 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

---

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Environment Variables Not Loading
- Ensure `.env.local` exists in root directory
- Prefix client-side variables with `NEXT_PUBLIC_`
- Restart dev server after changing env variables

### MongoDB Connection Issues
- Verify connection string in `.env.local`
- Check IP whitelist in MongoDB Atlas
- Ensure database user has appropriate permissions

### Google OAuth Issues
- Verify redirect URIs match exactly
- Check Client ID and Client Secret
- Ensure OAuth is enabled in Google Cloud Console

---

## 📄 License

This project is private and created as part of Programming Hero Assignment 8.

---

## 👤 Author

**Morshed Alam Tonmoy**
- GitHub: [morshed-alam-tonmoy](https://github.com/morshed-alam-tonmoy)
- Vercel: [sun-cart deployment](https://vercel.com/morshed-alam-tonmoy/sun-cart)

---

## 🤝 Support

For issues or questions:
1. Check the troubleshooting section
2. Review Environment Variables setup
3. Check console logs for detailed error messages
4. Verify all dependencies are installed: `npm install`

---

## 🔄 Recent Updates

- ✅ Fixed production build configuration
- ✅ Removed console.log statements from build output
- ✅ Implemented dynamic baseURL for production deployment
- ✅ Added environment variable support for production URL
- ✅ Deployed successfully to Vercel

---

