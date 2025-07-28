# TechStore - React Native E-commerce Template

A modern, production-ready e-commerce mobile application template built with Expo and React Native. This template provides a complete foundation for building iOS and Android shopping apps with professional UI/UX design and scalable architecture.

## 🚀 Features

### Core Functionality
- **Multi-tab Navigation**: Home, Explore, Featured, and Profile screens
- **Product Catalog**: Browse products by categories with search and filtering
- **Product Details**: Comprehensive product pages with image carousels, specifications, and reviews
- **Category Pages**: Dynamic category browsing with product grids
- **Featured Products**: Curated sections for trending items, editor's picks, and flash deals
- **User Profile**: Account management with order history and settings

### Technical Features
- **TypeScript Support**: Full type safety throughout the application
- **Responsive Design**: Optimized for all screen sizes and orientations
- **Professional UI**: Apple-inspired design with smooth animations and micro-interactions
- **Modular Architecture**: Reusable components and utilities for easy maintenance
- **Navigation**: File-based routing with Expo Router
- **State Management Ready**: Structured for easy integration with Redux, Zustand, or Context API

## 🛠 Tech Stack

- **Framework**: [Expo](https://expo.dev/) (SDK 53+)
- **Language**: TypeScript
- **Navigation**: Expo Router with file-based routing
- **UI Components**: React Native with custom styled components
- **Icons**: Lucide React Native
- **Styling**: StyleSheet.create with consistent design system
- **Platform**: iOS & Android (App Store & Google Play ready)

## 📱 App Structure

```
app/
├── (tabs)/                 # Tab-based navigation
│   ├── index.tsx          # Home screen
│   ├── explore.tsx        # Product exploration
│   ├── featured.tsx       # Featured products
│   ├── profile.tsx        # User profile
│   ├── categories/        # Category pages
│   │   └── [category].tsx # Dynamic category routing
│   └── _layout.tsx        # Tab navigation layout
├── product/
│   └── [id].tsx          # Product detail pages
├── _layout.tsx           # Root layout
└── +not-found.tsx        # 404 page

components/
├── CartIcon.tsx          # Shopping cart icon with badge
├── ProductCard.tsx       # Reusable product card component
└── SearchBar.tsx         # Search input with filter button

types/
└── product.ts           # TypeScript type definitions

utils/
└── mockData.ts          # Mock data for development
```

## 🎨 Design System

### Colors
- **Primary**: #007AFF (iOS Blue)
- **Success**: #34C759 (Green)
- **Warning**: #FF9500 (Orange)
- **Error**: #FF3B30 (Red)
- **Text Primary**: #1C1C1E
- **Text Secondary**: #8E8E93
- **Background**: #F2F2F7

### Typography
- **Large Title**: 32px, Bold
- **Title**: 22px, Semibold
- **Headline**: 20px, Semibold
- **Body**: 16px, Regular
- **Caption**: 13px, Regular

### Spacing
- Consistent 8px grid system
- Standard padding: 24px for screen edges
- Component spacing: 16px between sections

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio/Emulator (for Android development)

### Installation

1. **Clone or download this template**
   ```bash
   git clone <repository-url>
   cd techstore-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Run on your preferred platform**
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator
   - Scan QR code with Expo Go app for physical device testing

## 📦 Customization Guide

### 1. Branding
- Update app name in `app.json`
- Replace icons in `assets/images/`
- Modify color scheme in component styles
- Update store name and descriptions throughout the app

### 2. Product Data
- Replace mock data in `utils/mockData.ts`
- Update TypeScript interfaces in `types/product.ts`
- Integrate with your preferred backend API

### 3. Navigation
- Add new screens in the `app/` directory
- Modify tab bar in `app/(tabs)/_layout.tsx`
- Update navigation logic in components

### 4. Styling
- Customize the design system colors and typography
- Modify component styles in individual files
- Add new reusable components in `components/`

## 🔌 Backend Integration

This template is designed to work with any backend service. Popular choices include:

### Recommended Services
- **Database**: Supabase, Firebase, or custom REST API
- **Authentication**: Supabase Auth, Firebase Auth, or Auth0
- **Payments**: Stripe, PayPal, or platform-specific solutions
- **Storage**: Supabase Storage, Firebase Storage, or AWS S3

### Integration Points
- Replace mock data functions in `utils/mockData.ts`
- Add API service layer for data fetching
- Implement authentication flows
- Add payment processing logic
- Set up push notifications

## 📱 Deployment

### Building for Production

1. **Configure app.json**
   ```json
   {
     "expo": {
       "name": "Your App Name",
       "slug": "your-app-slug",
       "version": "1.0.0",
       "ios": {
         "bundleIdentifier": "com.yourcompany.yourapp"
       },
       "android": {
         "package": "com.yourcompany.yourapp"
       }
     }
   }
   ```

2. **Build with EAS**
   ```bash
   npm install -g @expo/cli
   eas build --platform all
   ```

3. **Submit to App Stores**
   ```bash
   eas submit --platform ios
   eas submit --platform android
   ```

## 🧪 Testing

### Running Tests
```bash
npm run test
```

### Testing on Devices
- Use Expo Go for quick testing during development
- Create development builds for testing native features
- Use EAS Build for production testing

## 📋 Features to Implement

This template provides the foundation. Consider adding:

- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Payment processing
- [ ] Order management
- [ ] Push notifications
- [ ] Offline support
- [ ] Analytics integration
- [ ] Social sharing
- [ ] Product reviews and ratings
- [ ] Wishlist functionality

## 🤝 Contributing

This is a template project. Feel free to:
- Fork and customize for your needs
- Submit improvements via pull requests
- Report issues or suggest features
- Share your implementations

## 📄 License

This template is provided as-is for educational and commercial use. Customize and distribute as needed for your projects.

## 🆘 Support

For questions about this template:
- Check the Expo documentation
- Review React Native guides
- Consult the TypeScript handbook
- Join the Expo Discord community

---

**Built with ❤️ using Expo and React Native**

Ready to build your next e-commerce success story!

## 📊 Database Integration Guide

This section provides comprehensive instructions for connecting your TechStore app to a production database with Supabase and integrating Stripe for payments.

### 🗄️ Database Schema

#### Required Tables

**1. Categories Table**
```sql
CREATE TABLE categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  image_url text,
  is_active boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

**2. Products Table**
```sql
CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  short_description text,
  price decimal(10,2) NOT NULL,
  original_price decimal(10,2),
  cost decimal(10,2),
  sku text UNIQUE,
  category_id uuid REFERENCES categories(id),
  brand text,
  weight decimal(8,2),
  dimensions jsonb, -- {length, width, height}
  is_active boolean DEFAULT true,
  is_featured boolean DEFAULT false,
  stock_quantity integer DEFAULT 0,
  low_stock_threshold integer DEFAULT 10,
  images text[] DEFAULT '{}',
  features text[] DEFAULT '{}',
  specifications jsonb DEFAULT '{}',
  tags text[] DEFAULT '{}',
  rating_average decimal(3,2) DEFAULT 0,
  rating_count integer DEFAULT 0,
  total_sales integer DEFAULT 0,
  stripe_product_id text UNIQUE,
  stripe_price_id text UNIQUE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

**3. Users Table (extends Supabase auth.users)**
```sql
CREATE TABLE users (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  email text UNIQUE NOT NULL,
  first_name text,
  last_name text,
  avatar_url text,
  phone text,
  date_of_birth date,
  membership_level text DEFAULT 'basic', -- basic, premium, vip
  loyalty_points integer DEFAULT 0,
  total_orders integer DEFAULT 0,
  total_spent decimal(12,2) DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

**4. Addresses Table**
```sql
CREATE TABLE addresses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  type text NOT NULL, -- shipping, billing
  first_name text NOT NULL,
  last_name text NOT NULL,
  company text,
  address_line_1 text NOT NULL,
  address_line_2 text,
  city text NOT NULL,
  state text NOT NULL,
  postal_code text NOT NULL,
  country text NOT NULL DEFAULT 'US',
  phone text,
  is_default boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

**5. Orders Table**
```sql
CREATE TABLE orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number text UNIQUE NOT NULL,
  user_id uuid REFERENCES users(id),
  status text NOT NULL DEFAULT 'pending', -- pending, confirmed, processing, shipped, delivered, cancelled
  payment_status text NOT NULL DEFAULT 'pending', -- pending, paid, failed, refunded
  subtotal decimal(10,2) NOT NULL,
  tax_amount decimal(10,2) DEFAULT 0,
  shipping_amount decimal(10,2) DEFAULT 0,
  discount_amount decimal(10,2) DEFAULT 0,
  total_amount decimal(10,2) NOT NULL,
  currency text DEFAULT 'USD',
  shipping_address jsonb,
  billing_address jsonb,
  tracking_number text,
  stripe_payment_intent_id text,
  stripe_customer_id text,
  notes text,
  shipped_at timestamptz,
  delivered_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

**6. Order Items Table**
```sql
CREATE TABLE order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id) ON DELETE CASCADE,
  product_id uuid REFERENCES products(id),
  quantity integer NOT NULL,
  unit_price decimal(10,2) NOT NULL,
  total_price decimal(10,2) NOT NULL,
  product_snapshot jsonb, -- Store product details at time of order
  created_at timestamptz DEFAULT now()
);
```

**7. Reviews Table**
```sql
CREATE TABLE reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  order_id uuid REFERENCES orders(id),
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title text,
  content text,
  images text[] DEFAULT '{}',
  is_verified_purchase boolean DEFAULT false,
  is_approved boolean DEFAULT true,
  helpful_votes integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(product_id, user_id, order_id)
);
```

**8. Wishlists Table**
```sql
CREATE TABLE wishlists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, product_id)
);
```

**9. Carts Table**
```sql
CREATE TABLE carts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  session_id text, -- For guest users
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE cart_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  cart_id uuid REFERENCES carts(id) ON DELETE CASCADE,
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  quantity integer NOT NULL DEFAULT 1,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(cart_id, product_id)
);
```

**10. Coupons Table**
```sql
CREATE TABLE coupons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text UNIQUE NOT NULL,
  description text,
  type text NOT NULL, -- percentage, fixed_amount
  value decimal(10,2) NOT NULL,
  minimum_amount decimal(10,2),
  maximum_discount decimal(10,2),
  usage_limit integer,
  used_count integer DEFAULT 0,
  is_active boolean DEFAULT true,
  starts_at timestamptz,
  expires_at timestamptz,
  created_at timestamptz DEFAULT now()
);
```

### 🔒 Row Level Security (RLS) Policies

Enable RLS and create policies for each table:

```sql
-- Enable RLS on all tables
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE wishlists ENABLE ROW LEVEL SECURITY;
ALTER TABLE carts ENABLE ROW LEVEL SECURITY;
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE coupons ENABLE ROW LEVEL SECURITY;

-- Example policies (create similar for other tables)
CREATE POLICY "Users can read own data" ON users
  FOR SELECT TO authenticated USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE TO authenticated USING (auth.uid() = id);

CREATE POLICY "Anyone can read active products" ON products
  FOR SELECT TO anon, authenticated USING (is_active = true);

CREATE POLICY "Anyone can read categories" ON categories
  FOR SELECT TO anon, authenticated USING (is_active = true);
```

### 🔧 Integration Steps

#### 1. Setup Supabase Project

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Run the SQL schema above in the SQL Editor
3. Configure your environment variables:

```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

#### 2. Setup Stripe Integration

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe Dashboard
3. Add environment variables:

```env
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

#### 3. Replace Mock Data with Database Calls

**Step 1: Create Supabase Client**
```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

**Step 2: Create Database Service Functions**
```typescript
// services/productService.ts
import { supabase } from '@/lib/supabase';

export const getProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      categories (
        id,
        name,
        slug
      )
    `)
    .eq('is_active', true);
  
  if (error) throw error;
  return data;
};

export const getProductsByCategory = async (categorySlug: string) => {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      categories!inner (
        id,
        name,
        slug
      )
    `)
    .eq('categories.slug', categorySlug)
    .eq('is_active', true);
  
  if (error) throw error;
  return data;
};
```

**Step 3: Update Components to Use Database**
```typescript
// Replace mockData imports with database calls
import { getProducts, getProductsByCategory } from '@/services/productService';

