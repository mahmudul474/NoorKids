import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

type QuizNavigationProps = {
  current?: number;
  total?: number;
  hasSelectedAnswer?: boolean;
  onNext?: () => void;
};

export default function QuizNavigation({
  current = 1,
  total = 10,
  hasSelectedAnswer = false,
  onNext,
}: QuizNavigationProps) {
  const isLastQuestion = current >= total;

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onNext}
        disabled={!hasSelectedAnswer}
        accessibilityRole="button"
        accessibilityLabel={
          isLastQuestion
            ? 'কুইজ শেষ করুন'
            : 'পরের প্রশ্ন'
        }
        style={({ pressed }) => [
          styles.button,
          !hasSelectedAnswer &&
            styles.disabledButton,
          pressed &&
            hasSelectedAnswer &&
            styles.pressed,
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            !hasSelectedAnswer &&
              styles.disabledText,
          ]}
        >
          {isLastQuestion
            ? 'ফলাফল দেখুন'
            : 'পরের প্রশ্ন'}
        </Text>

        <View
          style={[
            styles.iconCircle,
            !hasSelectedAnswer &&
              styles.disabledIconCircle,
          ]}
        >
          <Ionicons
            name={
              isLastQuestion
                ? 'checkmark'
                : 'arrow-forward'
            }
            size={17}
            color={
              hasSelectedAnswer
                ? colors.primary[500]
                : '#B9B3C8'
            }
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',

    marginTop: spacing.sm,

    paddingBottom: spacing.xl,
  },

  button: {
    width: '100%',

    minHeight: 56,

    paddingLeft: 20,
    paddingRight: 7,

    borderRadius: 28,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor:
      colors.primary[500],

    shadowColor:
      colors.primary[500],

    shadowOffset: {
      width: 0,
      height: 5,
    },

    shadowOpacity: 0.18,

    shadowRadius: 10,

    elevation: 4,
  },

  buttonText: {
    color: '#FFFFFF',

    fontSize: 14,

    fontWeight: '800',
  },

  iconCircle: {
    width: 42,
    height: 42,

    borderRadius: 21,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#FFFFFF',
  },

  disabledButton: {
    backgroundColor: '#E9E5F2',

    shadowOpacity: 0,

    elevation: 0,
  },

  disabledText: {
    color: '#AAA4B9',
  },

  disabledIconCircle: {
    backgroundColor: '#F5F3F8',
  },

  pressed: {
    opacity: 0.82,

    transform: [
      {
        scale: 0.985,
      },
    ],
  },
});