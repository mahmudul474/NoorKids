import { Ionicons } from '@expo/vector-icons';
import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';
import { spacing } from '@/theme/spacing';

type LetterDisplayProps = {
  letter?: string;
  name?: string;
  pronunciation?: string;
  onPlay?: () => void;
};

export default function LetterDisplay({
  letter = 'ب',
  name = 'বা',
  pronunciation = '/b/',
  onPlay,
}: LetterDisplayProps) {
  return (
    <View style={styles.container}>
      {/* =====================================
          LETTER CARD
      ====================================== */}

      <View style={styles.card}>
        {/* Small Label */}

        <View style={styles.labelBadge}>
          <Text style={styles.labelText}>
            এই হরফটি শিখি
          </Text>
        </View>

        {/* Arabic Letter */}

        <Text
          style={styles.arabicLetter}
          accessibilityLabel={`আরবি হরফ ${letter}`}
        >
          {letter}
        </Text>

        {/* Letter Name */}

        <Text style={styles.name}>
          {name}
        </Text>

        {/* Pronunciation */}

        <View style={styles.pronunciationRow}>
          <Text style={styles.pronunciation}>
            {pronunciation}
          </Text>

          <Pressable
            onPress={onPlay}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="উচ্চারণ শুনুন"
            style={({ pressed }) => [
              styles.soundButton,
              pressed && styles.pressed,
            ]}
          >
            <Ionicons
              name="volume-high"
              size={17}
              color="#FFFFFF"
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: spacing.md,
  },

  /* ==========================================
     CARD
  ========================================== */

  card: {
    width: '100%',

    minHeight: 285,

    paddingVertical: 22,
    paddingHorizontal: spacing.base,

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

    shadowOpacity: 0.065,

    shadowRadius: 14,

    elevation: 3,
  },

  /* ==========================================
     LABEL
  ========================================== */

  labelBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,

    borderRadius: radii.round,

    backgroundColor:
      colors.primary[50],
  },

  labelText: {
    color: colors.primary[500],

    fontSize: 10,

    fontWeight: '700',
  },

  /* ==========================================
     ARABIC LETTER
  ========================================== */

  arabicLetter: {
    marginTop: 10,

    color: colors.primary[500],

    fontSize: 108,

    lineHeight: 132,

    fontWeight: '500',

    textAlign: 'center',

    includeFontPadding: true,
  },

  /* ==========================================
     NAME
  ========================================== */

  name: {
    marginTop: 0,

    color: colors.text.primary,

    fontSize: 24,

    lineHeight: 32,

    fontWeight: '900',

    textAlign: 'center',
  },

  /* ==========================================
     PRONUNCIATION
  ========================================== */

  pronunciationRow: {
    marginTop: 8,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pronunciation: {
    color: colors.text.secondary,

    fontSize: 14,

    lineHeight: 20,

    fontWeight: '600',
  },

  /* ==========================================
     SOUND
  ========================================== */

  soundButton: {
    width: 34,
    height: 34,

    marginLeft: 9,

    borderRadius: 17,

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

  pressed: {
    opacity: 0.8,

    transform: [
      {
        scale: 0.94,
      },
    ],
  },
});