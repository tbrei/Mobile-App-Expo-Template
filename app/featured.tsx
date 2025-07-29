import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { ArrowLeft, TrendingUp, Award, Zap, Star } from 'lucide-react-native';
import ProductCard from '@/components/ProductCard';
import CheckoutFooter from '@/components/CheckoutFooter';

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
          inStock: true,
          discount: 25,
        },
        {
          id: 2,
          name: 'Smart Fitness Watch',
          price: 199,
          rating: 4.9,
          reviews: 156,
          image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
          inStock: true,
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
          inStock: true,
          discount: 25,
        },
        {
          id: 4,
          name: 'Wireless Charging Pad',
          price: 49,
          rating: 4.6,
          reviews: 203,
          image: 'https://images.pexels.com/photos/4526414/pexels-photo-4526414.jpeg?auto=compress&cs=tinysrgb&w=800',
          inStock: true,
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
          inStock: true,
          discount: 20,
        },
        {
          id: 6,
          name: 'Gaming Mechanical Keyboard',
          price: 159,
          originalPrice: 199,
          rating: 4.8,
          reviews: 445,
          image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800',
          inStock: true,
          discount: 20,
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
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
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
                  <View
                    key={product.id} 
                    style={[styles.productCard, index === 0 && styles.firstProductCard]}
                  >
                    <ProductCard
                      product={product}
                      onPress={() => handleProductPress(product.id)}
                    />
                  </View>
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
      <CheckoutFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  safeArea: {
    flex: 1,
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
    marginRight: 16,
  },
  firstProductCard: {
    marginLeft: 0,
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