# 🚀 Next-Gen Learning Dashboard

A modern learning dashboard built with **Next.js App Router**, **Supabase**, **Tailwind CSS**, and **Framer Motion**.

The project focuses on server-rendered data fetching, responsive Bento-style layouts, smooth animations, and production-grade UI design while maintaining zero layout shifts and strong performance.

## Live Demo

**Demo:** https://next-gen-dashboard-best.vercel.app

**Repository:** https://github.com/aditya123000/next-gen-dashboard

---

# Overview

This project was built for the Frontend Intern Challenge.

The objective was to create a high-fidelity student dashboard that combines:

* Server-side data fetching with Supabase
* Responsive Bento Grid layouts
* Framer Motion animations
* Semantic and accessible HTML
* Production-quality UI/UX

The dashboard displays active courses, learning progress, analytics, and activity insights while maintaining excellent responsiveness and performance.

---

# Screenshots

## Desktop (1440px+)

<p align="center">
  <img src="https://github.com/user-attachments/assets/23177a90-3d9d-4a29-ad31-21c8273a9185" width="1100" alt="Desktop Dashboard">
</p>

## Tablet (768px–1024px)

<p align="center">
  <img src="https://github.com/user-attachments/assets/2f52bd27-acfc-49f0-850e-be7f442cb5fe" width="650" alt="Tablet Dashboard">
</p>

## Mobile (<768px)

<p align="center">
  <img src="https://github.com/user-attachments/assets/e98a4366-eac6-4836-a079-818dcea7a58a" width="350" alt="Mobile Dashboard">
</p>

---

# Tech Stack

* **Next.js (App Router)**
* **TypeScript**
* **Supabase**
* **Tailwind CSS**
* **Framer Motion**
* **Lucide React**
* **Vercel**

---

# Features

### Server-Side Data Fetching

Course data is fetched from Supabase using React Server Components.

Benefits:

* Faster initial page loads
* Reduced client-side JavaScript
* Better performance
* Cleaner architecture

---

### Responsive Bento Dashboard

The layout adapts across all screen sizes.

| Device  | Layout                                      |
| ------- | ------------------------------------------- |
| Desktop | Multi-column Bento Grid                     |
| Tablet  | Two-column Bento Grid                       |
| Mobile  | Single-column layout with bottom navigation |

---

### Framer Motion Animations

Implemented interactions include:

* Staggered page-load animations
* Spring-based hover effects
* Animated progress indicators
* Sidebar layout transitions
* Micro-interactions across the interface

All animations use transform and opacity to prevent layout shifts.

---

### Dynamic Course Cards

Course cards are rendered directly from Supabase data and include:

* Dynamic Lucide icons
* Progress tracking
* Course metadata
* Animated progress bars

---

### Loading & Error States

The application includes:

* Suspense boundaries
* Skeleton loading states
* Error boundaries
* Graceful fallback UI

---

# Architecture

## Server Components

Responsible for:

* Data fetching
* Layout composition
* Database access
* Initial rendering

Examples:

* DashboardShell
* Page routes
* Supabase query layer

---

## Client Components

Used only when interactivity is required.

Examples:

* Sidebar navigation
* Course cards
* Activity visualizations
* Progress indicators
* Framer Motion interactions

This approach minimizes client-side JavaScript while preserving a rich user experience.

---

# Data Flow

```text
User Request
      ↓
Next.js Route
      ↓
Server Component
      ↓
Supabase Query
      ↓
Course Data
      ↓
UI Composition
      ↓
Client Interactions
```

---

# Key Engineering Decisions

## Why Server Components?

Server Components keep data fetching on the server, reduce bundle size, and improve overall performance.

---

## Why Suspense?

Suspense provides immediate visual feedback through skeleton loaders while asynchronous data is loading.

---

## Why Shared Animation Variants?

Animation variants are centralized to:

* Maintain consistency
* Reduce duplication
* Simplify maintenance

---

## Why Framer Motion?

Framer Motion provides performant hardware-accelerated animations and satisfies the challenge requirements for staggered loading, spring physics, and layout animations.

---

# Challenges & Solutions

## Challenge: Staggered Page Load

The challenge required Bento tiles to appear sequentially instead of rendering simultaneously.

### Solution

Implemented a shared stagger container using parent-child Framer Motion variants so all dashboard tiles inherit animation state from a single source.

---

## Challenge: Preventing Layout Shifts

Animating layout properties can negatively impact user experience.

### Solution

Restricted animations to:

* opacity
* translateY
* scale

No width, height, margin, or padding animations are used.

---

## Challenge: Responsive Bento Layout

Maintaining hierarchy across desktop, tablet, and mobile required different grid strategies.

### Solution

Created adaptive layouts while preserving information hierarchy and usability across all breakpoints.

---

# Project Structure

```text
app/
├── layout.tsx
├── page.tsx
├── loading.tsx
└── error.tsx

components/
├── layout/
├── bento/
├── ui/
└── courses/

lib/
├── supabase/
├── animations/
└── utils/

types/

public/
```

---

# Local Development

## Installation

```bash
git clone https://github.com/your-username/next-gen-learning-dashboard.git

cd next-gen-learning-dashboard

npm install

npm run dev
```

---

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url

NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

# Evaluation Criteria Mapping

| Requirement          | Implementation                                           |
| -------------------- | -------------------------------------------------------- |
| Server Components    | DashboardShell + Supabase queries                        |
| Supabase Integration | Server-side data fetching                                |
| Framer Motion        | Staggered loading, hover interactions, layout animations |
| Responsive Design    | Desktop, tablet, and mobile layouts                      |
| Accessibility        | Semantic HTML and keyboard navigation                    |
| Loading States       | Suspense and skeleton components                         |
| Error Handling       | Route-level error boundaries                             |

---

# Future Improvements

* User authentication
* Personalized learning recommendations
* Learning goals and milestones
* Advanced analytics
* Course filtering and search

---

# License

MIT License

---

Built with **Next.js**, **Supabase**, **Tailwind CSS**, and **Framer Motion**.
