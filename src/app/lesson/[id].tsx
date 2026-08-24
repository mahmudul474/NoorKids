import { router, useLocalSearchParams } from 'expo-router';
import {
    Alert,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AudioPractice from '@/components/lesson/AudioPractice';
import LessonHeader from '@/components/lesson/LessonHeader';
import LessonNavigation from '@/components/lesson/LessonNavigation';
import LetterDisplay from '@/components/lesson/LetterDisplay';
import LetterExamples from '@/components/lesson/LetterExamples';

import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

export default function LessonScreen() {
  const params = useLocalSearchParams<{
    id?: string;
  }>();

  // ==========================================
  // CURRENT LESSON
  // ==========================================

  const lessonId = Number(params.id) || 7;

  const currentLesson = Math.max(
    1,
    Math.min(lessonId, 29),
  );

  const totalLessons = 29;

  // ==========================================
  // TEMPORARY LESSON DATA
  // Firebase will replace this later.
  // ==========================================

  const letter = 'ب';

  const letterName = 'বা';

  const pronunciation = '/b/';

  const stars = 125;

  // ==========================================
  // NAVIGATE TO LESSON
  // ==========================================

  const navigateToLesson = (
    lessonNumber: number,
  ) => {
    router.replace({
      pathname: '/lesson/[id]',
      params: {
        id: String(lessonNumber),
      },
    });
  };

  // ==========================================
  // BACK
  // ==========================================

  const handleBackPress = () => {
    router.back();
  };

  // ==========================================
  // AUDIO
  // ==========================================

  const handlePlayAudio = () => {
    Alert.alert(
      'উচ্চারণ',
      `এখানে "${letter}" হরফের অডিও চলবে।`,
    );
  };

  const handleRecord = () => {
    Alert.alert(
      'উচ্চারণ অনুশীলন',
      'এখানে microphone practice চালু হবে।',
    );
  };

  // ==========================================
  // PREVIOUS
  // ==========================================

  const handlePrevious = () => {
    if (currentLesson <= 1) {
      return;
    }

    navigateToLesson(
      currentLesson - 1,
    );
  };

  // ==========================================
  // NEXT
  // ==========================================

  const handleNext = () => {
    if (currentLesson >= totalLessons) {
      Alert.alert(
        'অভিনন্দন! 🎉',
        'তুমি সবগুলো হরফ সম্পন্ন করেছো।',
        [
          {
            text: 'ঠিক আছে',
            onPress: () => {
              router.back();
            },
          },
        ],
      );

      return;
    }

    navigateToLesson(
      currentLesson + 1,
    );
  };

  // ==========================================
  // UI
  // ==========================================

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

        <LessonHeader
          current={currentLesson}
          total={totalLessons}
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
              LETTER
          ================================= */}

          <LetterDisplay
            letter={letter}
            name={letterName}
            pronunciation={
              pronunciation
            }
            onPlay={
              handlePlayAudio
            }
          />

          {/* =================================
              AUDIO PRACTICE
          ================================= */}

          <AudioPractice
            onPlay={
              handlePlayAudio
            }
            onRecord={
              handleRecord
            }
          />

          {/* =================================
              LETTER EXAMPLES
          ================================= */}

          <LetterExamples
            letter={letter}
          />

          {/* =================================
              NAVIGATION
          ================================= */}

          <LessonNavigation
            current={currentLesson}
            total={totalLessons}
            onPrevious={
              handlePrevious
            }
            onNext={
              handleNext
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
    paddingBottom: 20,
  },

  content: {
    width: '100%',

    paddingHorizontal:
      spacing.base,
  },
});