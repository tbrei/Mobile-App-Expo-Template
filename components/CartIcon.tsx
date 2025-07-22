import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ShoppingCart } from 'lucide-react-native';

interface CartIconProps {
  itemCount?: number;
  onPress?: () => void;
  color?: string;
  size?: number;
}

export default function CartIcon({ itemCount = 0, onPress, color = '#1C1C1E', size = 24 }: CartIconProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ShoppingCart color={color} size={size} strokeWidth={2} />
      {itemCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{itemCount > 99 ? '99+' : itemCount}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: 8,
  },
  badge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
});