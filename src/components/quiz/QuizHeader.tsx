import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';
import { spacing } from '@/theme/spacing';

type QuizHeaderProps = {
  current?: number;
  total?: number;
  stars?: number;
  onBackPress?: () => void;
};

export default function QuizHeader({
  current = 1,
  total = 10,
  stars = 125,
  onBackPress,
}: QuizHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        {/* Back Button */}

        <Pressable
          onPress={onBackPress}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel="কুইজ থেকে ফিরে যান"
          style={({ pressed }) => [
            styles.backButton,
            pressed && styles.pressed,
          ]}
        >
          <Ionicons
            name="chevron-back"
            size={22}
            color={colors.text.primary}
          />
        </Pressable>

        {/* Center */}

        <View style={styles.center}>
          <Text style={styles.title}>
            কুইজ
          </Text>

          <Text style={styles.questionText}>
            প্রশ্ন {current} / {total}
          </Text>
        </View>

        {/* Stars */}

        <View style={styles.starBadge}>
          <Text style={styles.star}>
            ⭐
          </Text>

          <Text style={styles.starText}>
            {stars}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',

    paddingHorizontal:
      spacing.base,

    paddingTop: 8,
    paddingBottom: 10,

    backgroundColor:
      colors.background,
  },

  topRow: {
    minHeight: 48,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
    width: 42,
    height: 42,

    borderRadius: radii.round,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#FFFFFF',

    borderWidth: 1,

    borderColor:
      colors.primary[100],
  },

  center: {
    flex: 1,

    alignItems: 'center',

    marginHorizontal: 10,
  },

  title: {
    color: colors.text.primary,

    fontSize: 18,
    lineHeight: 24,

    fontWeight: '900',
  },

  questionText: {
    marginTop: 1,

    color: colors.text.secondary,

    fontSize: 9.5,
    lineHeight: 14,

    fontWeight: '600',
  },

  starBadge: {
    minWidth: 60,
    height: 38,

    paddingHorizontal: 9,

    borderRadius: radii.round,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor:
      colors.primary[50],

    borderWidth: 1,

    borderColor:
      colors.primary[100],
  },

  star: {
    fontSize: 14,
  },

  starText: {
    marginLeft: 4,

    color: colors.text.primary,

    fontSize: 11.5,

    fontWeight: '800',
  },

  pressed: {
    opacity: 0.7,

    transform: [
      {
        scale: 0.96,
      },
    ],
  },
});