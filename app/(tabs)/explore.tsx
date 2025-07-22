import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Search, Filter, Star, ShoppingCart, Heart } from 'lucide-react-native';

export default function ExploreScreen() {
  const categories = [
    { id: 1, name: 'All', active: true },
    { id: 2, name: 'Electronics', active: false },
    { id: 3, name: 'Accessories', active: false },
    { id: 4, name: 'Audio', active: false },
    { id: 5, name: 'Wearables', active: false },
  ];

  const products = [
    {
      id: 1,
      name: 'Wireless Bluetooth Earbuds',
      price: 129,
      originalPrice: 179,
      rating: 4.8,
      reviews: 324,
      image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800',
      inStock: true,
      discount: 28,
    },
    {
      id: 2,
      name: 'Smart Watch Series 8',
      price: 399,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
      inStock: true,
    },
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
      inStock: false,
    },
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
      rating: 4.8,
      reviews: 445,
      image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800',
      inStock: true,
    },
  ];

  const handleProductPress = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Explore Products</Text>
          <Text style={styles.subtitle}>Find your perfect tech companion</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchSection}>
          <View style={styles.searchContainer}>
            <Search color="#8E8E93" size={20} strokeWidth={2} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search products..."
              placeholderTextColor="#8E8E93"
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Filter color="#007AFF" size={20} strokeWidth={2} />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[styles.categoryChip, category.active && styles.activeCategoryChip]}
              >
                <Text style={[styles.categoryText, category.active && styles.activeCategoryText]}>
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Products Grid */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>All Products</Text>
          <Text style={styles.resultCount}>{products.length} items</Text>
          
          <View style={styles.productsGrid}>
            {products.map((product) => (
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
  searchSection: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 24,
    alignItems: 'center',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#1C1C1E',
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
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 16,
    paddingHorizontal: 24,
  },
  resultCount: {
    fontSize: 16,
    color: '#8E8E93',
    fontWeight: '500',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  categoriesScroll: {
    paddingHorizontal: 24,
  },
  categoryChip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  activeCategoryChip: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  categoryText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#8E8E93',
  },
  activeCategoryText: {
    color: 'white',
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