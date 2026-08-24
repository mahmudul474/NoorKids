import { router } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ArabicProgressCard from '@/components/learn/ArabicProgressCard';
import LearnHeader from '@/components/learn/LearnHeader';
import LearningCategories from '@/components/learn/LearningCategories';
import LearnProgressSummary from '@/components/learn/LearnProgressSummary';
import TodayLessonCard from '@/components/learn/TodayLessonCard';

import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

export default function LearnScreen() {
  // ==========================================
  // TEMPORARY MOCK DATA
  // Firebase will replace these later.
  // ==========================================

  const stars = 125;

  const completedLetters = 6;

  const totalLetters = 29;

  const streak = 3;

  const lessonsCompleted = 12;

  // ==========================================
  // HEADER
  // ==========================================

  const handleBackPress = () => {
    router.back();
  };

  // ==========================================
  // CONTINUE ARABIC
  // ==========================================

  const handleContinueArabic = () => {
    console.log(
      'Continue Arabic learning',
    );

    // Later:
    // router.push('/lesson/arabic');
  };

  // ==========================================
  // CATEGORY
  // ==========================================

  const handleCategoryPress = (
    categoryId: string,
  ) => {
    console.log(
      'Learning category:',
      categoryId,
    );

    // Later these will navigate to
    // their dedicated learning screens.
  };

  // ==========================================
  // TODAY'S LESSON
  // ==========================================

  const handleStartLesson = () => {
    console.log(
      'Start lesson',
    );

    // Later:
    // router.push('/lesson/7');
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

        <LearnHeader
          stars={stars}
          onBackPress={
            handleBackPress
          }
        />

        {/* =====================================
            MAIN CONTENT
        ====================================== */}

        <View style={styles.content}>
          {/* =================================
              ARABIC PROGRESS
          ================================= */}

          <ArabicProgressCard
            completed={
              completedLetters
            }
            total={totalLetters}
            onContinue={
              handleContinueArabic
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
              TODAY'S LESSON
          ================================= */}

          <TodayLessonCard
            lessonNumber={7}
            letter="ب"
            letterName="বা"
            pronunciation="/b/"
            onStart={
              handleStartLesson
            }
          />

          {/* =================================
              PROGRESS SUMMARY
          ================================= */}

          <LearnProgressSummary
            stars={stars}
            streak={streak}
            lessonsCompleted={
              lessonsCompleted
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

  content: {
    width: '100%',

    paddingHorizontal:
      spacing.base,
  },
});