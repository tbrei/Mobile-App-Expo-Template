import { Product, Category } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 324,
    description: 'Experience premium sound quality with these wireless headphones featuring active noise cancellation, 30-hour battery life, and premium comfort design.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium comfort design',
      'High-resolution audio',
      'Quick charge technology',
      'Multi-device connectivity'
    ],
    specifications: {
      'Driver Size': '40mm',
      'Frequency Response': '20Hz - 20kHz',
      'Battery Life': '30 hours',
      'Charging Time': '2 hours',
      'Weight': '250g',
      'Connectivity': 'Bluetooth 5.0'
    },
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    inStock: true,
    discount: 25,
    category: 'Electronics',
    brand: 'TechBrand',
    sku: 'TB-WH-001'
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    price: 199,
    rating: 4.9,
    reviews: 156,
    description: 'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS, and 7-day battery life.',
    features: [
      'Heart rate monitoring',
      'Built-in GPS',
      '7-day battery life',
      'Water resistant',
      'Sleep tracking',
      'Multiple sport modes'
    ],
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery Life': '7 days',
      'Water Resistance': '5ATM',
      'Connectivity': 'Bluetooth 5.0, WiFi',
      'Sensors': 'Heart rate, GPS, Accelerometer',
      'Compatibility': 'iOS & Android'
    },
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    inStock: true,
    category: 'Electronics',
    brand: 'FitTech',
    sku: 'FT-SW-002'
  }
];

export const mockCategories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Latest tech gadgets and devices',
    productCount: 3
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Essential tech accessories and add-ons',
    productCount: 6
  }
];

export const getProductById = (id: number): Product | undefined => {
  return mockProducts.find(product => product.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return mockProducts.filter(product => 
    product.category.toLowerCase() === categoryId.toLowerCase()
  );
};