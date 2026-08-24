import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';
import { spacing } from '@/theme/spacing';

type LearnProgressSummaryProps = {
  stars?: number;
  streak?: number;
  lessonsCompleted?: number;
};

export default function LearnProgressSummary({
  stars = 125,
  streak = 3,
  lessonsCompleted = 12,
}: LearnProgressSummaryProps) {
  const stats = [
    {
      id: 'stars',
      value: stars,
      label: 'Stars',
      icon: 'star' as const,
      iconColor: '#F2A300',
      backgroundColor: '#FFF4D9',
    },
    {
      id: 'streak',
      value: streak,
      label: 'Day Streak',
      icon: 'flame' as const,
      iconColor: '#F06A3A',
      backgroundColor: '#FFF0EA',
    },
    {
      id: 'lessons',
      value: lessonsCompleted,
      label: 'Lessons',
      icon: 'book' as const,
      iconColor: '#3C9A55',
      backgroundColor: '#EAF7ED',
    },
  ];

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
            শেখা চালিয়ে যাও! 🌟
          </Text>
        </View>

        <View style={styles.sparkle}>
          <Text style={styles.sparkleText}>
            ✨
          </Text>
        </View>
      </View>

      {/* =====================================
          SUMMARY CARD
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

            <Text style={styles.label}>
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

    paddingBottom: spacing.sm,
  },

  /* ==========================================
     HEADER
  ========================================== */

  header: {
    marginBottom: spacing.sm,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  eyebrow: {
    color: colors.text.secondary,

    fontSize: 11.5,
    lineHeight: 17,

    fontWeight: '600',
  },

  title: {
    marginTop: 1,

    color: colors.text.primary,

    fontSize: 18,
    lineHeight: 26,

    fontWeight: '800',
  },

  sparkle: {
    width: 36,
    height: 36,

    borderRadius: 18,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor:
      colors.primary[50],
  },

  sparkleText: {
    fontSize: 17,
  },

  /* ==========================================
     CARD
  ========================================== */

  card: {
    width: '100%',

    minHeight: 92,

    paddingVertical: 9,
    paddingHorizontal: 3,

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

    shadowOpacity: 0.05,

    shadowRadius: 9,

    elevation: 2,
  },

  /* ==========================================
     STAT
  ========================================== */

  stat: {
    flex: 1,

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

    marginBottom: 4,
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

    color: colors.text.secondary,

    fontSize: 9,

    lineHeight: 13,

    fontWeight: '600',

    textAlign: 'center',
  },
});