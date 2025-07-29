# TechStore - React Native E-commerce Template

A complete e-commerce mobile app template built with Expo and React Native.

## 🚀 Current Features

- **Tab Navigation**: Home, Explore, Cart, Profile
- **Product Browsing**: Categories, search, product details
- **Shopping Cart**: Add/remove items, quantity management
- **User Interface**: Professional iOS-style design

## ⚠️ What's Currently Mock Data

Everything! This template uses mock data and needs to be connected to real services:

- **Products & Categories**: Static arrays in `utils/mockData.ts`
- **User Authentication**: No real auth system
- **Cart Persistence**: Only in memory, resets on app restart
- **Payments**: No payment processing
- **Orders**: No order management

## 🛠 To Make This Production Ready

### 1. Setup Database (Supabase recommended)

Create these essential tables:

```sql
-- Categories
CREATE TABLE categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now()
);

-- Products
CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  price decimal(10,2) NOT NULL,
  original_price decimal(10,2),
  category_id uuid REFERENCES categories(id),
  description text,
  images text[] DEFAULT '{}',
  rating decimal(3,2) DEFAULT 0,
  stock_quantity integer DEFAULT 0,
  stripe_product_id text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Users (extends Supabase auth)
CREATE TABLE users (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  email text UNIQUE NOT NULL,
  first_name text,
  last_name text,
  created_at timestamptz DEFAULT now()
);

-- Orders
CREATE TABLE orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  status text DEFAULT 'pending',
  total_amount decimal(10,2) NOT NULL,
  stripe_payment_intent_id text,
  created_at timestamptz DEFAULT now()
);
```

### 2. Replace Mock Data

Replace imports in `app/(tabs)/*.tsx` files:

```typescript
// Replace this:
import { mockProducts } from '@/utils/mockData';

// With database calls:
import { supabase } from '@/lib/supabase';
const { data: products } = await supabase.from('products').select('*');
```

### 3. Add Authentication

Install and configure Supabase Auth:
```bash
npm install @supabase/supabase-js
```

### 4. Add Payments

Setup Stripe for payment processing:
```bash
npm install @stripe/stripe-react-native
```

### 5. Environment Variables

```env
EXPO_PUBLIC_SUPABASE_URL=your_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_key
STRIPE_PUBLISHABLE_KEY=pk_test_...
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Press `i` for iOS or `a` for Android.

## 📁 Key Files to Modify

- `utils/mockData.ts` → Replace with database calls
- `app/(tabs)/*.tsx` → Update to fetch real data
- `contexts/CartContext.tsx` → Add persistence
- `app/product/[id].tsx` → Connect to real product data

That's it! Focus on database setup first, then replace the mock data calls one screen at a time.