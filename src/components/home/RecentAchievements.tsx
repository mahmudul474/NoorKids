import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';
import { spacing } from '@/theme/spacing';

type Achievement = {
  id: string;
  title: string;
  subtitle: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  backgroundColor: string;
};

const achievements: Achievement[] = [
  {
    id: 'first-lesson',
    title: 'প্রথম পাঠ',
    subtitle: 'প্রথম lesson সম্পন্ন',
    icon: 'book',
    iconColor: '#6947E8',
    backgroundColor: '#F0EAFF',
  },
  {
    id: 'three-day',
    title: '৩ দিনের স্ট্রিক',
    subtitle: 'টানা ৩ দিন শিখেছো',
    icon: 'flame',
    iconColor: '#F06A3A',
    backgroundColor: '#FFF0EA',
  },
  {
    id: 'quiz-master',
    title: 'কুইজ মাস্টার',
    subtitle: '৫টি কুইজ সম্পন্ন',
    icon: 'trophy',
    iconColor: '#E7A400',
    backgroundColor: '#FFF5D9',
  },
];

type RecentAchievementsProps = {
  onSeeAll?: () => void;
};

export default function RecentAchievements({
  onSeeAll,
}: RecentAchievementsProps) {
  return (
    <View style={styles.container}>
      {/* =====================================
          HEADER
      ====================================== */}

      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>
            পুরস্কার ও অর্জন
          </Text>

          <Text style={styles.title}>
            সাম্প্রতিক অর্জন 🏆
          </Text>
        </View>

        <Pressable
          onPress={onSeeAll}
          hitSlop={8}
          style={({ pressed }) => [
            styles.seeAllButton,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.seeAllText}>
            সব দেখুন
          </Text>

          <Ionicons
            name="chevron-forward"
            size={15}
            color={colors.primary[500]}
          />
        </Pressable>
      </View>

      {/* =====================================
          ACHIEVEMENT LIST
      ====================================== */}

      <View style={styles.list}>
        {achievements.map((achievement) => (
          <View
            key={achievement.id}
            style={styles.achievementCard}
          >
            {/* Icon */}

            <View
              style={[
                styles.iconWrapper,
                {
                  backgroundColor:
                    achievement.backgroundColor,
                },
              ]}
            >
              <Ionicons
                name={achievement.icon}
                size={21}
                color={achievement.iconColor}
              />
            </View>

            {/* Content */}

            <View style={styles.content}>
              <Text
                style={styles.achievementTitle}
                numberOfLines={1}
              >
                {achievement.title}
              </Text>

              <Text
                style={styles.subtitle}
                numberOfLines={1}
              >
                {achievement.subtitle}
              </Text>
            </View>

            {/* Completed */}

            <View style={styles.checkCircle}>
              <Ionicons
                name="checkmark"
                size={14}
                color="#FFFFFF"
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: spacing.lg,

    paddingBottom: spacing.lg,
  },

  /* ==========================================
     HEADER
  ========================================== */

  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',

    marginBottom: spacing.sm,
  },

  eyebrow: {
    color: colors.text.secondary,

    fontSize: 12,
    fontWeight: '600',
  },

  title: {
    marginTop: 2,

    color: colors.text.primary,

    fontSize: 18,
    lineHeight: 26,

    fontWeight: '800',
  },

  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingVertical: 5,
  },

  seeAllText: {
    color: colors.primary[500],

    fontSize: 12,
    fontWeight: '700',

    marginRight: 2,
  },

  /* ==========================================
     LIST
  ========================================== */

  list: {
    gap: 9,
  },

  /* ==========================================
     ACHIEVEMENT CARD
  ========================================== */

  achievementCard: {
    width: '100%',

    minHeight: 66,

    paddingHorizontal: 12,

    borderRadius: radii.lg,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,

    borderColor: colors.primary[100],

    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#21154F',

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.045,

    shadowRadius: 8,

    elevation: 2,
  },

  /* ==========================================
     ICON
  ========================================== */

  iconWrapper: {
    width: 42,
    height: 42,

    borderRadius: 14,

    alignItems: 'center',
    justifyContent: 'center',
  },

  /* ==========================================
     CONTENT
  ========================================== */

  content: {
    flex: 1,

    minWidth: 0,

    marginLeft: 11,
  },

  achievementTitle: {
    color: colors.text.primary,

    fontSize: 13,
    lineHeight: 19,

    fontWeight: '800',
  },

  subtitle: {
    marginTop: 1,

    color: colors.text.secondary,

    fontSize: 10,
    lineHeight: 15,

    fontWeight: '500',
  },

  /* ==========================================
     CHECK
  ========================================== */

  checkCircle: {
    width: 26,
    height: 26,

    borderRadius: 13,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: colors.primary[500],

    marginLeft: 8,
  },

  pressed: {
    opacity: 0.7,
  },
});