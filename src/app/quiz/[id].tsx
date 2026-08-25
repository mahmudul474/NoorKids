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
    score?: string;
  }>();

  // ==========================================
  // CURRENT QUESTION
  // ==========================================

  const questionId = Number(params.id) || 1;

  const currentQuestion = Math.max(
    1,
    Math.min(questionId, 10),
  );

  const totalQuestions = 10;

  // ==========================================
  // PREVIOUS SCORE
  // ==========================================

  const previousScore =
    Number(params.score) || 0;

  // ==========================================
  // QUESTION DATA
  // TEMPORARY
  // Firebase will replace this later.
  // ==========================================

  const questions: Record<
    number,
    {
      question: string;
      letter: string;
      instruction: string;
      answers: Answer[];
    }
  > = {
    1: {
      question:
        'এই হরফটির নাম কী?',
      letter: 'ب',
      instruction:
        'সঠিক উত্তরটি নির্বাচন করো',
      answers: [
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
      ],
    },

    2: {
      question:
        'এই হরফটির নাম কী?',
      letter: 'ت',
      instruction:
        'সঠিক উত্তরটি নির্বাচন করো',
      answers: [
        {
          id: 'a',
          label: 'A',
          answer: 'তা',
          correct: true,
        },
        {
          id: 'b',
          label: 'B',
          answer: 'বা',
          correct: false,
        },
        {
          id: 'c',
          label: 'C',
          answer: 'জীম',
          correct: false,
        },
        {
          id: 'd',
          label: 'D',
          answer: 'দাল',
          correct: false,
        },
      ],
    },

    3: {
      question:
        'এই হরফটির নাম কী?',
      letter: 'ث',
      instruction:
        'সঠিক উত্তরটি নির্বাচন করো',
      answers: [
        {
          id: 'a',
          label: 'A',
          answer: 'বা',
          correct: false,
        },
        {
          id: 'b',
          label: 'B',
          answer: 'সা',
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
          answer: 'হা',
          correct: false,
        },
      ],
    },

    4: {
      question:
        'এই হরফটির নাম কী?',
      letter: 'ج',
      instruction:
        'সঠিক উত্তরটি নির্বাচন করো',
      answers: [
        {
          id: 'a',
          label: 'A',
          answer: 'জীম',
          correct: true,
        },
        {
          id: 'b',
          label: 'B',
          answer: 'বা',
          correct: false,
        },
        {
          id: 'c',
          label: 'C',
          answer: 'খা',
          correct: false,
        },
        {
          id: 'd',
          label: 'D',
          answer: 'দাল',
          correct: false,
        },
      ],
    },

    5: {
      question:
        'এই হরফটির নাম কী?',
      letter: 'ح',
      instruction:
        'সঠিক উত্তরটি নির্বাচন করো',
      answers: [
        {
          id: 'a',
          label: 'A',
          answer: 'হা',
          correct: true,
        },
        {
          id: 'b',
          label: 'B',
          answer: 'জীম',
          correct: false,
        },
        {
          id: 'c',
          label: 'C',
          answer: 'খা',
          correct: false,
        },
        {
          id: 'd',
          label: 'D',
          answer: 'দাল',
          correct: false,
        },
      ],
    },

    6: {
      question:
        'এই হরফটির নাম কী?',
      letter: 'خ',
      instruction:
        'সঠিক উত্তরটি নির্বাচন করো',
      answers: [
        {
          id: 'a',
          label: 'A',
          answer: 'হা',
          correct: false,
        },
        {
          id: 'b',
          label: 'B',
          answer: 'খা',
          correct: true,
        },
        {
          id: 'c',
          label: 'C',
          answer: 'জীম',
          correct: false,
        },
        {
          id: 'd',
          label: 'D',
          answer: 'বা',
          correct: false,
        },
      ],
    },

    7: {
      question:
        'এই হরফটির নাম কী?',
      letter: 'د',
      instruction:
        'সঠিক উত্তরটি নির্বাচন করো',
      answers: [
        {
          id: 'a',
          label: 'A',
          answer: 'দাল',
          correct: true,
        },
        {
          id: 'b',
          label: 'B',
          answer: 'যা',
          correct: false,
        },
        {
          id: 'c',
          label: 'C',
          answer: 'র',
          correct: false,
        },
        {
          id: 'd',
          label: 'D',
          answer: 'বা',
          correct: false,
        },
      ],
    },

    8: {
      question:
        'এই হরফটির নাম কী?',
      letter: 'ذ',
      instruction:
        'সঠিক উত্তরটি নির্বাচন করো',
      answers: [
        {
          id: 'a',
          label: 'A',
          answer: 'দাল',
          correct: false,
        },
        {
          id: 'b',
          label: 'B',
          answer: 'যাল',
          correct: true,
        },
        {
          id: 'c',
          label: 'C',
          answer: 'রা',
          correct: false,
        },
        {
          id: 'd',
          label: 'D',
          answer: 'জীম',
          correct: false,
        },
      ],
    },

    9: {
      question:
        'এই হরফটির নাম কী?',
      letter: 'ر',
      instruction:
        'সঠিক উত্তরটি নির্বাচন করো',
      answers: [
        {
          id: 'a',
          label: 'A',
          answer: 'যাল',
          correct: false,
        },
        {
          id: 'b',
          label: 'B',
          answer: 'রা',
          correct: true,
        },
        {
          id: 'c',
          label: 'C',
          answer: 'দাল',
          correct: false,
        },
        {
          id: 'd',
          label: 'D',
          answer: 'যা',
          correct: false,
        },
      ],
    },

    10: {
      question:
        'এই হরফটির নাম কী?',
      letter: 'ز',
      instruction:
        'সঠিক উত্তরটি নির্বাচন করো',
      answers: [
        {
          id: 'a',
          label: 'A',
          answer: 'রা',
          correct: false,
        },
        {
          id: 'b',
          label: 'B',
          answer: 'যা',
          correct: true,
        },
        {
          id: 'c',
          label: 'C',
          answer: 'সীন',
          correct: false,
        },
        {
          id: 'd',
          label: 'D',
          answer: 'শীন',
          correct: false,
        },
      ],
    },
  };

  const currentData =
    questions[currentQuestion];

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
      `এখানে "${currentData.letter}" হরফের অডিও চলবে।`,
    );
  };

  // ==========================================
  // SELECT ANSWER
  // ==========================================

  const handleAnswerPress = (
    answerId: string,
  ) => {
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
    if (!selectedAnswerId) {
      return 'default' as const;
    }

    if (answer.correct) {
      return 'correct' as const;
    }

    if (
      answer.id === selectedAnswerId &&
      !answer.correct
    ) {
      return 'wrong' as const;
    }

    return 'default' as const;
  };

  // ==========================================
  // NEXT
  // ==========================================

  const handleNext = () => {
    if (!selectedAnswerId) {
      return;
    }

    const selectedAnswer =
      currentData.answers.find(
        (answer) =>
          answer.id ===
          selectedAnswerId,
      );

    const isCorrect =
      selectedAnswer?.correct === true;

    const newScore =
      previousScore +
      (isCorrect ? 1 : 0);

    // ========================================
    // FINISH QUIZ
    // ========================================

    if (
      currentQuestion >=
      totalQuestions
    ) {
      router.replace({
        pathname: '/quiz/result',
        params: {
          score: String(newScore),
          total: String(
            totalQuestions,
          ),
        },
      });

      return;
    }

    // ========================================
    // NEXT QUESTION
    // ========================================

    router.replace({
      pathname: '/quiz/[id]',
      params: {
        id: String(
          currentQuestion + 1,
        ),
        score: String(newScore),
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
            question={
              currentData.question
            }
            arabicLetter={
              currentData.letter
            }
            instruction={
              currentData.instruction
            }
            onPlayAudio={
              handlePlayAudio
            }
          />

          {/* =================================
              ANSWERS
          ================================= */}

          <View style={styles.answers}>
            {currentData.answers.map(
              (answer) => (
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
              ),
            )}
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