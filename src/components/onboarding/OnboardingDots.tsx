import { StyleSheet, View } from 'react-native';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';
import { spacing } from '@/theme/spacing';

type OnboardingDotsProps = {
  currentIndex: number;
  total: number;
};

export default function OnboardingDots({
  currentIndex,
  total,
}: OnboardingDotsProps) {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, index) => {
        const active = index === currentIndex;

        return (
          <View
            key={index}
            style={[
              styles.dot,
              active && styles.activeDot,
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 10,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    gap: spacing.sm,
  },

  dot: {
    width: 7,
    height: 7,

    borderRadius: radii.round,

    backgroundColor: colors.primary[100],
  },

  activeDot: {
    width: 22,

    backgroundColor: colors.primary[500],
  },
});