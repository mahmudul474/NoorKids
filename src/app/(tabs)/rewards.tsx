import { router } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import RewardsHeader from '@/components/rewards/RewardsHeader';
import RewardsSection from '@/components/rewards/RewardsSection';
import RewardStats from '@/components/rewards/RewardStats';
import StarsBalanceCard from '@/components/rewards/StarsBalanceCard';

import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

export default function RewardsScreen() {
  // ==========================================
  // TEMPORARY DATA
  // Firebase will replace this later.
  // ==========================================

  const stars = 155;
  const todayEarned = 30;

  const streak = 3;
  const achievements = 8;
  const lessons = 12;

  const nextReward = 200;

  // ==========================================
  // BACK
  // ==========================================

  const handleBackPress = () => {
    router.back();
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

        <RewardsHeader
          stars={stars}
          onBackPress={
            handleBackPress
          }
        />

        <View style={styles.content}>
          {/* =================================
              STARS BALANCE
          ================================= */}

          <StarsBalanceCard
            stars={stars}
            todayEarned={
              todayEarned
            }
            nextReward={
              nextReward
            }
          />

          {/* =================================
              STATS
          ================================= */}

          <RewardStats
            streak={streak}
            achievements={
              achievements
            }
            lessons={lessons}
          />

          {/* =================================
              REWARDS
          ================================= */}

          <RewardsSection
            title="তোমার পুরস্কার"
            showLocked
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