
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';
import { spacing } from '@/theme/spacing';

type LearnHeaderProps = {
  stars?: number;
  onBackPress?: () => void;
};

export default function LearnHeader({
  stars = 125,
  onBackPress,
}: LearnHeaderProps) {
  return (
    <View style={styles.container}>
      {/* Back Button */}

      <Pressable
        onPress={onBackPress}
        accessibilityRole="button"
        accessibilityLabel="পেছনে যান"
        hitSlop={8}
        style={({ pressed }) => [
          styles.backButton,
          pressed && styles.pressed,
        ]}
      >
        <Ionicons
          name="chevron-back"
          size={22}
          color={colors.text.primary}
        />
      </Pressable>

      {/* Title */}

      <View style={styles.titleArea}>
        <Text style={styles.title}>
          শেখা
        </Text>

        <Text style={styles.subtitle}>
          প্রতিদিন একটু একটু করে শিখি 🌟
        </Text>
      </View>

      {/* Stars */}

      <View style={styles.starBadge}>
        <Text style={styles.star}>
          ⭐
        </Text>

        <Text style={styles.starText}>
          {stars}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',

    minHeight: 64,

    paddingHorizontal:
      spacing.base,

    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor:
      colors.background,
  },

  /* ==========================================
     BACK
  ========================================== */

  backButton: {
    width: 42,
    height: 42,

    borderRadius: radii.round,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor:
      colors.primary[100],
  },

  /* ==========================================
     TITLE
  ========================================== */

  titleArea: {
    flex: 1,

    marginLeft: 12,
    marginRight: 8,
  },

  title: {
    color: colors.text.primary,

    fontSize: 21,
    lineHeight: 28,

    fontWeight: '900',
  },

  subtitle: {
    marginTop: 1,

    color: colors.text.secondary,

    fontSize: 10.5,
    lineHeight: 16,

    fontWeight: '500',
  },

  /* ==========================================
     STARS
  ========================================== */

  starBadge: {
    minWidth: 58,
    height: 38,

    paddingHorizontal: 9,

    borderRadius: radii.round,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor:
      colors.primary[50],

    borderWidth: 1,
    borderColor:
      colors.primary[100],
  },

  star: {
    fontSize: 14,
  },

  starText: {
    marginLeft: 4,

    color: colors.text.primary,

    fontSize: 12,
    fontWeight: '800',
  },

  pressed: {
    opacity: 0.7,

    transform: [
      {
        scale: 0.96,
      },
    ],
  },
});