import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

type LessonNavigationProps = {
  current?: number;
  total?: number;
  onPrevious?: () => void;
  onNext?: () => void;
};

export default function LessonNavigation({
  current = 7,
  total = 29,
  onPrevious,
  onNext,
}: LessonNavigationProps) {
  const isFirst = current <= 1;
  const isLast = current >= total;

  return (
    <View style={styles.container}>
      {/* =====================================
          PROGRESS TEXT
      ====================================== */}

      <Text style={styles.progressText}>
        {current} / {total}
      </Text>

      {/* =====================================
          NAVIGATION BUTTONS
      ====================================== */}

      <View style={styles.buttons}>
        {/* Previous */}

        <Pressable
          onPress={onPrevious}
          disabled={isFirst}
          accessibilityRole="button"
          accessibilityLabel="আগের হরফ"
          style={({ pressed }) => [
            styles.previousButton,
            isFirst &&
              styles.disabledButton,
            pressed &&
              !isFirst &&
              styles.buttonPressed,
          ]}
        >
          <Ionicons
            name="arrow-back"
            size={18}
            color={
              isFirst
                ? '#BEB8CB'
                : colors.primary[500]
            }
          />

          <Text
            style={[
              styles.previousText,
              isFirst &&
                styles.disabledText,
            ]}
          >
            আগের
          </Text>
        </Pressable>

        {/* Next */}

        <Pressable
          onPress={onNext}
          disabled={isLast}
          accessibilityRole="button"
          accessibilityLabel={
            isLast
              ? 'পাঠ সম্পন্ন করুন'
              : 'পরের হরফ'
          }
          style={({ pressed }) => [
            styles.nextButton,
            isLast &&
              styles.lastButton,
            pressed &&
              !isLast &&
              styles.buttonPressed,
          ]}
        >
          <Text style={styles.nextText}>
            {isLast
              ? 'সম্পন্ন'
              : 'পরের হরফ'}
          </Text>

          <Ionicons
            name={
              isLast
                ? 'checkmark'
                : 'arrow-forward'
            }
            size={18}
            color="#FFFFFF"
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',

    marginTop: spacing.lg,

    paddingBottom: spacing.xl,
  },

  /* ==========================================
     PROGRESS
  ========================================== */

  progressText: {
    color: colors.text.secondary,

    fontSize: 10,

    lineHeight: 15,

    fontWeight: '600',

    textAlign: 'center',

    marginBottom: 9,
  },

  /* ==========================================
     BUTTONS
  ========================================== */

  buttons: {
    width: '100%',

    flexDirection: 'row',

    alignItems: 'center',

    gap: 9,
  },

  /* ==========================================
     PREVIOUS
  ========================================== */

  previousButton: {
    flex: 1,

    minHeight: 50,

    borderRadius: 25,

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#FFFFFF',

    borderWidth: 1,

    borderColor:
      colors.primary[100],
  },

  previousText: {
    marginLeft: 5,

    color: colors.primary[500],

    fontSize: 13,

    fontWeight: '800',
  },

  /* ==========================================
     NEXT
  ========================================== */

  nextButton: {
    flex: 1,

    minHeight: 50,

    borderRadius: 25,

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor:
      colors.primary[500],
  },

  nextText: {
    marginRight: 5,

    color: '#FFFFFF',

    fontSize: 13,

    fontWeight: '800',
  },

  /* ==========================================
     LAST
  ========================================== */

  lastButton: {
    backgroundColor:
      '#42A62A',
  },

  /* ==========================================
     DISABLED
  ========================================== */

  disabledButton: {
    backgroundColor: '#F4F2F8',

    borderColor: '#E8E4EF',
  },

  disabledText: {
    color: '#BEB8CB',
  },

  /* ==========================================
     PRESS
  ========================================== */

  buttonPressed: {
    opacity: 0.8,

    transform: [
      {
        scale: 0.98,
      },
    ],
  },
});