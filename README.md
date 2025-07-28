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

## 🗄️ Database Integration Guide

This template uses mock data for demonstration. To connect to a real database and implement full e-commerce functionality, follow this comprehensive integration guide.

### Recommended Tech Stack

- **Database**: [Supabase](https://supabase.com/) (PostgreSQL with real-time features)
- **Authentication**: Supabase Auth
- **Payments**: [Stripe](https://stripe.com/) for payment processing
- **Storage**: Supabase Storage for product images
- **Analytics**: PostHog or Mixpanel

### Database Schema

Create the following tables in your Supabase database:

#### 1. Categories Table
```sql
create table categories (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  description text,
  image_url text,
  slug text unique not null,
  is_active boolean default true,
  sort_order integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

#### 2. Products Table
```sql
create table products (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  description text,
  short_description text,
  price decimal(10,2) not null,
  original_price decimal(10,2),
  sku text unique not null,
  brand text,
  category_id uuid references categories(id),
  stripe_product_id text, -- Stripe Product ID
  stripe_price_id text,   -- Stripe Price ID
  inventory_count integer default 0,
  is_active boolean default true,
  is_featured boolean default false,
  weight decimal(8,2),
  dimensions jsonb, -- {length, width, height}
  specifications jsonb, -- Key-value pairs
  features text[], -- Array of feature strings
  tags text[], -- Array of tags
  meta_title text,
  meta_description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

#### 3. Product Images Table
```sql
create table product_images (
  id uuid default gen_random_uuid() primary key,
  product_id uuid references products(id) on delete cascade,
  image_url text not null,
  alt_text text,
  sort_order integer default 0,
  is_primary boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

#### 4. Users Table (extends Supabase auth.users)
```sql
create table user_profiles (
  id uuid references auth.users on delete cascade primary key,
  email text,
  full_name text,
  avatar_url text,
  phone text,
  date_of_birth date,
  membership_level text default 'basic', -- basic, premium, vip
  loyalty_points integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

#### 5. Orders Table
```sql
create table orders (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id),
  order_number text unique not null,
  status text default 'pending', -- pending, processing, shipped, delivered, cancelled
  subtotal decimal(10,2) not null,
  tax_amount decimal(10,2) default 0,
  shipping_amount decimal(10,2) default 0,
  total decimal(10,2) not null,
  currency text default 'USD',
  stripe_payment_intent_id text, -- Stripe Payment Intent ID
  stripe_session_id text, -- Stripe Checkout Session ID
  shipping_address jsonb, -- Complete shipping address
  billing_address jsonb, -- Complete billing address
  notes text,
  shipped_at timestamp with time zone,
  delivered_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

#### 6. Order Items Table
```sql
create table order_items (
  id uuid default gen_random_uuid() primary key,
  order_id uuid references orders(id) on delete cascade,
  product_id uuid references products(id),
  quantity integer not null,
  unit_price decimal(10,2) not null,
  total_price decimal(10,2) not null,
  product_snapshot jsonb, -- Store product details at time of order
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

#### 7. Shopping Cart Table
```sql
create table cart_items (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade,
  product_id uuid references products(id) on delete cascade,
  quantity integer not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, product_id)
);
```

#### 8. Wishlist Table
```sql
create table wishlist_items (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade,
  product_id uuid references products(id) on delete cascade,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, product_id)
);
```

#### 9. Product Reviews Table
```sql
create table product_reviews (
  id uuid default gen_random_uuid() primary key,
  product_id uuid references products(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  rating integer check (rating >= 1 and rating <= 5),
  title text,
  comment text,
  is_verified_purchase boolean default false,
  is_approved boolean default false,
  helpful_count integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

#### 10. Addresses Table
```sql
create table user_addresses (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade,
  name text not null,
  street_line_1 text not null,
  street_line_2 text,
  city text not null,
  state text not null,
  postal_code text not null,
  country text not null,
  is_default boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

### Implementation Steps

#### Step 1: Set Up Supabase Project

1. Create a new project at [supabase.com](https://supabase.com)
2. Copy your project URL and anon key
3. Create a `.env` file in your project root:
   ```
   EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
   EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

#### Step 2: Install Supabase Client

```bash
npm install @supabase/supabase-js
```

#### Step 3: Create Supabase Client

Create `lib/supabase.ts`:
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

#### Step 4: Replace Mock Data with API Calls

Replace functions in `utils/mockData.ts` with real database calls:

```typescript
import { supabase } from '@/lib/supabase';

export const getProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      categories(name),
      product_images(image_url, alt_text, is_primary)
    `)
    .eq('is_active', true);

  if (error) throw error;
  return data;
};

export const getProductById = async (id: string) => {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      categories(name),
      product_images(image_url, alt_text, sort_order),
      product_reviews(rating, comment, user_profiles(full_name))
    `)
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
};
```

#### Step 5: Set Up Authentication

Create `contexts/AuthContext.tsx`:
```typescript
import { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

interface AuthContextType {
  session: Session | null;
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  loading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ session, user: session?.user ?? null, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
```

#### Step 6: Set Up Stripe Integration

1. Install Stripe:
   ```bash
   npm install @stripe/stripe-react-native
   ```

2. Add Stripe keys to `.env`:
   ```
   EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_... # Server-side only
   ```

3. Create products in Stripe Dashboard and store the `stripe_product_id` and `stripe_price_id` in your products table.

#### Step 7: Implement Row Level Security (RLS)

Enable RLS on all tables and create policies:

```sql
-- Enable RLS
alter table user_profiles enable row level security;
alter table orders enable row level security;
alter table cart_items enable row level security;
alter table wishlist_items enable row level security;
alter table user_addresses enable row level security;

-- Example policies
create policy "Users can view own profile" on user_profiles
  for select using (auth.uid() = id);

create policy "Users can update own profile" on user_profiles
  for update using (auth.uid() = id);

create policy "Users can view own orders" on orders
  for select using (auth.uid() = user_id);

create policy "Users can manage own cart" on cart_items
  for all using (auth.uid() = user_id);
```

### Environment Variables Needed

```
# Supabase
EXPO_PUBLIC_SUPABASE_URL=your_supabase_project_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key # Server-side only

# Stripe
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_... # Server-side only
STRIPE_WEBHOOK_SECRET=whsec_... # For webhook verification

# Optional: Analytics
EXPO_PUBLIC_POSTHOG_KEY=your_posthog_key
```

### Migration Checklist

- [ ] Set up Supabase project and create all tables
- [ ] Configure RLS policies for data security
- [ ] Replace mock data functions with Supabase queries
- [ ] Implement authentication flows
- [ ] Set up Stripe products and integrate payment processing
- [ ] Create product seeding script for initial data
- [ ] Set up Stripe webhooks for order processing
- [ ] Add error handling and loading states
- [ ] Implement image upload for product management
- [ ] Add admin panel for product/order management
- [ ] Set up analytics tracking
- [ ] Test all features with real data
- [ ] Deploy and configure production environment variables

### Advanced Features to Add

Once basic integration is complete, consider adding:

- **Real-time notifications** using Supabase Realtime
- **Advanced search** with full-text search capabilities
- **Inventory management** with low-stock alerts
- **Shipping integrations** with carriers like UPS/FedEx
- **Customer support** with in-app chat
- **Analytics dashboard** for business insights
- **A/B testing** for feature optimization
- **Push notifications** for order updates and promotions

This comprehensive setup will transform your template into a fully functional, production-ready e-commerce application!