import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { ShoppingBag, Star, TrendingUp, Package } from 'lucide-react-native';

export default function HomeScreen() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 199,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'New'
    }
  ];

  const categories = [
    { icon: ShoppingBag, label: 'Electronics', color: '#007AFF', count: 24, route: 'electronics' },
    { icon: Package, label: 'Accessories', color: '#34C759', count: 18, route: 'accessories' },
    { icon: TrendingUp, label: 'Trending', color: '#FF9500', count: 12, route: 'featured' },
    { icon: Star, label: 'Featured', color: '#FF3B30', count: 8, route: 'featured' },
  ];

  const handleCategoryPress = (route?: string) => {
    if (route) {
      if (route === 'featured') {
        router.push('/featured');
      } else {
        router.push(`/categories/${route}`);
      }
    }
  };

  const handleProductPress = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Welcome to</Text>
          <Text style={styles.storeName}>TechStore</Text>
          <Text style={styles.subtitle}>Discover premium tech products</Text>
        </View>

        {/* Categories */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shop by Category</Text>
          <View style={styles.categoriesGrid}>
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <TouchableOpacity 
                  key={index} 
                  style={styles.categoryCard}
                  onPress={() => handleCategoryPress(category.route)}
                >
                  <View style={[styles.iconContainer, { backgroundColor: category.color }]}>
                    <IconComponent color="white" size={24} strokeWidth={2} />
                  </View>
                  <Text style={styles.categoryLabel}>{category.label}</Text>
                  <Text style={styles.categoryCount}>{category.count} items</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Featured Products */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Products</Text>
            <TouchableOpacity onPress={() => router.push('/featured')}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            style={styles.productsScroll}
            contentContainerStyle={styles.productsScrollContent}
          >
            {featuredProducts.map((product) => (
              <TouchableOpacity 
                key={product.id} 
                style={styles.productCard}
                onPress={() => handleProductPress(product.id)}
              >
                {product.badge && (
                  <View style={[styles.badge, product.badge === 'New' ? styles.newBadge : styles.bestSellerBadge]}>
                    <Text style={styles.badgeText}>{product.badge}</Text>
                  </View>
                )}
                <Image source={{ uri: product.image }} style={styles.productImage} />
                <View style={styles.productInfo}>
                  <Text style={styles.productName} numberOfLines={2}>{product.name}</Text>
                  <View style={styles.ratingContainer}>
                    <Star color="#FF9500" size={14} strokeWidth={2} fill="#FF9500" />
                    <Text style={styles.ratingText}>{product.rating}</Text>
                  </View>
                  <View style={styles.priceContainer}>
                    <Text style={styles.price}>${product.price}</Text>
                    {product.originalPrice && (
                      <Text style={styles.originalPrice}>${product.originalPrice}</Text>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Stats */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why Choose Us</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>10k+</Text>
              <Text style={styles.statLabel}>Happy Customers</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>500+</Text>
              <Text style={styles.statLabel}>Products</Text>
            </View>
          </View>
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>4.9★</Text>
              <Text style={styles.statLabel}>Average Rating</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>24/7</Text>
              <Text style={styles.statLabel}>Support</Text>
            </View>
          </View>
        </View>

        {/* Call to Action */}
        <View style={styles.section}>
          <View style={styles.ctaCard}>
            <Text style={styles.ctaTitle}>New Customer?</Text>
            <Text style={styles.ctaDescription}>
              Get 20% off your first order with code WELCOME20
            </Text>
            <TouchableOpacity style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Shop Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    padding: 24,
    paddingBottom: 16,
  },
  greeting: {
    fontSize: 17,
    color: '#8E8E93',
    fontWeight: '400',
  },
  storeName: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 17,
    color: '#8E8E93',
    fontWeight: '400',
  },
  section: {
    marginBottom: 32,
    paddingHorizontal: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 16,
    paddingHorizontal: 24,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1C1C1E',
    textAlign: 'center',
    marginBottom: 4,
  },
  categoryCount: {
    fontSize: 13,
    color: '#8E8E93',
    fontWeight: '400',
  },
  productsScroll: {
    marginHorizontal: -24,
    paddingHorizontal: 24,
    paddingBottom: 10,
  },
  productsScrollContent: {
    paddingRight: 24,
  },
  productCard: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 16,
    marginRight: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 8,
  },
  badge: {
    position: 'absolute',
    top: 12,
    left: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    zIndex: 1,
  },
  newBadge: {
    backgroundColor: '#34C759',
  },
  bestSellerBadge: {
    backgroundColor: '#FF9500',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  productImage: {
    width: '100%',
    height: 150,
  },
  productInfo: {
    padding: 16,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 8,
    lineHeight: 22,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 14,
    color: '#8E8E93',
    marginLeft: 4,
    fontWeight: '500',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#007AFF',
  },
  originalPrice: {
    fontSize: 14,
    color: '#8E8E93',
    textDecorationLine: 'line-through',
    marginLeft: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#007AFF',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#8E8E93',
    fontWeight: '500',
    textAlign: 'center',
  },
  ctaCard: {
    backgroundColor: '#007AFF',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    marginBottom: 8,
  },
  ctaDescription: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    opacity: 0.9,
    lineHeight: 22,
  },
  ctaButton: {
    backgroundColor: 'white',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
  },
});