import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';
import { spacing } from '@/theme/spacing';

type AchievementSummaryProps = {
  stars?: number;
  streak?: number;
  achievements?: number;
  lessonsCompleted?: number;
};

export default function AchievementSummary({
  stars = 125,
  streak = 3,
  achievements = 8,
  lessonsCompleted = 12,
}: AchievementSummaryProps) {
  const stats = [
    {
      id: 'stars',
      value: stars,
      label: 'Stars',
      icon: 'star',
      iconColor: '#F2A300',
      backgroundColor: '#FFF4D9',
    },
    {
      id: 'streak',
      value: streak,
      label: 'Day Streak',
      icon: 'flame',
      iconColor: '#F06A3A',
      backgroundColor: '#FFF0EA',
    },
    {
      id: 'achievements',
      value: achievements,
      label: 'Achievements',
      icon: 'trophy',
      iconColor: '#7049E8',
      backgroundColor: '#F0EAFF',
    },
    {
      id: 'lessons',
      value: lessonsCompleted,
      label: 'Lessons',
      icon: 'book',
      iconColor: '#3C9A55',
      backgroundColor: '#EAF7ED',
    },
  ] as const;

  return (
    <View style={styles.container}>

      {/* =====================================
          HEADER
      ====================================== */}

      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>
            তোমার অগ্রগতি
          </Text>

          <Text style={styles.title}>
            দারুণ এগিয়ে যাচ্ছো! 🎉
          </Text>
        </View>

        <View style={styles.sparkle}>
          <Text style={styles.sparkleText}>
            ✨
          </Text>
        </View>
      </View>

      {/* =====================================
          STATS CARD
      ====================================== */}

      <View style={styles.card}>
        {stats.map((stat, index) => (
          <View
            key={stat.id}
            style={[
              styles.stat,
              index !== stats.length - 1 &&
                styles.statBorder,
            ]}
          >
            <View
              style={[
                styles.iconWrapper,
                {
                  backgroundColor:
                    stat.backgroundColor,
                },
              ]}
            >
              <Ionicons
                name={stat.icon}
                size={18}
                color={stat.iconColor}
              />
            </View>

            <Text style={styles.value}>
              {stat.value}
            </Text>

            <Text
              style={styles.label}
              numberOfLines={1}
            >
              {stat.label}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: spacing.lg,
  },

  /* ==========================================
     HEADER
  ========================================== */

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: spacing.sm,
  },

  eyebrow: {
    color: colors.text.secondary,

    fontSize: 12,
    fontWeight: '600',
  },

  title: {
    marginTop: 2,

    color: colors.text.primary,

    fontSize: 18,
    lineHeight: 26,

    fontWeight: '800',
  },

  sparkle: {
    width: 38,
    height: 38,

    borderRadius: 19,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: colors.primary[50],
  },

  sparkleText: {
    fontSize: 18,
  },

  /* ==========================================
     CARD
  ========================================== */

  card: {
    width: '100%',

    minHeight: 94,

    paddingVertical: spacing.sm,

    paddingHorizontal: 4,

    borderRadius: radii.lg,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,

    borderColor: colors.primary[100],

    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#21154F',

    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.055,

    shadowRadius: 10,

    elevation: 2,
  },

  /* ==========================================
     STAT
  ========================================== */

  stat: {
    flex: 1,

    minWidth: 0,

    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 4,
  },

  statBorder: {
    borderRightWidth: 1,

    borderRightColor: '#EEEAF7',
  },

  /* ==========================================
     ICON
  ========================================== */

  iconWrapper: {
    width: 34,
    height: 34,

    borderRadius: 12,

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 5,
  },

  /* ==========================================
     VALUE
  ========================================== */

  value: {
    color: colors.text.primary,

    fontSize: 16,
    lineHeight: 21,

    fontWeight: '900',
  },

  /* ==========================================
     LABEL
  ========================================== */

  label: {
    marginTop: 1,

    maxWidth: '100%',

    color: colors.text.secondary,

    fontSize: 8.5,
    lineHeight: 13,

    fontWeight: '600',

    textAlign: 'center',
  },
});