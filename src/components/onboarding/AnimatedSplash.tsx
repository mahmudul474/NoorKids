import { router } from 'expo-router';
import { useEffect, useRef } from 'react';
import {
    Animated,
    Easing,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

const SPLASH_DURATION = 4000;

export default function AnimatedSplash() {
  const logoScale = useRef(new Animated.Value(0.72)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;

  const subtitleOpacity = useRef(
    new Animated.Value(0),
  ).current;

  const glowScale = useRef(
    new Animated.Value(0.7),
  ).current;

  const glowOpacity = useRef(
    new Animated.Value(0),
  ).current;

  const progress = useRef(
    new Animated.Value(0),
  ).current;

  useEffect(() => {
    // --------------------------------
    // Logo + Glow Animation
    // --------------------------------

    Animated.parallel([
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 850,
        easing: Easing.out(Easing.back(1.15)),
        useNativeDriver: true,
      }),

      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 650,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),

      Animated.timing(glowScale, {
        toValue: 1,
        duration: 1000,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),

      Animated.timing(glowOpacity, {
        toValue: 0.75,
        duration: 700,
        useNativeDriver: true,
      }),

      Animated.timing(subtitleOpacity, {
        toValue: 1,
        duration: 650,
        delay: 450,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();

    // --------------------------------
    // 4 Second Progress
    // --------------------------------

    Animated.timing(progress, {
      toValue: 1,
      duration: SPLASH_DURATION,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();

    // --------------------------------
    // Navigate after 4 seconds
    // --------------------------------

    const timer = setTimeout(() => {
      router.replace('/onboarding');
    }, SPLASH_DURATION);

    return () => {
      clearTimeout(timer);
    };
  }, [
    logoScale,
    logoOpacity,
    subtitleOpacity,
    glowScale,
    glowOpacity,
    progress,
  ]);

  return (
    <SafeAreaView
      style={styles.container}
      edges={['top', 'bottom']}
    >
      <View style={styles.content}>
        {/* Soft Glow */}
        <Animated.View
          style={[
            styles.glow,
            {
              opacity: glowOpacity,
              transform: [
                {
                  scale: glowScale,
                },
              ],
            },
          ]}
        />

        {/* NoorKids Full Logo */}
        <Animated.View
          style={[
            styles.logoWrapper,
            {
              opacity: logoOpacity,
              transform: [
                {
                  scale: logoScale,
                },
              ],
            },
          ]}
        >
          <Image
            source={require('../../../assets/branding/noorkids-logo.png')}
            style={styles.logo}
            resizeMode="contain"
            accessibilityLabel="NoorKids logo"
          />
        </Animated.View>

        {/* Tagline */}
        <Animated.View
          style={[
            styles.subtitleWrapper,
            {
              opacity: subtitleOpacity,
            },
          ]}
        >
          <Text style={styles.subtitle}>
            আরবি শিখি আনন্দে
          </Text>
        </Animated.View>

        {/* Progress */}
        <View style={styles.progressArea}>
          <View style={styles.progressTrack}>
            <Animated.View
              style={[
                styles.progressBar,
                {
                  width: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0%', '100%'],
                  }),
                },
              ]}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: spacing.base,
  },

  glow: {
    position: 'absolute',

    width: 310,
    height: 310,

    borderRadius: 155,

    backgroundColor: colors.primary[100],
  },

  logoWrapper: {
    width: 300,
    height: 300,

    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 285,
    height: 285,
  },

  subtitleWrapper: {
    marginTop: -18,

    alignItems: 'center',
  },

  subtitle: {
    color: colors.text.secondary,

    fontSize: 17,
    lineHeight: 26,

    fontWeight: '600',

    textAlign: 'center',

    letterSpacing: 0.2,
  },

  progressArea: {
    position: 'absolute',

    bottom: 64,

    alignItems: 'center',
  },

  progressTrack: {
    width: 92,
    height: 6,

    overflow: 'hidden',

    borderRadius: 999,

    backgroundColor: colors.primary[100],
  },

  progressBar: {
    height: 6,

    borderRadius: 999,

    backgroundColor: colors.primary[500],
  },
});