import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
    ViewToken,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';
import { spacing } from '@/theme/spacing';

import OnboardingButton from './OnboardingButton';
import OnboardingDots from './OnboardingDots';
import OnboardingSlide from './OnboardingSlide';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: 'welcome',

    image: require('../../../assets/onboarding/onboarding-welcome.png'),

    title: 'আসসালামু আলাইকুম!',

    description:
      'NoorKids-এর সাথে আরবি শেখা হোক আরও সহজ, আনন্দদায়ক ও মজার।',
  },

  {
    id: 'learning',

    image: require('../../../assets/onboarding/onboarding-learning.png'),

    title: 'পড়ি, লিখি ও বলি',

    description:
      'হরফ চিনে, শব্দ শিখে এবং সঠিক উচ্চারণের মাধ্যমে আরবি শেখা আরও সহজ করি।',
  },

  {
    id: 'rewards',

    image: require('../../../assets/onboarding/onboarding-rewards.png'),

    title: 'প্রতিদিন এগিয়ে যান',

    description:
      'প্রতিটি শেখায় অর্জন করুন স্টার, সম্পূর্ণ করুন লক্ষ্য এবং নিজের অগ্রগতি দেখুন।',
  },
];

export default function OnboardingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const flatListRef = useRef<FlatList>(null);

  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === slides.length - 1;

  const goToProfile = () => {
    router.replace('/profile');
  };

  const handleNext = () => {
    if (isLastSlide) {
      goToProfile();
      return;
    }

    flatListRef.current?.scrollToIndex({
      index: currentIndex + 1,
      animated: true,
    });
  };

  const handlePrevious = () => {
    if (isFirstSlide) {
      return;
    }

    flatListRef.current?.scrollToIndex({
      index: currentIndex - 1,
      animated: true,
    });
  };

  const handleSkip = () => {
    goToProfile();
  };

  const handleViewableItemsChanged = useRef(
    ({
      viewableItems,
    }: {
      viewableItems: ViewToken[];
    }) => {
      const visibleItem = viewableItems[0];

      if (
        visibleItem?.index !== null &&
        visibleItem?.index !== undefined
      ) {
        setCurrentIndex(visibleItem.index);
      }
    },
  ).current;

  return (
    <SafeAreaView
      style={styles.container}
      edges={['top', 'bottom']}
    >
      {/* =========================
          TOP BAR
      ========================== */}

      <View style={styles.topBar}>
        {/* Back */}
        <Pressable
          onPress={handlePrevious}
          disabled={isFirstSlide}
          accessibilityRole="button"
          accessibilityLabel="পেছনে যান"
          hitSlop={10}
          style={[
            styles.iconButton,
            isFirstSlide && styles.hiddenButton,
          ]}
        >
          <Ionicons
            name="chevron-back"
            size={21}
            color={colors.text.primary}
          />
        </Pressable>

        {/* Small Logo
            Only Learning + Rewards */}
        {currentIndex !== 0 && (
          <View style={styles.smallBrand}>
            <Image
              source={require('../../../assets/branding/noorkids-logo.png')}
              style={styles.smallLogo}
              resizeMode="contain"
              accessibilityLabel="NoorKids logo"
            />
          </View>
        )}

        {/* Skip */}
        <Pressable
          onPress={handleSkip}
          accessibilityRole="button"
          accessibilityLabel="Onboarding এড়িয়ে যান"
          hitSlop={10}
          style={styles.skipButton}
        >
          <Text style={styles.skipText}>Skip</Text>
        </Pressable>
      </View>

      {/* =========================
          SLIDES
      ========================== */}

      <FlatList
        ref={flatListRef}
        data={slides}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <View style={styles.slideWrapper}>
            <OnboardingSlide
              image={item.image}
              title={item.title}
              description={item.description}
              showLogo={item.id === 'welcome'}
            />
          </View>
        )}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 60,
        }}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />

      {/* =========================
          BOTTOM
      ========================== */}

      <View style={styles.bottomArea}>
        <OnboardingDots
          currentIndex={currentIndex}
          total={slides.length}
        />

        <OnboardingButton
          label={isLastSlide ? 'শুরু করি' : 'পরবর্তী'}
          onPress={handleNext}
          icon="arrow-forward"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.background,
  },

  topBar: {
    height: 58,

    paddingHorizontal: spacing.base,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  iconButton: {
    width: 42,
    height: 42,

    borderRadius: radii.round,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: colors.background,

    borderWidth: 1,
    borderColor: colors.primary[100],
  },

  hiddenButton: {
    opacity: 0,
  },

  smallBrand: {
    position: 'absolute',

    left: 0,
    right: 0,

    alignItems: 'center',
    justifyContent: 'center',

    pointerEvents: 'none',
  },

  smallLogo: {
    width: 88,
    height: 40,
  },

  skipButton: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
  },

  skipText: {
    color: colors.primary[500],

    fontSize: 14,
    fontWeight: '700',
  },

  slideWrapper: {
    width,

    flex: 1,
  },

  bottomArea: {
    paddingHorizontal: spacing.base,
    paddingBottom: spacing.lg,

    gap: spacing.lg,
  },
});