import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';
import { spacing } from '@/theme/spacing';

type DailyGoalCardProps = {
  completedLessons?: number;
  totalLessons?: number;
  stars?: number;
  streak?: number;
  onContinue?: () => void;
};

export default function DailyGoalCard({
  completedLessons = 3,
  totalLessons = 5,
  stars = 125,
  streak = 3,
  onContinue,
}: DailyGoalCardProps) {
  const progress =
    totalLessons > 0
      ? Math.min(
          completedLessons / totalLessons,
          1,
        )
      : 0;

  const progressPercentage = Math.round(
    progress * 100,
  );

  return (
    <View style={styles.card}>
      {/* =====================================
          TOP ROW
      ====================================== */}

      <View style={styles.topRow}>
        <View style={styles.titleArea}>
          <View style={styles.iconCircle}>
            <Ionicons
              name="trophy"
              size={22}
              color="#FFFFFF"
            />
          </View>

          <View style={styles.titleTextArea}>
            <Text style={styles.eyebrow}>
              আজকের লক্ষ্য
            </Text>

            <Text style={styles.title}>
              শেখা চালিয়ে যাও!
            </Text>
          </View>
        </View>

        <Text style={styles.percentage}>
          {progressPercentage}%
        </Text>
      </View>

      {/* =====================================
          PROGRESS
      ====================================== */}

      <View style={styles.progressSection}>
        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${progressPercentage}%`,
              },
            ]}
          />
        </View>

        <Text style={styles.progressText}>
          {completedLessons} / {totalLessons} lessons complete
        </Text>
      </View>

      {/* =====================================
          STATS
      ====================================== */}

      <View style={styles.statsRow}>
        {/* Stars */}

        <View style={styles.statItem}>
          <View
            style={[
              styles.statIcon,
              styles.starBackground,
            ]}
          >
            <Text style={styles.statEmoji}>
              ⭐
            </Text>
          </View>

          <View>
            <Text style={styles.statValue}>
              {stars}
            </Text>

            <Text style={styles.statLabel}>
              Stars
            </Text>
          </View>
        </View>

        {/* Streak */}

        <View style={styles.statItem}>
          <View
            style={[
              styles.statIcon,
              styles.streakBackground,
            ]}
          >
            <Text style={styles.statEmoji}>
              🔥
            </Text>
          </View>

          <View>
            <Text style={styles.statValue}>
              {streak}
            </Text>

            <Text style={styles.statLabel}>
              Day Streak
            </Text>
          </View>
        </View>
      </View>

      {/* =====================================
          CONTINUE BUTTON
      ====================================== */}

      <Pressable
        onPress={onContinue}
        accessibilityRole="button"
        accessibilityLabel="শেখা চালিয়ে যান"
        style={({ pressed }) => [
          styles.continueButton,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.continueText}>
          শেখা চালিয়ে যান
        </Text>

        <View style={styles.arrowCircle}>
          <Ionicons
            name="arrow-forward"
            size={18}
            color={colors.primary[500]}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',

    padding: spacing.base,

    borderRadius: radii.xl,

    backgroundColor:
      colors.primary[500],

    shadowColor: colors.primary[900],
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.18,
    shadowRadius: 16,

    elevation: 6,
  },

  /* ==========================================
     TOP
  ========================================== */

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  titleArea: {
    flexDirection: 'row',
    alignItems: 'center',

    flex: 1,
  },

  iconCircle: {
    width: 46,
    height: 46,

    borderRadius: 23,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor:
      'rgba(255,255,255,0.18)',
  },

  titleTextArea: {
    marginLeft: 12,
  },

  eyebrow: {
    color:
      'rgba(255,255,255,0.78)',

    fontSize: 12,
    fontWeight: '600',
  },

  title: {
    marginTop: 2,

    color: '#FFFFFF',

    fontSize: 18,
    lineHeight: 25,

    fontWeight: '800',
  },

  percentage: {
    color: '#FFFFFF',

    fontSize: 24,
    fontWeight: '900',
  },

  /* ==========================================
     PROGRESS
  ========================================== */

  progressSection: {
    marginTop: spacing.base,
  },

  progressTrack: {
    width: '100%',
    height: 9,

    borderRadius: 999,

    overflow: 'hidden',

    backgroundColor:
      'rgba(255,255,255,0.22)',
  },

  progressFill: {
    height: '100%',

    borderRadius: 999,

    backgroundColor: '#FFFFFF',
  },

  progressText: {
    marginTop: 7,

    color:
      'rgba(255,255,255,0.78)',

    fontSize: 12,
    fontWeight: '600',
  },

  /* ==========================================
     STATS
  ========================================== */

  statsRow: {
    marginTop: spacing.base,

    paddingTop: spacing.md,

    borderTopWidth: 1,

    borderTopColor:
      'rgba(255,255,255,0.14)',

    flexDirection: 'row',
    alignItems: 'center',
  },

  statItem: {
    flex: 1,

    flexDirection: 'row',
    alignItems: 'center',
  },

  statIcon: {
    width: 38,
    height: 38,

    borderRadius: 19,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 9,
  },

  starBackground: {
    backgroundColor:
      'rgba(255,210,60,0.20)',
  },

  streakBackground: {
    backgroundColor:
      'rgba(255,105,80,0.20)',
  },

  statEmoji: {
    fontSize: 18,
  },

  statValue: {
    color: '#FFFFFF',

    fontSize: 15,
    fontWeight: '800',
  },

  statLabel: {
    marginTop: 1,

    color:
      'rgba(255,255,255,0.68)',

    fontSize: 11,
    fontWeight: '500',
  },

  /* ==========================================
     BUTTON
  ========================================== */

  continueButton: {
    marginTop: spacing.base,

    minHeight: 52,

    paddingLeft: 18,
    paddingRight: 7,

    borderRadius: 26,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: '#FFFFFF',
  },

  continueText: {
    color: colors.primary[500],

    fontSize: 15,
    fontWeight: '800',

    marginLeft: 6,
  },

  arrowCircle: {
    width: 40,
    height: 40,

    borderRadius: 20,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor:
      colors.primary[50],
  },

  buttonPressed: {
    opacity: 0.86,

    transform: [
      {
        scale: 0.985,
      },
    ],
  },
});