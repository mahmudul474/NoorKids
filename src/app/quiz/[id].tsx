import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
    Alert,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AnswerOption from '@/components/quiz/AnswerOption';
import QuestionCard from '@/components/quiz/QuestionCard';
import QuizHeader from '@/components/quiz/QuizHeader';
import QuizNavigation from '@/components/quiz/QuizNavigation';
import QuizProgress from '@/components/quiz/QuizProgress';

import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

type Answer = {
  id: string;
  label: string;
  answer: string;
  correct: boolean;
};

export default function QuizScreen() {
  const params = useLocalSearchParams<{
    id?: string;
  }>();

  // ==========================================
  // QUESTION
  // ==========================================

  const questionId = Number(params.id) || 1;

  const currentQuestion = Math.max(
    1,
    Math.min(questionId, 10),
  );

  const totalQuestions = 10;

  // ==========================================
  // TEMPORARY QUESTION DATA
  // ==========================================

  const question = 'এই হরফটির নাম কী?';

  const arabicLetter = 'ب';

  const instruction =
    'সঠিক উত্তরটি নির্বাচন করো';

  const answers: Answer[] = [
    {
      id: 'a',
      label: 'A',
      answer: 'আলিফ',
      correct: false,
    },
    {
      id: 'b',
      label: 'B',
      answer: 'বা',
      correct: true,
    },
    {
      id: 'c',
      label: 'C',
      answer: 'তা',
      correct: false,
    },
    {
      id: 'd',
      label: 'D',
      answer: 'জীম',
      correct: false,
    },
  ];

  // ==========================================
  // STATE
  // ==========================================

  const [selectedAnswerId, setSelectedAnswerId] =
    useState<string | null>(null);

  const [answerSubmitted, setAnswerSubmitted] =
    useState(false);

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
      `এখানে "${arabicLetter}" হরফের অডিও চলবে।`,
    );
  };

  // ==========================================
  // ANSWER SELECT
  // ==========================================

  const handleAnswerPress = (
    answerId: string,
  ) => {
    // একবার answer submit হলে
    // আবার অন্য answer select করতে পারবে না।

    if (answerSubmitted) {
      return;
    }

    setSelectedAnswerId(answerId);
    setAnswerSubmitted(true);
  };

  // ==========================================
  // ANSWER STATE
  // ==========================================

  const getAnswerState = (
    answer: Answer,
  ) => {
    // কিছু select করা হয়নি
    if (!selectedAnswerId) {
      return 'default' as const;
    }

    // Correct answer সবসময় green দেখাবে
    if (answer.correct) {
      return 'correct' as const;
    }

    // User যেটা select করেছে
    // সেটা ভুল হলে red হবে
    if (
      answer.id === selectedAnswerId &&
      !answer.correct
    ) {
      return 'wrong' as const;
    }

    return 'default' as const;
  };

  // ==========================================
  // NEXT QUESTION
  // ==========================================

  const handleNext = () => {
    if (!selectedAnswerId) {
      return;
    }

    // Last question
    if (
      currentQuestion >=
      totalQuestions
    ) {
      Alert.alert(
        'কুইজ সম্পন্ন! 🎉',
        'অসাধারণ! তুমি এই কুইজটি শেষ করেছো।',
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

    // Next question
    router.replace({
      pathname: '/quiz/[id]',
      params: {
        id: String(
          currentQuestion + 1,
        ),
      },
    });
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

        <QuizHeader
          current={currentQuestion}
          total={totalQuestions}
          stars={125}
          onBackPress={
            handleBackPress
          }
        />

        {/* =====================================
            CONTENT
        ====================================== */}

        <View style={styles.content}>
          {/* =================================
              PROGRESS
          ================================= */}

          <QuizProgress
            current={currentQuestion}
            total={totalQuestions}
          />

          {/* =================================
              QUESTION
          ================================= */}

          <QuestionCard
            question={question}
            arabicLetter={arabicLetter}
            instruction={instruction}
            onPlayAudio={
              handlePlayAudio
            }
          />

          {/* =================================
              ANSWERS
          ================================= */}

          <View style={styles.answers}>
            {answers.map((answer) => (
              <AnswerOption
                key={answer.id}
                label={answer.label}
                answer={answer.answer}
                state={getAnswerState(
                  answer,
                )}
                onPress={() =>
                  handleAnswerPress(
                    answer.id,
                  )
                }
              />
            ))}
          </View>

          {/* =================================
              NAVIGATION
          ================================= */}

          <QuizNavigation
            current={currentQuestion}
            total={totalQuestions}
            hasSelectedAnswer={
              Boolean(
                selectedAnswerId,
              )
            }
            onNext={handleNext}
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

  answers: {
    width: '100%',

    marginTop: spacing.md,
  },
});