import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import { ArrowLeft, Star, ShoppingCart, Heart, Filter } from 'lucide-react-native';
import ProductCard from '@/components/ProductCard';
import CheckoutFooter from '@/components/CheckoutFooter';

export default function CategoryScreen() {
  const { category } = useLocalSearchParams();
  
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
    accessories: {
      name: 'Accessories',
      products: [
        {
          id: 7,
          name: 'Wireless Charging Pad',
          price: 49,
          originalPrice: 69,
          image: 'https://images.pexels.com/photos/4526414/pexels-photo-4526414.jpeg?auto=compress&cs=tinysrgb&w=300',
          rating: 4.6,
          reviews: 203,
          inStock: true,
          category: 'accessories'
        },
        {
          id: 8,
          name: 'USB-C to Lightning Cable',
          price: 29,
          originalPrice: 39,
          image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=300',
          rating: 4.5,
          reviews: 167,
          inStock: true,
          category: 'accessories'
        },
        {
          id: 9,
          name: 'Adjustable Phone Stand',
          price: 24,
          image: 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=300',
          rating: 4.7,
          reviews: 89,
          inStock: true,
          category: 'accessories'
        },
        {
          id: 10,
          name: 'Car Phone Mount',
          price: 19,
          originalPrice: 29,
          image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=300',
          rating: 4.4,
          reviews: 134,
          inStock: false,
          category: 'accessories'
        },
        {
          id: 11,
          name: 'Laptop Sleeve Case',
          price: 39,
          image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300',
          rating: 4.8,
          reviews: 245,
          inStock: true,
          category: 'accessories'
        },
        {
          id: 12,
          name: 'Portable Power Bank',
          price: 59,
          originalPrice: 79,
          image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=300',
          rating: 4.6,
          reviews: 178,
          inStock: true,
          category: 'accessories'
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


  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
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
            <ProductCard
              key={product.id}
              product={{
                ...product,
                discount: product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : undefined
              }}
              onPress={() => handleProductPress(product.id)}
            />
          ))}
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
    backgroundColor: '#F8F9FA',
  },
  safeArea: {
    flex: 1,
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
});