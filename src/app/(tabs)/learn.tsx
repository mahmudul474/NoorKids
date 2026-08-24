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
  // TEMPORARY DATA
  // ==========================================

  const stars = 125;
  const completedLetters = 6;
  const totalLetters = 29;
  const streak = 3;
  const lessonsCompleted = 12;

  // ==========================================
  // BACK
  // ==========================================

  const handleBackPress = () => {
    router.back();
  };

  // ==========================================
  // OPEN LESSON
  // ==========================================

  const openLesson = (lessonNumber: number) => {
    router.push({
      pathname: '/lesson/[id]',
      params: {
        id: String(lessonNumber),
      },
    });
  };

  // ==========================================
  // ARABIC PROGRESS
  // ==========================================

  const handleContinueArabic = () => {
    openLesson(7);
  };

  // ==========================================
  // CATEGORY
  // ==========================================

  const handleCategoryPress = (
    categoryId: string,
  ) => {
    if (categoryId === 'letters') {
      openLesson(7);
      return;
    }

    // Other categories will be connected later.
  };

  // ==========================================
  // TODAY LESSON
  // ==========================================

  const handleStartLesson = () => {
    openLesson(7);
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
            CONTENT
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
              CATEGORIES
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
              PROGRESS
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
    paddingBottom: spacing.xl,
  },

  content: {
    width: '100%',

    paddingHorizontal:
      spacing.base,
  },
});
