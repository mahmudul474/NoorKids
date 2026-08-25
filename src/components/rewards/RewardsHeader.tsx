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

type RewardsHeaderProps = {
  stars?: number;
  onBackPress?: () => void;
};

export default function RewardsHeader({
  stars = 155,
  onBackPress,
}: RewardsHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        {/* Back */}

        <Pressable
          onPress={onBackPress}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel="ফিরে যান"
          style={({ pressed }) => [
            styles.backButton,
            pressed && styles.pressed,
          ]}
        >
          <Ionicons
            name="chevron-back"
            size={21}
            color={colors.text.primary}
          />
        </Pressable>

        {/* Title */}

        <View style={styles.titleArea}>
          <Text style={styles.title}>
            পুরস্কার
          </Text>

          <Text style={styles.subtitle}>
            তোমার অর্জনগুলো দেখো 🌟
          </Text>
        </View>

        {/* Stars */}

        <View style={styles.starsBadge}>
          <Text style={styles.star}>
            ⭐
          </Text>

          <Text style={styles.starsText}>
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
    paddingBottom: 12,

    backgroundColor:
      colors.background,
  },

  topRow: {
    minHeight: 50,

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

  titleArea: {
    flex: 1,

    alignItems: 'center',

    marginHorizontal: 8,
  },

  title: {
    color: colors.text.primary,

    fontSize: 20,
    lineHeight: 27,

    fontWeight: '900',

    textAlign: 'center',
  },

  subtitle: {
    marginTop: 1,

    color: colors.text.secondary,

    fontSize: 9.5,
    lineHeight: 15,

    fontWeight: '600',

    textAlign: 'center',
  },

  starsBadge: {
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

  starsText: {
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