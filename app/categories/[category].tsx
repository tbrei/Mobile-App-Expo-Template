import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import { ArrowLeft, Star, ShoppingCart, Heart, Filter } from 'lucide-react-native';
import { useCart } from '@/contexts/CartContext';

export default function CategoryScreen() {
  const { category } = useLocalSearchParams();
  const { addItem } = useCart();
  
  // Mock data - replace with API calls
  const categoryData = {
    electronics: {
      name: 'Electronics',
      products: [
        {
          id: 1,
          name: 'iPhone 15 Pro',
          price: 999,
          originalPrice: 1099,
          image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=300',
          rating: 4.8,
          reviews: 234,
          inStock: true,
          category: 'electronics'
        },
        {
          id: 2,
          name: 'MacBook Air M2',
          price: 1199,
          image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=300',
          rating: 4.9,
          reviews: 567,
          inStock: true,
          category: 'electronics'
        },
        {
          id: 3,
          name: 'AirPods Pro',
          price: 249,
          image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=300',
          rating: 4.7,
          reviews: 189,
          inStock: false,
          category: 'electronics'
        }
      ]
    },
    clothing: {
      name: 'Fashion',
      products: [
        {
          id: 4,
          name: 'Designer Jacket',
          price: 159,
          originalPrice: 199,
          image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=300',
          rating: 4.6,
          reviews: 87,
          inStock: true,
          category: 'clothing'
        },
        {
          id: 5,
          name: 'Premium Sneakers',
          price: 129,
          image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=300',
          rating: 4.8,
          reviews: 156,
          inStock: true,
          category: 'clothing'
        }
      ]
    },
    home: {
      name: 'Home & Garden',
      products: [
        {
          id: 6,
          name: 'Smart Plant Pot',
          price: 79,
          image: 'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=300',
          rating: 4.4,
          reviews: 92,
          inStock: true,
          category: 'home'
        }
      ]
    }
  };

  const currentCategory = categoryData[category as keyof typeof categoryData];

  const handleProductPress = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft color="#007AFF" size={24} strokeWidth={2} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{currentCategory?.name || 'Category'}</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Filter color="#007AFF" size={24} strokeWidth={2} />
        </TouchableOpacity>
      </View>

      {/* Results Count */}
      <View style={styles.resultsHeader}>
        <Text style={styles.resultsCount}>
          {currentCategory?.products.length || 0} products found
        </Text>
      </View>

      {/* Products Grid */}
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.productsGrid}>
          {currentCategory?.products.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={styles.productCard}
              onPress={() => handleProductPress(product.id)}
            >
              <View style={styles.imageContainer}>
                <Image source={{ uri: product.image }} style={styles.productImage} />
                {product.originalPrice && (
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </Text>
                  </View>
                )}
                <TouchableOpacity style={styles.favoriteButton}>
                  <Heart color="#FF3B30" size={16} strokeWidth={2} />
                </TouchableOpacity>
              </View>
              
              <View style={styles.productInfo}>
                <Text style={styles.productName} numberOfLines={2}>
                  {product.name}
                </Text>
                
                <View style={styles.ratingContainer}>
                  <Star color="#FFD700" size={12} strokeWidth={2} fill="#FFD700" />
                  <Text style={styles.rating}>{product.rating}</Text>
                  <Text style={styles.reviews}>({product.reviews})</Text>
                </View>
                
                <View style={styles.priceContainer}>
                  <Text style={styles.price}>${product.price}</Text>
                  {product.originalPrice && (
                    <Text style={styles.originalPrice}>${product.originalPrice}</Text>
                  )}
                </View>
                
                <TouchableOpacity 
                  style={[styles.addToCartButton, !product.inStock && styles.disabledButton]}
                  disabled={!product.inStock}
                  onPress={() => handleAddToCart(product)}
                >
                  <ShoppingCart color={product.inStock ? 'white' : '#8E8E93'} size={16} strokeWidth={2} />
                  <Text style={[styles.addToCartText, !product.inStock && styles.disabledText]}>
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
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
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1D1D1F',
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 16,
  },
  filterButton: {
    padding: 8,
  },
  resultsHeader: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: 'white',
  },
  resultsCount: {
    fontSize: 14,
    color: '#8E8E93',
  },
  content: {
    flex: 1,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    paddingTop: 16,
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    position: 'relative',
    height: 160,
  },
  productImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#FF3B30',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
  },
  discountText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'white',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1D1D1F',
    marginBottom: 8,
    lineHeight: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    fontSize: 12,
    color: '#1D1D1F',
    marginLeft: 4,
    fontWeight: '500',
  },
  reviews: {
    fontSize: 12,
    color: '#8E8E93',
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1D1D1F',
  },
  originalPrice: {
    fontSize: 14,
    color: '#8E8E93',
    textDecorationLine: 'line-through',
    marginLeft: 8,
  },
  addToCartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  disabledButton: {
    backgroundColor: '#F2F2F7',
  },
  addToCartText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 6,
  },
  disabledText: {
    color: '#8E8E93',
  },
});