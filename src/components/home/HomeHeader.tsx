import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';
import { spacing } from '@/theme/spacing';

type HomeHeaderProps = {
  childName?: string;
  stars?: number;
  onProfilePress?: () => void;
  onNotificationPress?: () => void;
};

export default function HomeHeader({
  childName = 'আরমান',
  stars = 125,
  onProfilePress,
  onNotificationPress,
}: HomeHeaderProps) {
  return (
    <View style={styles.container}>
      {/* =====================================
          GREETING
      ====================================== */}

      <View style={styles.greetingArea}>
        <Text style={styles.greeting}>
          আসসালামু আলাইকুম! 👋
        </Text>

        <Text style={styles.name}>
          {childName}, আজ কী শিখবে?
        </Text>
      </View>

      {/* =====================================
          RIGHT ACTIONS
      ====================================== */}

      <View style={styles.actions}>
        {/* Stars */}

        <View style={styles.starBadge}>
          <Text style={styles.starIcon}>⭐</Text>

          <Text style={styles.starText}>
            {stars}
          </Text>
        </View>

        {/* Notification */}

        <Pressable
          onPress={onNotificationPress}
          accessibilityRole="button"
          accessibilityLabel="নোটিফিকেশন"
          hitSlop={8}
          style={({ pressed }) => [
            styles.iconButton,
            pressed && styles.pressed,
          ]}
        >
          <Ionicons
            name="notifications-outline"
            size={21}
            color={colors.text.primary}
          />

          {/* Notification dot */}

          <View style={styles.notificationDot} />
        </Pressable>

        {/* Profile */}

        <Pressable
          onPress={onProfilePress}
          accessibilityRole="button"
          accessibilityLabel="প্রোফাইল"
          hitSlop={8}
          style={({ pressed }) => [
            styles.avatarButton,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.avatar}>
            👦
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: spacing.base,
    paddingTop: spacing.sm,
    paddingBottom: spacing.md,

    backgroundColor: colors.background,
  },

  /* ==========================================
     GREETING
  ========================================== */

  greetingArea: {
    flex: 1,

    paddingRight: spacing.sm,
  },

  greeting: {
    color: colors.text.secondary,

    fontSize: 13,
    lineHeight: 20,

    fontWeight: '600',
  },

  name: {
    marginTop: 3,

    color: colors.text.primary,

    fontSize: 20,
    lineHeight: 28,

    fontWeight: '800',
  },

  /* ==========================================
     ACTIONS
  ========================================== */

  actions: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 8,
  },

  /* ==========================================
     STAR BADGE
  ========================================== */

  starBadge: {
    minHeight: 38,

    paddingHorizontal: 10,

    borderRadius: radii.round,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: colors.primary[50],

    borderWidth: 1,
    borderColor: colors.primary[100],
  },

  starIcon: {
    fontSize: 14,
  },

  starText: {
    marginLeft: 4,

    color: colors.text.primary,

    fontSize: 13,
    fontWeight: '800',
  },

  /* ==========================================
     ICON BUTTON
  ========================================== */

  iconButton: {
    width: 40,
    height: 40,

    borderRadius: radii.round,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: colors.primary[100],

    position: 'relative',
  },

  notificationDot: {
    position: 'absolute',

    top: 8,
    right: 8,

    width: 7,
    height: 7,

    borderRadius: 4,

    backgroundColor: colors.primary[500],

    borderWidth: 1,
    borderColor: '#FFFFFF',
  },

  /* ==========================================
     AVATAR
  ========================================== */

  avatarButton: {
    width: 44,
    height: 44,

    borderRadius: 22,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: colors.primary[100],

    borderWidth: 2,
    borderColor: '#FFFFFF',

    shadowColor: '#21154F',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 7,

    elevation: 2,
  },

  avatar: {
    fontSize: 25,
  },

  pressed: {
    opacity: 0.75,
    transform: [{ scale: 0.96 }],
  },
});