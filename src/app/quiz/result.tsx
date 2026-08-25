import { router, useLocalSearchParams } from 'expo-router';
import {
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ResultActions from '@/components/quiz/result/ResultActions';
import ResultHeader from '@/components/quiz/result/ResultHeader';
import ResultStats from '@/components/quiz/result/ResultStats';
import ScoreCard from '@/components/quiz/result/ScoreCard';

import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

export default function QuizResultScreen() {
  const params = useLocalSearchParams<{
    score?: string;
    total?: string;
  }>();

  // ==========================================
  // TEMPORARY RESULT DATA
  // Firebase will replace this later.
  // ==========================================

  const score = Number(params.score) || 8;
  const total = Number(params.total) || 10;

  const wrong = Math.max(
    total - score,
    0,
  );

  const accuracy =
    total > 0
      ? Math.round(
          (score / total) * 100,
        )
      : 0;

  const starsEarned = score * 5;

  // ==========================================
  // RETRY
  // ==========================================

  const handleRetry = () => {
    router.replace({
      pathname: '/quiz/[id]',
      params: {
        id: '1',
      },
    });
  };

  // ==========================================
  // LEARN
  // ==========================================

  const handleLearn = () => {
    router.replace('/(tabs)/learn');
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
        <View style={styles.content}>
          {/* =================================
              HEADER
          ================================= */}

          <ResultHeader
            score={score}
            total={total}
          />

          {/* =================================
              SCORE
          ================================= */}

          <ScoreCard
            score={score}
            total={total}
            starsEarned={
              starsEarned
            }
          />

          {/* =================================
              STATS
          ================================= */}

          <ResultStats
            correct={score}
            wrong={wrong}
            accuracy={accuracy}
          />

          {/* =================================
              ACTIONS
          ================================= */}

          <ResultActions
            onRetry={handleRetry}
            onLearn={handleLearn}
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