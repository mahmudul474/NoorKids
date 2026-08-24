import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';
import { spacing } from '@/theme/spacing';

type QuizProgressProps = {
  current?: number;
  total?: number;
};

export default function QuizProgress({
  current = 1,
  total = 10,
}: QuizProgressProps) {
  const progress =
    total > 0
      ? Math.min(current / total, 1)
      : 0;

  const percentage = Math.round(
    progress * 100,
  );

  return (
    <View style={styles.container}>
      <View style={styles.meta}>
        <Text style={styles.label}>
          কুইজের অগ্রগতি
        </Text>

        <Text style={styles.percentage}>
          {percentage}%
        </Text>
      </View>

      <View style={styles.track}>
        <View
          style={[
            styles.fill,
            {
              width: `${percentage}%`,
            },
          ]}
        />
      </View>

      <View style={styles.bottomMeta}>
        <Text style={styles.questionCount}>
          {current} / {total} প্রশ্ন
        </Text>

        <Text style={styles.encouragement}>
          চালিয়ে যাও! 🌟
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',

    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },

  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: 7,
  },

  label: {
    color: colors.text.secondary,

    fontSize: 10.5,
    lineHeight: 16,

    fontWeight: '600',
  },

  percentage: {
    color: colors.primary[500],

    fontSize: 11,

    fontWeight: '800',
  },

  track: {
    width: '100%',

    height: 8,

    overflow: 'hidden',

    borderRadius: radii.round,

    backgroundColor:
      colors.primary[100],
  },

  fill: {
    height: '100%',

    borderRadius: radii.round,

    backgroundColor:
      colors.primary[500],
  },

  bottomMeta: {
    marginTop: 6,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  questionCount: {
    color: colors.text.secondary,

    fontSize: 9.5,

    fontWeight: '500',
  },

  encouragement: {
    color: colors.primary[500],

    fontSize: 9.5,

    fontWeight: '700',
  },
});