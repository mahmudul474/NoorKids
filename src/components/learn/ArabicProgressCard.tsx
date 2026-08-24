import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';
import { spacing } from '@/theme/spacing';

type ArabicProgressCardProps = {
  completed?: number;
  total?: number;
  onContinue?: () => void;
};

export default function ArabicProgressCard({
  completed = 6,
  total = 29,
  onContinue,
}: ArabicProgressCardProps) {
  const progress =
    total > 0
      ? Math.min(completed / total, 1)
      : 0;

  const percentage = Math.round(
    progress * 100,
  );

  return (
    <View style={styles.card}>
      {/* =====================================
          TOP
      ====================================== */}

      <View style={styles.topRow}>
        <View style={styles.iconWrapper}>
          <Text style={styles.arabicLetter}>
            ا
          </Text>
        </View>

        <View style={styles.titleArea}>
          <Text style={styles.eyebrow}>
            আরবি শেখা
          </Text>

          <Text style={styles.title}>
            আরবি হরফ
          </Text>

          <Text style={styles.description}>
            ধাপে ধাপে ২৯টি হরফ শিখি
          </Text>
        </View>

        <View style={styles.percentageBadge}>
          <Text style={styles.percentage}>
            {percentage}%
          </Text>
        </View>
      </View>

      {/* =====================================
          PROGRESS
      ====================================== */}

      <View style={styles.progressArea}>
        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${percentage}%`,
              },
            ]}
          />
        </View>

        <View style={styles.progressMeta}>
          <Text style={styles.progressText}>
            {completed} / {total} হরফ সম্পন্ন
          </Text>

          <Text style={styles.remainingText}>
            {Math.max(total - completed, 0)} বাকি
          </Text>
        </View>
      </View>

      {/* =====================================
          CONTINUE BUTTON
      ====================================== */}

      <Pressable
        onPress={onContinue}
        accessibilityRole="button"
        accessibilityLabel="হরফ শেখা চালিয়ে যান"
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>
          শেখা চালিয়ে যান
        </Text>

        <View style={styles.arrowCircle}>
          <Ionicons
            name="arrow-forward"
            size={17}
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

    marginTop: spacing.md,

    padding: spacing.base,

    borderRadius: radii.xl,

    backgroundColor:
      colors.primary[500],

    shadowColor:
      colors.primary[900],

    shadowOffset: {
      width: 0,
      height: 8,
    },

    shadowOpacity: 0.17,

    shadowRadius: 16,

    elevation: 6,
  },

  /* ==========================================
     TOP ROW
  ========================================== */

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconWrapper: {
    width: 60,
    height: 60,

    borderRadius: 19,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor:
      'rgba(255,255,255,0.16)',
  },

  arabicLetter: {
    color: '#FFFFFF',

    fontSize: 34,

    fontWeight: '700',

    lineHeight: 44,
  },

  titleArea: {
    flex: 1,

    marginLeft: 12,

    paddingRight: 8,
  },

  eyebrow: {
    color:
      'rgba(255,255,255,0.72)',

    fontSize: 11,

    fontWeight: '600',
  },

  title: {
    marginTop: 1,

    color: '#FFFFFF',

    fontSize: 20,

    lineHeight: 27,

    fontWeight: '900',
  },

  description: {
    marginTop: 1,

    color:
      'rgba(255,255,255,0.72)',

    fontSize: 10,

    lineHeight: 15,

    fontWeight: '500',
  },

  percentageBadge: {
    minWidth: 46,
    height: 46,

    borderRadius: 23,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor:
      'rgba(255,255,255,0.14)',

    borderWidth: 1,

    borderColor:
      'rgba(255,255,255,0.18)',
  },

  percentage: {
    color: '#FFFFFF',

    fontSize: 12,

    fontWeight: '900',
  },

  /* ==========================================
     PROGRESS
  ========================================== */

  progressArea: {
    marginTop: spacing.base,
  },

  progressTrack: {
    width: '100%',

    height: 8,

    borderRadius: 999,

    overflow: 'hidden',

    backgroundColor:
      'rgba(255,255,255,0.20)',
  },

  progressFill: {
    height: '100%',

    borderRadius: 999,

    backgroundColor: '#FFFFFF',
  },

  progressMeta: {
    marginTop: 7,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
  },

  progressText: {
    color:
      'rgba(255,255,255,0.76)',

    fontSize: 10,

    fontWeight: '600',
  },

  remainingText: {
    color:
      'rgba(255,255,255,0.65)',

    fontSize: 10,

    fontWeight: '500',
  },

  /* ==========================================
     BUTTON
  ========================================== */

  button: {
    marginTop: spacing.base,

    minHeight: 50,

    paddingLeft: 17,

    paddingRight: 6,

    borderRadius: 25,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    backgroundColor: '#FFFFFF',
  },

  buttonText: {
    color:
      colors.primary[500],

    fontSize: 14,

    fontWeight: '800',

    marginLeft: 5,
  },

  arrowCircle: {
    width: 38,
    height: 38,

    borderRadius: 19,

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