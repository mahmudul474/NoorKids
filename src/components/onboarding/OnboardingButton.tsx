import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text } from 'react-native';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';
import { spacing } from '@/theme/spacing';

type OnboardingButtonProps = {
  label: string;
  onPress: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
};

export default function OnboardingButton({
  label,
  onPress,
  icon = 'arrow-forward',
}: OnboardingButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.label}>{label}</Text>

      <Pressable
        pointerEvents="none"
        style={styles.iconContainer}
      >
        <Ionicons
          name={icon}
          size={21}
          color={colors.primary[500]}
        />
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    minHeight: 58,

    borderRadius: radii.round,

    backgroundColor: colors.primary[500],

    paddingLeft: spacing.lg,
    paddingRight: spacing.sm,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: colors.primary[500],
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.22,
    shadowRadius: 14,

    elevation: 6,
  },

  pressed: {
    opacity: 0.9,
    transform: [
      {
        scale: 0.985,
      },
    ],
  },

  label: {
    flex: 1,

    marginLeft: 42,

    color: colors.text.inverse,

    fontSize: 16,
    fontWeight: '800',

    textAlign: 'center',
  },

  iconContainer: {
    width: 42,
    height: 42,

    borderRadius: radii.round,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: colors.background,
  },
});