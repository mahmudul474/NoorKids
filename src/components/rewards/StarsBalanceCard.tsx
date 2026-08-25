import { Ionicons } from '@expo/vector-icons';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';
import { spacing } from '@/theme/spacing';

type StarsBalanceCardProps = {
  stars?: number;
  todayEarned?: number;
  nextReward?: number;
};

export default function StarsBalanceCard({
  stars = 155,
  todayEarned = 30,
  nextReward = 200,
}: StarsBalanceCardProps) {
  const progress =
    nextReward > 0
      ? Math.min(stars / nextReward, 1)
      : 0;

  const progressPercent =
    Math.round(progress * 100);

  const remaining = Math.max(
    nextReward - stars,
    0,
  );

  return (
    <View style={styles.container}>
      {/* =====================================
          TOP
      ====================================== */}

      <View style={styles.topRow}>
        <View style={styles.iconCircle}>
          <Text style={styles.star}>
            ⭐
          </Text>
        </View>

        <View style={styles.balanceArea}>
          <Text style={styles.label}>
            মোট Stars
          </Text>

          <View style={styles.balanceRow}>
            <Text style={styles.balance}>
              {stars}
            </Text>

            <Text style={styles.balanceLabel}>
              Stars
            </Text>
          </View>
        </View>

        {/* Today's earning */}

        <View style={styles.todayBadge}>
          <Ionicons
            name="trending-up"
            size={14}
            color="#42A62A"
          />

          <Text style={styles.todayText}>
            +{todayEarned}
          </Text>
        </View>
      </View>

      {/* =====================================
          PROGRESS
      ====================================== */}

      <View style={styles.progressHeader}>
        <Text style={styles.progressLabel}>
          পরবর্তী পুরস্কার
        </Text>

        <Text style={styles.progressValue}>
          {stars} / {nextReward}
        </Text>
      </View>

      <View style={styles.progressTrack}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${progressPercent}%`,
            },
          ]}
        />
      </View>

      {/* =====================================
          MESSAGE
      ====================================== */}

      <View style={styles.messageRow}>
        <Ionicons
          name="sparkles"
          size={15}
          color={colors.primary[500]}
        />

        <Text style={styles.message}>
          {remaining > 0
            ? `আর মাত্র ${remaining} Stars পেলে নতুন পুরস্কার!`
            : 'নতুন পুরস্কার আনলক হয়েছে! 🎉'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',

    marginTop: spacing.sm,

    padding: spacing.base,

    borderRadius: radii.xl,

    backgroundColor:
      colors.primary[500],

    shadowColor:
      colors.primary[500],

    shadowOffset: {
      width: 0,
      height: 6,
    },

    shadowOpacity: 0.2,

    shadowRadius: 14,

    elevation: 5,
  },

  /* ==========================================
     TOP
  ========================================== */

  topRow: {
    width: '100%',

    flexDirection: 'row',

    alignItems: 'center',
  },

  iconCircle: {
    width: 52,
    height: 52,

    borderRadius: 26,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor:
      'rgba(255,255,255,0.18)',
  },

  star: {
    fontSize: 27,
  },

  balanceArea: {
    flex: 1,

    marginLeft: 11,
  },

  label: {
    color:
      'rgba(255,255,255,0.75)',

    fontSize: 9.5,

    fontWeight: '600',
  },

  balanceRow: {
    marginTop: 1,

    flexDirection: 'row',

    alignItems: 'baseline',
  },

  balance: {
    color: '#FFFFFF',

    fontSize: 27,

    lineHeight: 34,

    fontWeight: '900',
  },

  balanceLabel: {
    marginLeft: 4,

    color:
      'rgba(255,255,255,0.85)',

    fontSize: 10,

    fontWeight: '700',
  },

  /* ==========================================
     TODAY
  ========================================== */

  todayBadge: {
    minWidth: 58,
    height: 34,

    paddingHorizontal: 8,

    borderRadius: 17,

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor:
      'rgba(255,255,255,0.96)',
  },

  todayText: {
    marginLeft: 3,

    color: '#42A62A',

    fontSize: 11,

    fontWeight: '900',
  },

  /* ==========================================
     PROGRESS
  ========================================== */

  progressHeader: {
    marginTop: 19,

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'space-between',
  },

  progressLabel: {
    color:
      'rgba(255,255,255,0.8)',

    fontSize: 9.5,

    fontWeight: '600',
  },

  progressValue: {
    color: '#FFFFFF',

    fontSize: 9.5,

    fontWeight: '800',
  },

  progressTrack: {
    width: '100%',

    height: 8,

    marginTop: 7,

    overflow: 'hidden',

    borderRadius: 999,

    backgroundColor:
      'rgba(255,255,255,0.22)',
  },

  progressFill: {
    height: '100%',

    borderRadius: 999,

    backgroundColor: '#FFFFFF',
  },

  /* ==========================================
     MESSAGE
  ========================================== */

  messageRow: {
    marginTop: 10,

    flexDirection: 'row',

    alignItems: 'center',
  },

  message: {
    flex: 1,

    marginLeft: 5,

    color:
      'rgba(255,255,255,0.9)',

    fontSize: 9.5,

    lineHeight: 15,

    fontWeight: '600',
  },
});