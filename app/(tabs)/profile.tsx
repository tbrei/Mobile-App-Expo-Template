import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  Settings, 
  ShoppingBag, 
  Heart, 
  CreditCard, 
  MapPin, 
  Bell, 
  CircleHelp as HelpCircle, 
  LogOut, 
  ChevronRight,
  Package,
  Star
} from 'lucide-react-native';

export default function ProfileScreen() {
  const menuItems = [
    { icon: ShoppingBag, label: 'My Orders', color: '#007AFF', count: '3 active' },
    { icon: Heart, label: 'Wishlist', color: '#FF3B30', count: '12 items' },
    { icon: CreditCard, label: 'Payment Methods', color: '#34C759' },
    { icon: MapPin, label: 'Shipping Address', color: '#FF9500' },
    { icon: Bell, label: 'Notifications', color: '#8E8E93' },
    { icon: Settings, label: 'Account Settings', color: '#8E8E93' },
    { icon: HelpCircle, label: 'Help & Support', color: '#8E8E93' },
    { icon: LogOut, label: 'Sign Out', color: '#FF3B30' },
  ];

  const recentOrders = [
    {
      id: 'ORD-001',
      product: 'Wireless Headphones',
      status: 'Delivered',
      date: 'Dec 15, 2024',
      amount: 299,
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 'ORD-002',
      product: 'Smart Watch',
      status: 'Shipped',
      date: 'Dec 18, 2024',
      amount: 399,
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>My Account</Text>
        </View>

        {/* Profile Info */}
        <View style={styles.profileSection}>
          <View style={styles.profileCard}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400' }}
              style={styles.avatar}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.name}>Alex Johnson</Text>
              <Text style={styles.email}>alex.johnson@example.com</Text>
              <View style={styles.membershipBadge}>
                <Star color="#FF9500" size={14} strokeWidth={2} fill="#FF9500" />
                <Text style={styles.membershipText}>Premium Member</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Quick Stats */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, {marginBottom: 16}]}>Shopping Summary</Text>
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Package color="#007AFF" size={24} strokeWidth={2} />
              <Text style={styles.statNumber}>24</Text>
              <Text style={styles.statLabel}>Orders</Text>
            </View>
            <View style={styles.statBox}>
              <Heart color="#FF3B30" size={24} strokeWidth={2} />
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Wishlist</Text>
            </View>
            <View style={styles.statBox}>
              <Star color="#FF9500" size={24} strokeWidth={2} />
              <Text style={styles.statNumber}>4.9</Text>
              <Text style={styles.statLabel}>Reviews</Text>
            </View>
          </View>
        </View>

        {/* Recent Orders */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Orders</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ordersContainer}>
            {recentOrders.map((order) => (
              <TouchableOpacity key={order.id} style={styles.orderCard}>
                <Image source={{ uri: order.image }} style={styles.orderImage} />
                <View style={styles.orderInfo}>
                  <Text style={styles.orderProduct}>{order.product}</Text>
                  <Text style={styles.orderId}>Order #{order.id}</Text>
                  <Text style={styles.orderDate}>{order.date}</Text>
                  <View style={styles.orderFooter}>
                    <Text style={styles.orderAmount}>${order.amount}</Text>
                    <View style={[styles.statusBadge, order.status === 'Delivered' ? styles.deliveredBadge : styles.shippedBadge]}>
                      <Text style={[styles.statusText, order.status === 'Delivered' ? styles.deliveredText : styles.shippedText]}>
                        {order.status}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <View style={styles.menuContainer}>
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <TouchableOpacity key={index} style={styles.menuItem}>
                  <View style={styles.menuItemLeft}>
                    <View style={[styles.menuIconContainer, { backgroundColor: `${item.color}15` }]}>
                      <IconComponent color={item.color} size={20} strokeWidth={2} />
                    </View>
                    <View style={styles.menuItemContent}>
                      <Text style={styles.menuItemText}>{item.label}</Text>
                      {item.count && (
                        <Text style={styles.menuItemCount}>{item.count}</Text>
                      )}
                    </View>
                  </View>
                  <ChevronRight color="#C6C6C8" size={20} strokeWidth={2} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Loyalty Program */}
        <View style={styles.section}>
          <View style={styles.loyaltyCard}>
            <Text style={styles.loyaltyTitle}>TechStore Rewards</Text>
            <Text style={styles.loyaltyDescription}>
              You have 2,450 points • Next reward at 3,000 points
            </Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '82%' }]} />
            </View>
            <TouchableOpacity style={styles.loyaltyButton}>
              <Text style={styles.loyaltyButtonText}>View Rewards</Text>
            </TouchableOpacity>
          </View>
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
  },
  profileSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  email: {
    fontSize: 15,
    color: '#8E8E93',
    marginBottom: 8,
  },
  membershipBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF3E0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  membershipText: {
    fontSize: 12,
    color: '#FF9500',
    fontWeight: '600',
    marginLeft: 4,
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
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 16,
    paddingHorizontal: 24,
  },
  seeAllText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statBox: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1C1C1E',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 13,
    color: '#8E8E93',
    fontWeight: '500',
  },
  ordersContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  orderCard: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E5EA',
  },
  orderImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  orderInfo: {
    flex: 1,
  },
  orderProduct: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  orderId: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 2,
  },
  orderDate: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 8,
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderAmount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#007AFF',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  deliveredBadge: {
    backgroundColor: '#E8F5E8',
  },
  shippedBadge: {
    backgroundColor: '#E3F2FD',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  deliveredText: {
    color: '#34C759',
  },
  shippedText: {
    color: '#007AFF',
  },
  menuContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E5EA',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuItemContent: {
    flex: 1,
  },
  menuItemText: {
    fontSize: 16,
    color: '#1C1C1E',
    fontWeight: '400',
  },
  menuItemCount: {
    fontSize: 13,
    color: '#8E8E93',
    marginTop: 2,
  },
  loyaltyCard: {
    backgroundColor: '#007AFF',
    borderRadius: 16,
    padding: 24,
  },
  loyaltyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    marginBottom: 8,
  },
  loyaltyDescription: {
    fontSize: 15,
    color: 'white',
    opacity: 0.9,
    marginBottom: 16,
  },
  progressBar: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 3,
    marginBottom: 16,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 3,
  },
  loyaltyButton: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  loyaltyButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
  },
});