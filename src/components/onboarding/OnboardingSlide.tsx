import { Image, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

type OnboardingSlideProps = {
  image: any;
  title: string;
  description: string;
  showLogo?: boolean;
};

export default function OnboardingSlide({
  image,
  title,
  description,
  showLogo = false,
}: OnboardingSlideProps) {
  return (
    <View style={styles.container}>
      {/* Full NoorKids Logo - Welcome Screen */}
      {showLogo && (
        <View style={styles.logoWrapper}>
          <Image
            source={require('../../../assets/branding/noorkids-logo.png')}
            style={styles.logo}
            resizeMode="contain"
            accessibilityLabel="NoorKids logo"
          />
        </View>
      )}

      {/* Illustration */}
      <View
        style={[
          styles.imageArea,
          showLogo && styles.imageAreaWithLogo,
        ]}
      >
        <Image
          source={image}
          style={styles.image}
          resizeMode="contain"
          accessibilityIgnoresInvertColors
        />
      </View>

      {/* Text Content */}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.base,
  },

  logoWrapper: {
    width: '100%',
    height: 88,

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 2,
  },

  logo: {
    width: 190,
    height: 80,
  },

  imageArea: {
    flex: 1,
    width: '100%',

    alignItems: 'center',
    justifyContent: 'center',

    minHeight: 300,
  },

  imageAreaWithLogo: {
    marginTop: -4,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  content: {
    width: '100%',

    alignItems: 'center',

    paddingHorizontal: spacing.sm,
    paddingBottom: spacing.md,
  },

  title: {
    color: colors.text.primary,

    fontSize: 28,
    lineHeight: 36,

    fontWeight: '800',

    textAlign: 'center',
  },

  description: {
    marginTop: spacing.md,

    maxWidth: 340,

    color: colors.text.secondary,

    fontSize: 16,
    lineHeight: 25,

    fontWeight: '500',

    textAlign: 'center',
  },
});