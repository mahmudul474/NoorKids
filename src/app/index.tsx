 import { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';
import { spacing } from '@/theme/spacing';

export default function SplashScreen() {
  const logoScale = useRef(new Animated.Value(0.8)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const subtitleOpacity = useRef(new Animated.Value(0)).current;
  const glowScale = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 700,
        easing: Easing.out(Easing.back(1.4)),
        useNativeDriver: true,
      }),

      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),

      Animated.timing(glowScale, {
        toValue: 1,
        duration: 900,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();

    Animated.timing(subtitleOpacity, {
      toValue: 1,
      duration: 600,
      delay: 500,
      useNativeDriver: true,
    }).start();
  }, [
    logoScale,
    logoOpacity,
    subtitleOpacity,
    glowScale,
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Animated.View
          style={[
            styles.glow,
            {
              opacity: logoOpacity,
              transform: [{ scale: glowScale }],
            },
          ]}
        />

        <Animated.View
          style={[
            styles.logoContainer,
            {
              opacity: logoOpacity,
              transform: [{ scale: logoScale }],
            },
          ]}
        >
          <View style={styles.letterCircle}>
            <Text style={styles.arabicLetter}>ن</Text>
          </View>

          <Text style={styles.logoText}>NoorKids</Text>
        </Animated.View>

        <Animated.View style={{ opacity: subtitleOpacity }}>
          <Text style={styles.subtitle}>আরবি শিখি আনন্দে</Text>
        </Animated.View>

        <View style={styles.dots}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
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
    width: 210,
    height: 210,
    borderRadius: radii.round,
    backgroundColor: colors.primary[100],
  },

  logoContainer: {
    alignItems: 'center',
  },

  letterCircle: {
    width: 112,
    height: 112,
    borderRadius: radii.round,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary[500],

    shadowColor: colors.primary[500],
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 8,
  },

  arabicLetter: {
    color: colors.text.inverse,
    fontSize: 64,
    fontWeight: '700',
    includeFontPadding: false,
  },

  logoText: {
    marginTop: spacing.lg,
    color: colors.text.primary,
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: -0.5,
  },

  subtitle: {
    marginTop: spacing.sm,
    color: colors.text.secondary,
    fontSize: 16,
    fontWeight: '500',
  },

  dots: {
    position: 'absolute',
    bottom: spacing.huge,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: radii.round,
    backgroundColor: colors.primary[100],
  },

  activeDot: {
    width: 20,
    backgroundColor: colors.primary[500],
  },
});