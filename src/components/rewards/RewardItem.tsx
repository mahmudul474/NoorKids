import { Ionicons } from '@expo/vector-icons';
import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';

type RewardStatus =
  | 'unlocked'
  | 'locked'
  | 'progress';

type RewardItemProps = {
  title?: string;
  description?: string;
  icon?: string;
  status?: RewardStatus;
  progress?: number;
  target?: number;
  reward?: number;
  onPress?: () => void;
};

export default function RewardItem({
  title = 'Star Collector',
  description = '৫০০ Stars সংগ্রহ করো',
  icon = '⭐',
  status = 'locked',
  progress = 155,
  target = 500,
  reward = 50,
  onPress,
}: RewardItemProps) {
  const safeTarget =
    target > 0 ? target : 1;

  const progressPercent = Math.min(
    Math.round(
      (progress / safeTarget) * 100,
    ),
    100,
  );

  const isUnlocked =
    status === 'unlocked';

  const isLocked =
    status === 'locked';

  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      style={({ pressed }) => [
        styles.container,

        isUnlocked &&
          styles.unlockedContainer,

        isLocked &&
          styles.lockedContainer,

        pressed &&
          styles.pressed,
      ]}
    >
      {/* =====================================
          ICON
      ====================================== */}

      <View
        style={[
          styles.iconContainer,

          isUnlocked &&
            styles.unlockedIcon,

          isLocked &&
            styles.lockedIcon,
        ]}
      >
        {isLocked ? (
          <Ionicons
            name="lock-closed"
            size={20}
            color="#A7A1B5"
          />
        ) : (
          <Text style={styles.icon}>
            {icon}
          </Text>
        )}
      </View>

      {/* =====================================
          CONTENT
      ====================================== */}

      <View style={styles.content}>
        <Text
          style={[
            styles.title,

            isLocked &&
              styles.lockedTitle,
          ]}
          numberOfLines={1}
        >
          {title}
        </Text>

        <Text
          style={styles.description}
          numberOfLines={2}
        >
          {description}
        </Text>

        {/* Progress */}

        {status === 'progress' && (
          <View style={styles.progressArea}>
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

            <Text style={styles.progressText}>
              {progress} / {target}
            </Text>
          </View>
        )}
      </View>

      {/* =====================================
          REWARD / STATUS
      ====================================== */}

      {isUnlocked ? (
        <View style={styles.unlockedBadge}>
          <Ionicons
            name="checkmark-circle"
            size={16}
            color="#42A62A"
          />

          <Text style={styles.unlockedText}>
            অর্জিত
          </Text>
        </View>
      ) : (
        <View style={styles.rewardBadge}>
          <Text style={styles.rewardStar}>
            ⭐
          </Text>

          <Text style={styles.rewardText}>
            +{reward}
          </Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',

    minHeight: 82,

    padding: 11,

    marginBottom: 9,

    borderRadius: radii.lg,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderWidth: 1,

    borderColor:
      colors.primary[100],

    shadowColor: '#21154F',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.035,

    shadowRadius: 6,

    elevation: 1,
  },

  unlockedContainer: {
    borderColor: '#D5EDCA',

    backgroundColor: '#FCFFFA',
  },

  lockedContainer: {
    backgroundColor: '#FAF9FC',

    borderColor: '#E9E6EF',
  },

  /* ==========================================
     ICON
  ========================================== */

  iconContainer: {
    width: 52,
    height: 52,

    borderRadius: 18,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor:
      colors.primary[50],
  },

  unlockedIcon: {
    backgroundColor: '#EFF9EA',
  },

  lockedIcon: {
    backgroundColor: '#F0EEF4',
  },

  icon: {
    fontSize: 25,
  },

  /* ==========================================
     CONTENT
  ========================================== */

  content: {
    flex: 1,

    marginLeft: 10,

    marginRight: 7,
  },

  title: {
    color: colors.text.primary,

    fontSize: 13,

    lineHeight: 18,

    fontWeight: '800',
  },

  lockedTitle: {
    color: '#858091',
  },

  description: {
    marginTop: 2,

    color: colors.text.secondary,

    fontSize: 9.5,

    lineHeight: 15,

    fontWeight: '500',
  },

  /* ==========================================
     PROGRESS
  ========================================== */

  progressArea: {
    marginTop: 6,

    flexDirection: 'row',

    alignItems: 'center',
  },

  progressTrack: {
    flex: 1,

    height: 5,

    overflow: 'hidden',

    borderRadius: 999,

    backgroundColor:
      colors.primary[100],
  },

  progressFill: {
    height: '100%',

    borderRadius: 999,

    backgroundColor:
      colors.primary[500],
  },

  progressText: {
    marginLeft: 6,

    color: colors.text.secondary,

    fontSize: 8,

    fontWeight: '700',
  },

  /* ==========================================
     UNLOCKED
  ========================================== */

  unlockedBadge: {
    paddingHorizontal: 7,
    paddingVertical: 6,

    borderRadius: 999,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#EFF9EA',
  },

  unlockedText: {
    marginLeft: 3,

    color: '#42A62A',

    fontSize: 8.5,

    fontWeight: '800',
  },

  /* ==========================================
     REWARD
  ========================================== */

  rewardBadge: {
    minWidth: 46,

    paddingHorizontal: 7,
    paddingVertical: 6,

    borderRadius: 999,

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor:
      '#FFF7DD',
  },

  rewardStar: {
    fontSize: 10,
  },

  rewardText: {
    marginLeft: 2,

    color: '#B27A00',

    fontSize: 9,

    fontWeight: '900',
  },

  /* ==========================================
     PRESS
  ========================================== */

  pressed: {
    opacity: 0.8,

    transform: [
      {
        scale: 0.985,
      },
    ],
  },
});