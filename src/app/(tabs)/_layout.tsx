import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Platform, StyleSheet } from 'react-native';

const COLORS = {
  primary: '#6D4AFF',
  inactive: '#9A94AA',
  background: '#FFFFFF',
  border: '#EEEAF7',
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        // =====================================
        // TAB COLORS
        // =====================================

        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.inactive,

        // =====================================
        // LABEL
        // =====================================

        tabBarLabelStyle: styles.label,

        // =====================================
        // ITEM
        // =====================================

        tabBarItemStyle: styles.item,

        // =====================================
        // TAB BAR
        // =====================================

        tabBarStyle: styles.tabBar,

        // Prevent tab bar from moving when keyboard opens
        tabBarHideOnKeyboard: true,

        // Android ripple
        tabBarButton: undefined,
      }}
    >
      {/* =====================================
          HOME
      ====================================== */}

      <Tabs.Screen
        name="index"
        options={{
          title: 'হোম',

          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={
                focused
                  ? 'home'
                  : 'home-outline'
              }
              size={23}
              color={color}
            />
          ),
        }}
      />

      {/* =====================================
          LEARN
      ====================================== */}

      <Tabs.Screen
        name="learn"
        options={{
          title: 'শেখা',

          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={
                focused
                  ? 'book'
                  : 'book-outline'
              }
              size={23}
              color={color}
            />
          ),
        }}
      />

      {/* =====================================
          QUIZ
      ====================================== */}

      <Tabs.Screen
        name="quiz"
        options={{
          title: 'কুইজ',

          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={
                focused
                  ? 'trophy'
                  : 'trophy-outline'
              }
              size={23}
              color={color}
            />
          ),
        }}
      />

      {/* =====================================
          REWARDS
      ====================================== */}

      <Tabs.Screen
        name="rewards"
        options={{
          title: 'পুরস্কার',

          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={
                focused
                  ? 'star'
                  : 'star-outline'
              }
              size={23}
              color={color}
            />
          ),
        }}
      />

      {/* =====================================
          PROFILE
      ====================================== */}

      <Tabs.Screen
        name="profile"
        options={{
          title: 'প্রোফাইল',

          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={
                focused
                  ? 'person'
                  : 'person-outline'
              }
              size={23}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  // ==========================================
  // TAB BAR
  // ==========================================

  tabBar: {
    backgroundColor: COLORS.background,

    borderTopWidth: 1,
    borderTopColor: COLORS.border,

    elevation: 10,

    shadowColor: '#21154F',

    shadowOffset: {
      width: 0,
      height: -3,
    },

    shadowOpacity: 0.06,

    shadowRadius: 12,

    /*
     * iOS and Android friendly height.
     *
     * React Navigation automatically handles
     * the bottom safe-area inset.
     */
    height: Platform.select({
      ios: 78,
      android: 68,
      default: 72,
    }),

    paddingTop: 7,

    paddingBottom: Platform.select({
      ios: 8,
      android: 7,
      default: 8,
    }),

    paddingHorizontal: 8,
  },

  // ==========================================
  // TAB ITEM
  // ==========================================

  item: {
    paddingVertical: 2,
  },

  // ==========================================
  // LABEL
  // ==========================================

  label: {
    fontSize: 10.5,

    lineHeight: 15,

    fontWeight: '700',

    marginTop: 2,
  },
});