import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';
import { spacing } from '@/theme/spacing';

type LessonHeaderProps = {
  current?: number;
  total?: number;
  stars?: number;
  onBackPress?: () => void;
};

export default function LessonHeader({
  current = 7,
  total = 29,
  stars = 125,
  onBackPress,
}: LessonHeaderProps) {
  const progress =
    total > 0 ? Math.min(current / total, 1) : 0;

  return (
    <View style={styles.container}>
      {/* =====================================
          TOP ROW
      ====================================== */}

      <View style={styles.topRow}>
        {/* Back */}

        <Pressable
          onPress={onBackPress}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel="পেছনে যান"
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

        {/* Center */}

        <View style={styles.center}>
          <Text style={styles.title}>
            আরবি হরফ
          </Text>

          <Text style={styles.lessonText}>
            পাঠ {current} / {total}
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

      {/* =====================================
          PROGRESS
      ====================================== */}

      <View style={styles.progressTrack}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${progress * 100}%`,
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',

    paddingHorizontal:
      spacing.base,

    paddingTop: 8,
    paddingBottom: 10,

    backgroundColor:
      colors.background,
  },

  /* ==========================================
     TOP ROW
  ========================================== */

  topRow: {
    minHeight: 48,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
     CENTER
  ========================================== */

  center: {
    flex: 1,

    alignItems: 'center',

    marginHorizontal: 10,
  },

  title: {
    color: colors.text.primary,

    fontSize: 17,
    lineHeight: 23,

    fontWeight: '900',
  },

  lessonText: {
    marginTop: 1,

    color: colors.text.secondary,

    fontSize: 9.5,
    lineHeight: 14,

    fontWeight: '600',
  },

  /* ==========================================
     STARS
  ========================================== */

  starBadge: {
    minWidth: 60,
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

    fontSize: 11.5,

    fontWeight: '800',
  },

  /* ==========================================
     PROGRESS
  ========================================== */

  progressTrack: {
    width: '100%',

    height: 6,

    marginTop: 8,

    borderRadius: 999,

    overflow: 'hidden',

    backgroundColor:
      colors.primary[100],
  },

  progressFill: {
    height: '100%',

    borderRadius: 999,

    backgroundColor:
      colors.primary[500],
  },

  /* ==========================================
     PRESS
  ========================================== */

  pressed: {
    opacity: 0.7,

    transform: [
      {
        scale: 0.96,
      },
    ],
  },
});