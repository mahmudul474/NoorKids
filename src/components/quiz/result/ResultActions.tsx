import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

type ResultActionsProps = {
  onRetry?: () => void;
  onLearn?: () => void;
};

export default function ResultActions({
  onRetry,
  onLearn,
}: ResultActionsProps) {
  return (
    <View style={styles.container}>
      {/* =====================================
          RETRY
      ====================================== */}

      <Pressable
        onPress={onRetry}
        accessibilityRole="button"
        accessibilityLabel="কুইজ আবার চেষ্টা করুন"
        style={({ pressed }) => [
          styles.primaryButton,
          pressed && styles.pressed,
        ]}
      >
        <Ionicons
          name="refresh"
          size={19}
          color="#FFFFFF"
        />

        <Text style={styles.primaryText}>
          আবার চেষ্টা করুন
        </Text>
      </Pressable>

      {/* =====================================
          LEARN
      ====================================== */}

      <Pressable
        onPress={onLearn}
        accessibilityRole="button"
        accessibilityLabel="শেখায় ফিরে যান"
        style={({ pressed }) => [
          styles.secondaryButton,
          pressed && styles.pressed,
        ]}
      >
        <Text style={styles.secondaryText}>
          শেখায় ফিরে যান
        </Text>

        <Ionicons
          name="arrow-forward"
          size={18}
          color={colors.primary[500]}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',

    marginTop: spacing.lg,

    paddingBottom: spacing.xl,

    gap: 10,
  },

  /* ==========================================
     PRIMARY
  ========================================== */

  primaryButton: {
    width: '100%',

    minHeight: 54,

    borderRadius: 27,

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor:
      colors.primary[500],

    shadowColor:
      colors.primary[500],

    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.18,

    shadowRadius: 9,

    elevation: 4,
  },

  primaryText: {
    marginLeft: 8,

    color: '#FFFFFF',

    fontSize: 14,

    fontWeight: '800',
  },

  /* ==========================================
     SECONDARY
  ========================================== */

  secondaryButton: {
    width: '100%',

    minHeight: 52,

    borderRadius: 26,

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#FFFFFF',

    borderWidth: 1,

    borderColor:
      colors.primary[100],
  },

  secondaryText: {
    marginRight: 7,

    color: colors.primary[500],

    fontSize: 13,

    fontWeight: '800',
  },

  /* ==========================================
     PRESS
  ========================================== */

  pressed: {
    opacity: 0.8,

    transform: [
      {
        scale: 0.985,
      },
    ],
  },
});