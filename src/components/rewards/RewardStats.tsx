import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';
import { spacing } from '@/theme/spacing';

type RewardStatsProps = {
  streak?: number;
  achievements?: number;
  lessons?: number;
};

export default function RewardStats({
  streak = 3,
  achievements = 8,
  lessons = 12,
}: RewardStatsProps) {
  return (
    <View style={styles.container}>
      {/* Streak */}

      <View style={styles.stat}>
        <View
          style={[
            styles.iconCircle,
            styles.fireCircle,
          ]}
        >
          <Text style={styles.icon}>
            🔥
          </Text>
        </View>

        <Text style={styles.value}>
          {streak}
        </Text>

        <Text style={styles.label}>
          Day Streak
        </Text>
      </View>

      {/* Divider */}

      <View style={styles.divider} />

      {/* Achievements */}

      <View style={styles.stat}>
        <View
          style={[
            styles.iconCircle,
            styles.trophyCircle,
          ]}
        >
          <Text style={styles.icon}>
            🏆
          </Text>
        </View>

        <Text style={styles.value}>
          {achievements}
        </Text>

        <Text style={styles.label}>
          Achievements
        </Text>
      </View>

      {/* Divider */}

      <View style={styles.divider} />

      {/* Lessons */}

      <View style={styles.stat}>
        <View
          style={[
            styles.iconCircle,
            styles.bookCircle,
          ]}
        >
          <Text style={styles.icon}>
            📚
          </Text>
        </View>

        <Text style={styles.value}>
          {lessons}
        </Text>

        <Text style={styles.label}>
          Lessons
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',

    marginTop: spacing.md,

    paddingVertical: 12,

    paddingHorizontal: 4,

    borderRadius: radii.xl,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderWidth: 1,

    borderColor:
      colors.primary[100],

    shadowColor: '#21154F',

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.05,

    shadowRadius: 8,

    elevation: 2,
  },

  stat: {
    flex: 1,

    minHeight: 78,

    alignItems: 'center',

    justifyContent: 'center',
  },

  iconCircle: {
    width: 34,
    height: 34,

    borderRadius: 17,

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 5,
  },

  fireCircle: {
    backgroundColor: '#FFF0E8',
  },

  trophyCircle: {
    backgroundColor:
      colors.primary[50],
  },

  bookCircle: {
    backgroundColor: '#EAF7ED',
  },

  icon: {
    fontSize: 16,
  },

  value: {
    color: colors.text.primary,

    fontSize: 16,

    lineHeight: 20,

    fontWeight: '900',
  },

  label: {
    marginTop: 2,

    color: colors.text.secondary,

    fontSize: 8,

    lineHeight: 12,

    fontWeight: '600',

    textAlign: 'center',
  },

  divider: {
    width: 1,

    height: 55,

    backgroundColor: '#EEEAF5',
  },
});