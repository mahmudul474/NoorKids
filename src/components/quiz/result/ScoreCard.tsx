import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';
import { spacing } from '@/theme/spacing';

type ScoreCardProps = {
  score?: number;
  total?: number;
  starsEarned?: number;
};

export default function ScoreCard({
  score = 8,
  total = 10,
  starsEarned = 40,
}: ScoreCardProps) {
  const percentage =
    total > 0
      ? Math.round((score / total) * 100)
      : 0;

  return (
    <View style={styles.card}>
      {/* =====================================
          MAIN SCORE
      ====================================== */}

      <View style={styles.scoreSection}>
        <Text style={styles.scoreLabel}>
          তোমার স্কোর
        </Text>

        <View style={styles.scoreRow}>
          <Text style={styles.score}>
            {score}
          </Text>

          <Text style={styles.total}>
            / {total}
          </Text>
        </View>

        <Text style={styles.accuracy}>
          {percentage}% সঠিক উত্তর
        </Text>
      </View>

      {/* =====================================
          DIVIDER
      ====================================== */}

      <View style={styles.divider} />

      {/* =====================================
          REWARD
      ====================================== */}

      <View style={styles.rewardSection}>
        <View style={styles.starCircle}>
          <Text style={styles.star}>
            ⭐
          </Text>
        </View>

        <View style={styles.rewardInfo}>
          <Text style={styles.rewardTitle}>
            দারুণ! তুমি পেয়েছো
          </Text>

          <View style={styles.rewardRow}>
            <Text style={styles.rewardStars}>
              +{starsEarned}
            </Text>

            <Text style={styles.rewardText}>
              Stars
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',

    padding: spacing.base,

    borderRadius: radii.xl,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,

    borderColor:
      colors.primary[100],

    shadowColor: '#21154F',

    shadowOffset: {
      width: 0,
      height: 5,
    },

    shadowOpacity: 0.06,

    shadowRadius: 14,

    elevation: 3,
  },

  /* ==========================================
     SCORE
  ========================================== */

  scoreSection: {
    alignItems: 'center',
  },

  scoreLabel: {
    color: colors.text.secondary,

    fontSize: 10.5,

    fontWeight: '600',
  },

  scoreRow: {
    marginTop: 2,

    flexDirection: 'row',

    alignItems: 'baseline',
  },

  score: {
    color: colors.primary[500],

    fontSize: 42,

    lineHeight: 50,

    fontWeight: '900',
  },

  total: {
    marginLeft: 4,

    color: colors.text.secondary,

    fontSize: 20,

    fontWeight: '700',
  },

  accuracy: {
    marginTop: 1,

    color: '#42A62A',

    fontSize: 11,

    fontWeight: '700',
  },

  /* ==========================================
     DIVIDER
  ========================================== */

  divider: {
    height: 1,

    marginVertical: 16,

    backgroundColor: '#F0EDF7',
  },

  /* ==========================================
     REWARD
  ========================================== */

  rewardSection: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  starCircle: {
    width: 48,
    height: 48,

    borderRadius: 24,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor:
      '#FFF5D6',

    borderWidth: 1,

    borderColor:
      '#F5E2A7',
  },

  star: {
    fontSize: 24,
  },

  rewardInfo: {
    flex: 1,

    marginLeft: 11,
  },

  rewardTitle: {
    color: colors.text.secondary,

    fontSize: 10,

    fontWeight: '600',
  },

  rewardRow: {
    marginTop: 1,

    flexDirection: 'row',

    alignItems: 'baseline',
  },

  rewardStars: {
    color: '#D79600',

    fontSize: 20,

    fontWeight: '900',
  },

  rewardText: {
    marginLeft: 5,

    color: colors.text.primary,

    fontSize: 11,

    fontWeight: '700',
  },
});