import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';
import { spacing } from '@/theme/spacing';

type TodayLessonCardProps = {
  lessonNumber?: number;
  letter?: string;
  letterName?: string;
  pronunciation?: string;
  onStart?: () => void;
};

export default function TodayLessonCard({
  lessonNumber = 7,
  letter = 'ب',
  letterName = 'বা',
  pronunciation = '/b/',
  onStart,
}: TodayLessonCardProps) {
  return (
    <View style={styles.container}>
      {/* =====================================
          SECTION HEADER
      ====================================== */}

      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.eyebrow}>
            আজকের পাঠ
          </Text>

          <Text style={styles.sectionTitle}>
            আজকের শেখা
          </Text>
        </View>

        <View style={styles.lessonBadge}>
          <Text style={styles.lessonBadgeText}>
            পাঠ {lessonNumber}
          </Text>
        </View>
      </View>

      {/* =====================================
          LESSON CARD
      ====================================== */}

      <View style={styles.card}>
        {/* Letter */}

        <View style={styles.letterWrapper}>
          <Text style={styles.arabicLetter}>
            {letter}
          </Text>
        </View>

        {/* Content */}

        <View style={styles.content}>
          <Text style={styles.smallLabel}>
            আজকের হরফ
          </Text>

          <Text style={styles.letterName}>
            {letterName}
          </Text>

          <View style={styles.pronunciationRow}>
            <Ionicons
              name="volume-high-outline"
              size={14}
              color={colors.primary[500]}
            />

            <Text style={styles.pronunciation}>
              {pronunciation}
            </Text>
          </View>
        </View>

        {/* Start Button */}

        <Pressable
          onPress={onStart}
          accessibilityRole="button"
          accessibilityLabel="আজকের পাঠ শুরু করুন"
          style={({ pressed }) => [
            styles.startButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <Ionicons
            name="play"
            size={15}
            color="#FFFFFF"
          />

          <Text style={styles.startButtonText}>
            শুরু
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: spacing.lg,
  },

  /* ==========================================
     SECTION HEADER
  ========================================== */

  sectionHeader: {
    width: '100%',

    marginBottom: spacing.sm,

    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  eyebrow: {
    color: colors.text.secondary,

    fontSize: 11.5,
    lineHeight: 17,

    fontWeight: '600',
  },

  sectionTitle: {
    marginTop: 1,

    color: colors.text.primary,

    fontSize: 18,
    lineHeight: 26,

    fontWeight: '800',
  },

  lessonBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,

    borderRadius: radii.round,

    backgroundColor:
      colors.primary[50],

    borderWidth: 1,
    borderColor:
      colors.primary[100],
  },

  lessonBadgeText: {
    color: colors.primary[500],

    fontSize: 10,

    fontWeight: '800',
  },

  /* ==========================================
     LESSON CARD
  ========================================== */

  card: {
    width: '100%',

    minHeight: 116,

    padding: 12,

    borderRadius: radii.xl,

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

    shadowOpacity: 0.06,

    shadowRadius: 10,

    elevation: 2,
  },

  /* ==========================================
     ARABIC LETTER
  ========================================== */

  letterWrapper: {
    width: 78,
    height: 78,

    borderRadius: 24,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor:
      colors.primary[50],
  },

  arabicLetter: {
    color: colors.primary[500],

    fontSize: 43,

    lineHeight: 56,

    fontWeight: '700',
  },

  /* ==========================================
     CONTENT
  ========================================== */

  content: {
    flex: 1,

    minWidth: 0,

    marginLeft: 13,

    paddingRight: 8,
  },

  smallLabel: {
    color: colors.text.secondary,

    fontSize: 9,

    lineHeight: 14,

    fontWeight: '600',
  },

  letterName: {
    marginTop: 1,

    color: colors.text.primary,

    fontSize: 18,

    lineHeight: 25,

    fontWeight: '900',
  },

  pronunciationRow: {
    marginTop: 4,

    flexDirection: 'row',
    alignItems: 'center',
  },

  pronunciation: {
    marginLeft: 4,

    color: colors.primary[500],

    fontSize: 11,

    fontWeight: '700',
  },

  /* ==========================================
     START BUTTON
  ========================================== */

  startButton: {
    minWidth: 62,
    height: 42,

    paddingHorizontal: 10,

    borderRadius: 21,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor:
      colors.primary[500],
  },

  startButtonText: {
    marginLeft: 4,

    color: '#FFFFFF',

    fontSize: 11,

    fontWeight: '800',
  },

  buttonPressed: {
    opacity: 0.82,

    transform: [
      {
        scale: 0.96,
      },
    ],
  },
});