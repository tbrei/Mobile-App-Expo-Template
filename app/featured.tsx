import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { ArrowLeft, Star, ShoppingCart, Heart, TrendingUp, Award, Zap } from 'lucide-react-native';

export default function FeaturedScreen() {
  const featuredSections = [
    {
      id: 'trending',
      title: 'Trending Now',
      subtitle: 'Most popular products this week',
      icon: TrendingUp,
      color: '#FF9500',
      products: [
        {
          id: 1,
          name: 'Premium Wireless Headphones',
          price: 299,
          originalPrice: 399,
          rating: 4.8,
          reviews: 324,
          image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
          badge: 'Hot',
          trendingRank: 1,
        },
        {
          id: 2,
          name: 'Smart Fitness Watch',
          price: 199,
          rating: 4.9,
          reviews: 156,
          image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
          badge: 'New',
          trendingRank: 2,
        },
      ]
    },
    {
      id: 'editors-choice',
      title: "Editor's Choice",
      subtitle: 'Hand-picked by our experts',
      icon: Award,
      color: '#007AFF',
      products: [
        {
          id: 3,
          name: 'Portable Bluetooth Speaker',
          price: 89,
          originalPrice: 119,
          rating: 4.7,
          reviews: 89,
          image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800',
          badge: "Editor's Pick",
        },
        {
          id: 4,
          name: 'Wireless Charging Pad',
          price: 49,
          rating: 4.6,
          reviews: 203,
          image: 'https://images.pexels.com/photos/4526414/pexels-photo-4526414.jpeg?auto=compress&cs=tinysrgb&w=800',
          badge: 'Recommended',
        },
      ]
    },
    {
      id: 'flash-deals',
      title: 'Flash Deals',
      subtitle: 'Limited time offers',
      icon: Zap,
      color: '#FF3B30',
      products: [
        {
          id: 5,
          name: 'USB-C Hub Adapter',
          price: 79,
          originalPrice: 99,
          rating: 4.5,
          reviews: 67,
          image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
          badge: '20% OFF',
          timeLeft: '2h 15m',
        },
        {
          id: 6,
          name: 'Gaming Mechanical Keyboard',
          price: 159,
          originalPrice: 199,
          rating: 4.8,
          reviews: 445,
          image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800',
          badge: 'Flash Sale',
          timeLeft: '5h 42m',
        },
      ]
    }
  ];

  const handleProductPress = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  const handleSectionPress = (sectionId: string) => {
    // Navigate to a filtered explore view for the specific section
    router.push(`/(tabs)/explore?filter=${sectionId}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <ArrowLeft color="#1C1C1E" size={24} strokeWidth={2} />
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <Text style={styles.title}>Featured Products</Text>
            <Text style={styles.subtitle}>Discover our top picks and trending products</Text>
          </View>
        </View>

        {/* Featured Sections */}
        {featuredSections.map((section) => {
          const IconComponent = section.icon;
          return (
            <View key={section.id} style={styles.section}>
              <View style={styles.sectionHeader}>
                <View style={styles.sectionTitleContainer}>
                  <View style={[styles.sectionIconContainer, { backgroundColor: section.color }]}>
                    <IconComponent color="white" size={20} strokeWidth={2} />
                  </View>
                  <View>
                    <Text style={styles.sectionTitle}>{section.title}</Text>
                    <Text style={styles.sectionSubtitle}>{section.subtitle}</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={() => handleSectionPress(section.id)}>
                  <Text style={[styles.seeAllText, { color: section.color }]}>View All</Text>
                </TouchableOpacity>
              </View>

              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productsScroll}>
                {section.products.map((product, index) => (
                  <TouchableOpacity 
                    key={product.id} 
                    style={[styles.productCard, index === 0 && styles.firstProductCard]}
                    onPress={() => handleProductPress(product.id)}
                  >
                    {/* Badge */}
                    <View style={[styles.badge, { backgroundColor: section.color }]}>
                      <Text style={styles.badgeText}>{product.badge}</Text>
                    </View>

                    {/* Trending Rank */}
                    {product.trendingRank && (
                      <View style={styles.rankBadge}>
                        <Text style={styles.rankText}>#{product.trendingRank}</Text>
                      </View>
                    )}

                    {/* Time Left for Flash Deals */}
                    {product.timeLeft && (
                      <View style={styles.timeBadge}>
                        <Text style={styles.timeText}>{product.timeLeft}</Text>
                      </View>
                    )}

                    <TouchableOpacity style={styles.favoriteButton}>
                      <Heart color="#8E8E93" size={18} strokeWidth={2} />
                    </TouchableOpacity>
                    
                    <Image source={{ uri: product.image }} style={styles.productImage} />
                    
                    <View style={styles.productInfo}>
                      <Text style={styles.productName} numberOfLines={2}>{product.name}</Text>
                      
                      <View style={styles.ratingContainer}>
                        <Star color="#FF9500" size={14} strokeWidth={2} fill="#FF9500" />
                        <Text style={styles.ratingText}>{product.rating}</Text>
                        <Text style={styles.reviewsText}>({product.reviews})</Text>
                      </View>
                      
                      <View style={styles.priceContainer}>
                        <Text style={styles.price}>${product.price}</Text>
                        {product.originalPrice && (
                          <Text style={styles.originalPrice}>${product.originalPrice}</Text>
                        )}
                      </View>
                      
                      <TouchableOpacity style={[styles.addToCartButton, { backgroundColor: section.color }]}>
                        <ShoppingCart color="white" size={16} strokeWidth={2} />
                        <Text style={styles.addToCartText}>Add to Cart</Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          );
        })}

        {/* Stats Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why Shop Featured?</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <TrendingUp color="#FF9500" size={32} strokeWidth={2} />
              <Text style={styles.statTitle}>Trending</Text>
              <Text style={styles.statDescription}>Most popular items updated daily</Text>
            </View>
            <View style={styles.statCard}>
              <Award color="#007AFF" size={32} strokeWidth={2} />
              <Text style={styles.statTitle}>Expert Picks</Text>
              <Text style={styles.statDescription}>Curated by our product experts</Text>
            </View>
          </View>
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Zap color="#FF3B30" size={32} strokeWidth={2} />
              <Text style={styles.statTitle}>Flash Deals</Text>
              <Text style={styles.statDescription}>Limited time exclusive offers</Text>
            </View>
            <View style={styles.statCard}>
              <Star color="#34C759" size={32} strokeWidth={2} />
              <Text style={styles.statTitle}>Top Rated</Text>
              <Text style={styles.statDescription}>Highest customer satisfaction</Text>
            </View>
          </View>
        </View>

        {/* Newsletter Signup */}
        <View style={styles.section}>
          <View style={styles.newsletterCard}>
            <Text style={styles.newsletterTitle}>Stay Updated</Text>
            <Text style={styles.newsletterDescription}>
              Get notified about new featured products and exclusive deals
            </Text>
            <TouchableOpacity style={styles.newsletterButton}>
              <Text style={styles.newsletterButtonText}>Subscribe to Updates</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    paddingBottom: 16,
  },
  backButton: {
    marginRight: 16,
  },
  headerContent: {
    flex: 1,
  },
  title: {
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
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 2,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#8E8E93',
    fontWeight: '400',
  },
  seeAllText: {
    fontSize: 16,
    fontWeight: '500',
  },
  productsScroll: {
    marginHorizontal: -24,
    paddingHorizontal: 24,
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
  },
  firstProductCard: {
    marginLeft: 0,
  },
  badge: {
    position: 'absolute',
    top: 12,
    left: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    zIndex: 3,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  rankBadge: {
    position: 'absolute',
    top: 12,
    right: 50,
    backgroundColor: '#1C1C1E',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    zIndex: 3,
  },
  rankText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
  },
  timeBadge: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    zIndex: 3,
  },
  timeText: {
    color: 'white',
    fontSize: 11,
    fontWeight: '600',
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
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
  reviewsText: {
    fontSize: 14,
    color: '#8E8E93',
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
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
  addToCartButton: {
    borderRadius: 8,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
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
  statTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
    marginTop: 12,
    marginBottom: 4,
  },
  statDescription: {
    fontSize: 13,
    color: '#8E8E93',
    textAlign: 'center',
    lineHeight: 18,
  },
  newsletterCard: {
    backgroundColor: '#34C759',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  newsletterTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    marginBottom: 8,
  },
  newsletterDescription: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    opacity: 0.9,
    lineHeight: 22,
  },
  newsletterButton: {
    backgroundColor: 'white',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
  },
  newsletterButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#34C759',
  },
});