import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';
import { spacing } from '@/theme/spacing';

type LetterExamplesProps = {
  letter?: string;
};

export default function LetterExamples({
  letter = 'ب',
}: LetterExamplesProps) {
  const examples = [
    {
      id: 'beginning',
      label: 'শুরুতে',
      example: `${letter}ـ`,
    },
    {
      id: 'middle',
      label: 'মাঝে',
      example: `ـ${letter}ـ`,
    },
    {
      id: 'end',
      label: 'শেষে',
      example: `ـ${letter}`,
    },
  ];

  return (
    <View style={styles.container}>
      {/* =====================================
          HEADER
      ====================================== */}

      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>
            হরফের ব্যবহার
          </Text>

          <Text style={styles.title}>
            বিভিন্ন অবস্থায় দেখো
          </Text>
        </View>
      </View>

      {/* =====================================
          EXAMPLES
      ====================================== */}

      <View style={styles.row}>
        {examples.map((item) => (
          <View
            key={item.id}
            style={styles.exampleCard}
          >
            {/* Label */}

            <Text style={styles.label}>
              {item.label}
            </Text>

            {/* Arabic */}

            <View style={styles.letterBox}>
              <Text
                style={styles.exampleLetter}
                accessibilityLabel={
                  `${item.label} ${letter}`
                }
              >
                {item.example}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* =====================================
          INFO
      ====================================== */}

      <View style={styles.infoBox}>
        <View style={styles.infoIcon}>
          <Text style={styles.infoEmoji}>
            💡
          </Text>
        </View>

        <Text style={styles.infoText}>
          হরফের অবস্থান পরিবর্তন হলে এর
          আকৃতিও পরিবর্তিত হতে পারে।
        </Text>
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
     HEADER
  ========================================== */

  header: {
    marginBottom: spacing.sm,
  },

  eyebrow: {
    color: colors.text.secondary,

    fontSize: 11.5,
    lineHeight: 17,

    fontWeight: '600',
  },

  title: {
    marginTop: 1,

    color: colors.text.primary,

    fontSize: 18,
    lineHeight: 26,

    fontWeight: '800',
  },

  /* ==========================================
     EXAMPLE ROW
  ========================================== */

  row: {
    width: '100%',

    flexDirection: 'row',

    justifyContent: 'space-between',

    gap: 8,
  },

  /* ==========================================
     EXAMPLE CARD
  ========================================== */

  exampleCard: {
    flex: 1,

    minHeight: 126,

    paddingVertical: 10,
    paddingHorizontal: 5,

    borderRadius: radii.lg,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: colors.primary[100],

    shadowColor: '#21154F',

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.045,

    shadowRadius: 8,

    elevation: 2,
  },

  /* ==========================================
     LABEL
  ========================================== */

  label: {
    color: colors.text.secondary,

    fontSize: 10,

    lineHeight: 15,

    fontWeight: '700',

    textAlign: 'center',
  },

  /* ==========================================
     LETTER
  ========================================== */

  letterBox: {
    width: '100%',

    height: 76,

    marginTop: 4,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 14,

    backgroundColor:
      colors.primary[50],
  },

  exampleLetter: {
    color: colors.primary[500],

    fontSize: 38,

    lineHeight: 52,

    fontWeight: '500',

    textAlign: 'center',

    includeFontPadding: true,
  },

  /* ==========================================
     INFO
  ========================================== */

  infoBox: {
    width: '100%',

    marginTop: 10,

    paddingVertical: 11,
    paddingHorizontal: 12,

    borderRadius: radii.lg,

    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#FFF9E8',

    borderWidth: 1,

    borderColor: '#F8E9B8',
  },

  infoIcon: {
    width: 32,
    height: 32,

    borderRadius: 12,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#FFF0C7',
  },

  infoEmoji: {
    fontSize: 15,
  },

  infoText: {
    flex: 1,

    marginLeft: 9,

    color: '#75632D',

    fontSize: 9.5,

    lineHeight: 15,

    fontWeight: '600',
  },
});