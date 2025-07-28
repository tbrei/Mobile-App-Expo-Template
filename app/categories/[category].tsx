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

### Overview
This template uses mock data for development. To connect your own products and create a production-ready e-commerce app, you'll need to set up a database and integrate with payment processing.

### Recommended Tech Stack
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Payments**: Stripe
- **File Storage**: Supabase Storage

### Database Schema

#### 1. Products Table
```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  original_price DECIMAL(10,2),
  category_id INTEGER REFERENCES categories(id),
  brand VARCHAR(100),
  sku VARCHAR(100) UNIQUE,
  rating DECIMAL(3,2) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  in_stock BOOLEAN DEFAULT true,
  stock_quantity INTEGER DEFAULT 0,
  images JSONB, -- Array of image URLs
  features JSONB, -- Array of feature strings
  specifications JSONB, -- Key-value pairs
  stripe_product_id VARCHAR(255), -- Stripe Product ID
  stripe_price_id VARCHAR(255), -- Stripe Price ID
  is_featured BOOLEAN DEFAULT false,
  is_trending BOOLEAN DEFAULT false,
  discount_percentage INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### 2. Categories Table
```sql
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  image_url VARCHAR(255),
  slug VARCHAR(100) UNIQUE,
  parent_id INTEGER REFERENCES categories(id),
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### 3. Users Table (extends Supabase auth.users)
```sql
CREATE TABLE user_profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  avatar_url VARCHAR(255),
  phone VARCHAR(20),
  membership_level VARCHAR(20) DEFAULT 'basic', -- basic, premium, vip
  loyalty_points INTEGER DEFAULT 0,
  stripe_customer_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### 4. Cart Table
```sql
CREATE TABLE cart_items (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, product_id)
);
```

#### 5. Orders Table
```sql
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  status VARCHAR(50) DEFAULT 'pending', -- pending, processing, shipped, delivered, cancelled
  total_amount DECIMAL(10,2) NOT NULL,
  shipping_address JSONB,
  stripe_payment_intent_id VARCHAR(255),
  stripe_session_id VARCHAR(255),
  tracking_number VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### 6. Order Items Table
```sql
CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL,
  unit_price DECIMAL(10,2) NOT NULL,
  total_price DECIMAL(10,2) NOT NULL
);
```

#### 7. Reviews Table
```sql
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  product_id INTEGER REFERENCES products(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  title VARCHAR(255),
  comment TEXT,
  is_verified_purchase BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, product_id)
);
```

#### 8. Wishlist Table
```sql
CREATE TABLE wishlist_items (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  product_id INTEGER REFERENCES products(id),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, product_id)
);
```

#### 9. Addresses Table
```sql
CREATE TABLE user_addresses (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  name VARCHAR(255) NOT NULL,
  street VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  zip_code VARCHAR(20) NOT NULL,
  country VARCHAR(100) NOT NULL,
  is_default BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### 10. Coupons Table
```sql
CREATE TABLE coupons (
  id SERIAL PRIMARY KEY,
  code VARCHAR(50) UNIQUE NOT NULL,
  discount_type VARCHAR(20), -- percentage, fixed_amount
  discount_value DECIMAL(10,2),
  minimum_order_amount DECIMAL(10,2),
  usage_limit INTEGER,
  used_count INTEGER DEFAULT 0,
  expires_at TIMESTAMP,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Environment Variables

Create a `.env` file with the following variables:

```env
# Supabase
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Stripe
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret

# App Configuration
EXPO_PUBLIC_APP_URL=your_app_url
```

### Integration Steps

#### 1. Set Up Supabase
1. Create a new Supabase project
2. Run the SQL schema creation scripts above
3. Set up Row Level Security (RLS) policies
4. Configure authentication providers

#### 2. Set Up Stripe
1. Create Stripe account and get API keys
2. Create products and prices in Stripe Dashboard
3. Set up webhooks for payment events
4. Store Stripe product/price IDs in your products table

#### 3. Replace Mock Data

Create a `lib/supabase.ts` file:
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;
