@@ .. @@
 import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
 import { SafeAreaView } from 'react-native-safe-area-context';
 import { useLocalSearchParams, router } from 'expo-router';
 import { ArrowLeft, Star, ShoppingCart, Heart, Filter } from 'lucide-react-native';
+import { useCart } from '@/contexts/CartContext';
 
 export default function CategoryScreen() {
   const { category } = useLocalSearchParams();
+  const { addItem } = useCart();
   
   // Mock data - replace with API calls
@@ .. @@
   const handleProductPress = (productId: number) => {
     router.push(`/product/${productId}`);
   };
+
+  const handleAddToCart = (product: any) => {
+    addItem({
+      id: product.id,
+      name: product.name,
+      price: product.price,
+      image: product.image,
+    });
+  };
 
   return (
@@ .. @@
                 <TouchableOpacity 
                   style={[styles.addToCartButton, !product.inStock && styles.disabledButton]}
                   disabled={!product.inStock}
+                  onPress={() => handleAddToCart(product)}
                 >
                   <ShoppingCart color={product.inStock ? 'white' : '#8E8E93'} size={16} strokeWidth={2} />