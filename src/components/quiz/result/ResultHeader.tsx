import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

type ResultHeaderProps = {
  score?: number;
  total?: number;
};

export default function ResultHeader({
  score = 8,
  total = 10,
}: ResultHeaderProps) {
  const percentage =
    total > 0
      ? Math.round((score / total) * 100)
      : 0;

  const getMessage = () => {
    if (percentage >= 90) {
      return 'অসাধারণ! তুমি দারুণ করেছো! 🎉';
    }

    if (percentage >= 70) {
      return 'খুব ভালো! এভাবেই চালিয়ে যাও! 🌟';
    }

    if (percentage >= 50) {
      return 'ভালো চেষ্টা! আরও একটু অনুশীলন করো। 💪';
    }

    return 'চেষ্টা চালিয়ে যাও! তুমি পারবে। ❤️';
  };

  return (
    <View style={styles.container}>
      {/* Celebration */}

      <View style={styles.celebration}>
        <Text style={styles.emoji}>
          🎉
        </Text>
      </View>

      {/* Title */}

      <Text style={styles.title}>
        কুইজ সম্পন্ন!
      </Text>

      {/* Message */}

      <Text style={styles.message}>
        {getMessage()}
      </Text>

      {/* Score */}

      <View style={styles.scoreRow}>
        <Text style={styles.score}>
          {score}
        </Text>

        <Text style={styles.separator}>
          /
        </Text>

        <Text style={styles.total}>
          {total}
        </Text>
      </View>

      <Text style={styles.scoreLabel}>
        সঠিক উত্তর
      </Text>

      {/* Percentage */}

      <View style={styles.percentageBadge}>
        <Text style={styles.percentage}>
          {percentage}%
        </Text>

        <Text style={styles.accuracy}>
          Accuracy
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',

    alignItems: 'center',

    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
  },

  celebration: {
    width: 76,
    height: 76,

    borderRadius: 38,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor:
      colors.primary[50],
  },

  emoji: {
    fontSize: 38,
  },

  title: {
    marginTop: 14,

    color: colors.text.primary,

    fontSize: 27,
    lineHeight: 36,

    fontWeight: '900',

    textAlign: 'center',
  },

  message: {
    marginTop: 6,

    paddingHorizontal: 12,

    color: colors.text.secondary,

    fontSize: 13,
    lineHeight: 20,

    fontWeight: '600',

    textAlign: 'center',
  },

  scoreRow: {
    marginTop: 18,

    flexDirection: 'row',

    alignItems: 'baseline',

    justifyContent: 'center',
  },

  score: {
    color: colors.primary[500],

    fontSize: 58,
    lineHeight: 66,

    fontWeight: '900',
  },

  separator: {
    marginHorizontal: 7,

    color: '#C8C1D7',

    fontSize: 30,

    fontWeight: '500',
  },

  total: {
    color: colors.text.primary,

    fontSize: 32,

    fontWeight: '800',
  },

  scoreLabel: {
    marginTop: 1,

    color: colors.text.secondary,

    fontSize: 11,

    fontWeight: '600',
  },

  percentageBadge: {
    marginTop: 12,

    paddingHorizontal: 14,
    paddingVertical: 7,

    borderRadius: 999,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#EFF9EA',

    borderWidth: 1,

    borderColor: '#D5EDCA',
  },

  percentage: {
    color: '#42A62A',

    fontSize: 13,

    fontWeight: '900',
  },

  accuracy: {
    marginLeft: 5,

    color: '#5E8052',

    fontSize: 10,

    fontWeight: '600',
  },
});