import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import { ArrowLeft, Star, ShoppingCart, Heart, Filter } from 'lucide-react-native';

export default function CategoryScreen() {
  const { category } = useLocalSearchParams();
  
  // Mock data - replace with API calls
  const categoryData = {
    electronics: {
      name: 'Electronics',
      description: 'Latest tech gadgets and devices',
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
        {
          id: 3,
          name: 'Wireless Gaming Mouse',
          price: 89,
          originalPrice: 119,
          rating: 4.7,
          reviews: 89,
          image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800',
          inStock: true,
          discount: 25,
        },
        {
          id: 4,
          name: 'USB-C Hub Adapter',
          price: 79,
          originalPrice: 99,
          rating: 4.5,
          reviews: 67,
          image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
          inStock: true,
          discount: 20,
        },
      ]
    },
    accessories: {
      name: 'Accessories',
      description: 'Essential tech accessories and add-ons',
      products: [
        {
          id: 5,
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
          id: 6,
          name: 'Wireless Charging Pad',
          price: 49,
          rating: 4.6,
          reviews: 203,
          image: 'https://images.pexels.com/photos/4526414/pexels-photo-4526414.jpeg?auto=compress&cs=tinysrgb&w=800',
          inStock: false,
        },
      ]
    }
  };

  const currentCategory = categoryData[category as keyof typeof categoryData] || categoryData.electronics;

  const handleProductPress = (productId: number) => {
    router.push(`/product/${productId}`);
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
            <Text style={styles.title}>{currentCategory.name}</Text>
            <Text style={styles.subtitle}>{currentCategory.description}</Text>
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Filter color="#007AFF" size={20} strokeWidth={2} />
          </TouchableOpacity>
        </View>

        {/* Products Count */}
        <View style={styles.countSection}>
          <Text style={styles.countText}>{currentCategory.products.length} products found</Text>
        </View>

        {/* Products Grid */}
        <View style={styles.productsGrid}>
          {currentCategory.products.map((product) => (
            <TouchableOpacity 
              key={product.id} 
              style={styles.productCard}
              onPress={() => handleProductPress(product.id)}
            >
              {product.discount && (
                <View style={styles.discountBadge}>
                  <Text style={styles.discountText}>-{product.discount}%</Text>
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
                
                <View style={styles.stockContainer}>
                  <View style={[styles.stockIndicator, { backgroundColor: product.inStock ? '#34C759' : '#FF3B30' }]} />
                  <Text style={[styles.stockText, { color: product.inStock ? '#34C759' : '#FF3B30' }]}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </Text>
                </View>
                
                <TouchableOpacity 
                  style={[styles.addToCartButton, !product.inStock && styles.disabledButton]}
                  disabled={!product.inStock}
                >
                  <ShoppingCart color={product.inStock ? 'white' : '#8E8E93'} size={16} strokeWidth={2} />
                  <Text style={[styles.addToCartText, !product.inStock && styles.disabledButtonText]}>
                    {product.inStock ? 'Add to Cart' : 'Unavailable'}
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
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
    fontSize: 28,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#8E8E93',
    fontWeight: '400',
  },
  filterButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  countSection: {
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  countText: {
    fontSize: 16,
    color: '#8E8E93',
    fontWeight: '500',
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  discountBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#FF3B30',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    zIndex: 2,
  },
  discountText: {
    color: 'white',
    fontSize: 12,
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
    height: 140,
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 8,
    lineHeight: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 13,
    color: '#1C1C1E',
    marginLeft: 4,
    fontWeight: '500',
  },
  reviewsText: {
    fontSize: 13,
    color: '#8E8E93',
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#007AFF',
  },
  originalPrice: {
    fontSize: 13,
    color: '#8E8E93',
    textDecorationLine: 'line-through',
    marginLeft: 8,
  },
  stockContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  stockIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  stockText: {
    fontSize: 12,
    fontWeight: '500',
  },
  addToCartButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: '#F2F2F7',
  },
  addToCartText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
  disabledButtonText: {
    color: '#8E8E93',
  },
});