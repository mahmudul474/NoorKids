import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';
import { spacing } from '@/theme/spacing';

type QuestionCardProps = {
  question?: string;
  arabicLetter?: string;
  instruction?: string;
  onPlayAudio?: () => void;
};

export default function QuestionCard({
  question = 'এই হরফটির নাম কী?',
  arabicLetter = 'ب',
  instruction = 'সঠিক উত্তরটি নির্বাচন করো',
  onPlayAudio,
}: QuestionCardProps) {
  return (
    <View style={styles.container}>
      {/* =====================================
          QUESTION CARD
      ====================================== */}

      <View style={styles.card}>
        {/* Question */}

        <Text style={styles.question}>
          {question}
        </Text>

        {/* Arabic Letter */}

        <View style={styles.letterWrapper}>
          <Text style={styles.arabicLetter}>
            {arabicLetter}
          </Text>

          {/* Audio */}

          <Pressable
            onPress={onPlayAudio}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="হরফটির উচ্চারণ শুনুন"
            style={({ pressed }) => [
              styles.audioButton,
              pressed && styles.pressed,
            ]}
          >
            <Ionicons
              name="volume-high"
              size={18}
              color="#FFFFFF"
            />
          </Pressable>
        </View>

        {/* Instruction */}

        <View style={styles.instructionBox}>
          <Ionicons
            name="bulb-outline"
            size={16}
            color="#B47A00"
          />

          <Text style={styles.instruction}>
            {instruction}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: spacing.sm,
  },

  /* ==========================================
     CARD
  ========================================== */

  card: {
    width: '100%',

    minHeight: 285,

    paddingHorizontal: spacing.base,
    paddingVertical: 22,

    borderRadius: radii.xl,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: colors.primary[100],

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
     QUESTION
  ========================================== */

  question: {
    color: colors.text.primary,

    fontSize: 19,
    lineHeight: 28,

    fontWeight: '900',

    textAlign: 'center',
  },

  /* ==========================================
     LETTER
  ========================================== */

  letterWrapper: {
    position: 'relative',

    width: 190,
    height: 150,

    marginTop: 10,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 28,

    backgroundColor:
      colors.primary[50],
  },

  arabicLetter: {
    color: colors.primary[500],

    fontSize: 88,

    lineHeight: 110,

    fontWeight: '500',

    textAlign: 'center',

    includeFontPadding: true,
  },

  /* ==========================================
     AUDIO
  ========================================== */

  audioButton: {
    position: 'absolute',

    right: 10,
    bottom: 10,

    width: 38,
    height: 38,

    borderRadius: 19,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor:
      colors.primary[500],

    shadowColor:
      colors.primary[500],

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.18,

    shadowRadius: 6,

    elevation: 3,
  },

  /* ==========================================
     INSTRUCTION
  ========================================== */

  instructionBox: {
    width: '100%',

    marginTop: 14,

    paddingHorizontal: 12,
    paddingVertical: 9,

    borderRadius: radii.lg,

    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#FFF9E8',

    borderWidth: 1,
    borderColor: '#F8E9B8',
  },

  instruction: {
    flex: 1,

    marginLeft: 7,

    color: '#75632D',

    fontSize: 10.5,
    lineHeight: 16,

    fontWeight: '600',
  },

  /* ==========================================
     PRESS
  ========================================== */

  pressed: {
    opacity: 0.78,

    transform: [
      {
        scale: 0.94,
      },
    ],
  },
});