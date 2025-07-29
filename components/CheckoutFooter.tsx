import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart } from 'lucide-react-native';

export default function CheckoutFooter() {
  const { state } = useCart();

  // Don't render if cart is empty
  if (state.itemCount === 0) {
    return null;
  }

  const handleCheckout = () => {
    router.push('/(tabs)/cart');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.cartInfo}>
          <ShoppingCart color="white" size={20} strokeWidth={2} />
          <Text style={styles.itemCount}>
            {state.itemCount} item{state.itemCount !== 1 ? 's' : ''}
          </Text>
          <Text style={styles.total}>${state.total.toFixed(2)}</Text>
        </View>
        
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#007AFF',
    paddingBottom: 34, // Safe area padding for home indicator
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  cartInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  itemCount: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  total: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 16,
  },
  checkoutButton: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  checkoutText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
});