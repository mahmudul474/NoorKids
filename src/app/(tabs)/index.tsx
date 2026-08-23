 import { router } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AchievementSummary from '@/components/home/AchievementSummary';
import DailyGoalCard from '@/components/home/DailyGoalCard';
import HomeHeader from '@/components/home/HomeHeader';
import LearningCategories from '@/components/home/LearningCategories';
import RecentAchievements from '@/components/home/RecentAchievements';

import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

export default function HomeScreen() {
  // ==========================================
  // TEMPORARY MOCK DATA
  // Firebase will replace these later.
  // ==========================================

  const childName = 'আরমান';

  const stars = 125;

  const completedLessons = 3;

  const totalLessons = 5;

  const streak = 3;

  const achievements = 8;

  const lessonsCompleted = 12;

  // ==========================================
  // PROFILE
  // ==========================================

  const handleProfilePress = () => {
    router.push('/profile');
  };

  // ==========================================
  // NOTIFICATIONS
  // ==========================================

  const handleNotificationPress = () => {
    console.log('Notifications pressed');
  };

  // ==========================================
  // CONTINUE LEARNING
  // ==========================================

  const handleContinueLearning = () => {
    router.push('/(tabs)/learn');
  };

  // ==========================================
  // LEARNING CATEGORIES
  // ==========================================

  const handleCategoryPress = (
    categoryId: string,
  ) => {
    switch (categoryId) {
      case 'letters':
        router.push('/(tabs)/learn');
        break;

      case 'words':
        router.push('/(tabs)/learn');
        break;

      case 'pronunciation':
        router.push('/(tabs)/learn');
        break;

      case 'quiz':
        router.push('/(tabs)/quiz');
        break;

      case 'all':
        router.push('/(tabs)/learn');
        break;

      default:
        break;
    }
  };

  // ==========================================
  // REWARDS
  // ==========================================

  const handleRewardsPress = () => {
    router.push('/(tabs)/rewards');
  };

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={['top']}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={
          styles.contentContainer
        }
        showsVerticalScrollIndicator={false}
        bounces
      >
        {/* =====================================
            HEADER
        ====================================== */}

        <HomeHeader
          childName={childName}
          stars={stars}
          onProfilePress={
            handleProfilePress
          }
          onNotificationPress={
            handleNotificationPress
          }
        />

        {/* =====================================
            MAIN CONTENT
        ====================================== */}

        <View style={styles.mainContent}>
          {/* =================================
              DAILY GOAL
          ================================= */}

          <DailyGoalCard
            completedLessons={
              completedLessons
            }
            totalLessons={totalLessons}
            stars={stars}
            streak={streak}
            onContinue={
              handleContinueLearning
            }
          />

          {/* =================================
              LEARNING CATEGORIES
          ================================= */}

          <LearningCategories
            onCategoryPress={
              handleCategoryPress
            }
          />

          {/* =================================
              ACHIEVEMENT SUMMARY
          ================================= */}

          <AchievementSummary
            stars={stars}
            streak={streak}
            achievements={
              achievements
            }
            lessonsCompleted={
              lessonsCompleted
            }
          />

          {/* =================================
              RECENT ACHIEVEMENTS
          ================================= */}

          <RecentAchievements
            onSeeAll={
              handleRewardsPress
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,

    backgroundColor:
      colors.background,
  },

  scrollView: {
    flex: 1,

    backgroundColor:
      colors.background,
  },

  contentContainer: {
    paddingBottom:
      spacing.xl,
  },

  mainContent: {
    width: '100%',

    paddingHorizontal:
      spacing.base,
  },
});