// In your components, replace mock data with:
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };
  
  fetchProducts();
}, []);
```

#### 4. Stripe Product Sync

Create a script to sync your database products with Stripe:

```typescript
// scripts/syncStripeProducts.ts
import Stripe from 'stripe';
import { supabase } from '@/lib/supabase';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export const createStripeProduct = async (product: any) => {
  const stripeProduct = await stripe.products.create({
    name: product.name,
    description: product.description,
    images: product.images,
    metadata: {
      product_id: product.id,
    },
  });

  const stripePrice = await stripe.prices.create({
    product: stripeProduct.id,
    unit_amount: Math.round(product.price * 100),
    currency: 'usd',
  });

  // Update product with Stripe IDs
  await supabase
    .from('products')
    .update({
      stripe_product_id: stripeProduct.id,
      stripe_price_id: stripePrice.id,
    })
    .eq('id', product.id);
};
```

### 📝 Implementation Checklist

- [ ] Create Supabase project and run schema
- [ ] Setup environment variables
- [ ] Create Supabase client
- [ ] Build database service functions
- [ ] Replace mock data calls with database calls
- [ ] Setup Stripe account and get API keys
- [ ] Create Stripe products for existing products
- [ ] Implement authentication with Supabase Auth
- [ ] Add user registration/login screens
- [ ] Implement cart persistence in database
- [ ] Setup order creation and management
- [ ] Add Stripe payment processing
- [ ] Setup webhooks for payment confirmations
- [ ] Implement admin dashboard for product management
- [ ] Add image upload for product images
- [ ] Setup email notifications for orders
- [ ] Implement search and filtering
- [ ] Add analytics and reporting

### 🚀 Deployment Considerations

- Use environment variables for all sensitive data
- Enable RLS on all tables with appropriate policies
- Setup proper indexes for performance
- Configure backup and monitoring
- Test payment flows thoroughly
- Setup webhook endpoints for Stripe events
- Implement proper error handling and logging

This comprehensive setup will transform your template into a production-ready e-commerce application with real data persistence and payment processing.