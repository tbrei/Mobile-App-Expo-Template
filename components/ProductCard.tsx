import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Star, ShoppingCart, Heart, Plus, Minus } from 'lucide-react-native';
import { useCart } from '@/contexts/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  inStock: boolean;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
  onPress: (productId: number) => void;
  onToggleFavorite?: (productId: number) => void;
  isFavorite?: boolean;
  containerStyle?: object;
}

export default function ProductCard({ 
  product, 
  onPress, 
  onToggleFavorite, 
  isFavorite = false,
  containerStyle
}: ProductCardProps) {
  const { state, addItem, removeItem, updateQuantity } = useCart();
  
  // Find if this product is in the cart and get its quantity
  const cartItem = state.items.find(item => item.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  const handleIncreaseQuantity = () => {
    if (cartItem) {
      updateQuantity(product.id, cartItem.quantity + 1);
    } else {
      handleAddToCart();
    }
  };

  const handleDecreaseQuantity = () => {
    if (cartItem) {
      if (cartItem.quantity === 1) {
        removeItem(product.id);
      } else {
        updateQuantity(product.id, cartItem.quantity - 1);
      }
    }
  };

  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={() => onPress(product.id)}>
      {product.discount && (
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>-{product.discount}%</Text>
        </View>
      )}
      
      <TouchableOpacity 
        style={styles.favoriteButton}
        onPress={() => onToggleFavorite?.(product.id)}
      >
        <Heart 
          color={isFavorite ? "#FF3B30" : "#8E8E93"} 
          size={18} 
          strokeWidth={2}
          fill={isFavorite ? "#FF3B30" : "none"}
        />
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
        
        {!product.inStock ? (
          <TouchableOpacity style={styles.disabledButton} disabled>
            <ShoppingCart color="#8E8E93" size={16} strokeWidth={2} />
            <Text style={styles.disabledButtonText}>Unavailable</Text>
          </TouchableOpacity>
        ) : quantityInCart > 0 ? (
          <View style={styles.quantityControls}>
            <TouchableOpacity style={styles.quantityButton} onPress={handleDecreaseQuantity}>
              <Minus color="#007AFF" size={16} strokeWidth={2} />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantityInCart}</Text>
            <TouchableOpacity style={styles.quantityButton} onPress={handleIncreaseQuantity}>
              <Plus color="#007AFF" size={16} strokeWidth={2} />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
            <ShoppingCart color="white" size={16} strokeWidth={2} />
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
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
  disabledButtonText: {
    color: '#8E8E93',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  quantityButton: {
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
    marginHorizontal: 16,
    minWidth: 24,
    textAlign: 'center',
  },
});