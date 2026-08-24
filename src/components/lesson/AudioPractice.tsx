import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';
import { spacing } from '@/theme/spacing';

type AudioPracticeProps = {
  onPlay?: () => void;
  onRecord?: () => void;
  isPlaying?: boolean;
};

export default function AudioPractice({
  onPlay,
  onRecord,
  isPlaying = false,
}: AudioPracticeProps) {
  return (
    <View style={styles.container}>
      {/* =====================================
          SECTION HEADER
      ====================================== */}

      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>
            উচ্চারণ অনুশীলন
          </Text>

          <Text style={styles.title}>
            শুনো এবং বলো
          </Text>
        </View>

        <View style={styles.soundIcon}>
          <Ionicons
            name="volume-high"
            size={17}
            color={colors.primary[500]}
          />
        </View>
      </View>

      {/* =====================================
          PRACTICE CARD
      ====================================== */}

      <View style={styles.card}>
        {/* Listen */}

        <Pressable
          onPress={onPlay}
          accessibilityRole="button"
          accessibilityLabel="উচ্চারণ শুনুন"
          style={({ pressed }) => [
            styles.listenButton,
            pressed && styles.pressed,
          ]}
        >
          <View style={styles.listenIcon}>
            <Ionicons
              name={
                isPlaying
                  ? 'pause'
                  : 'play'
              }
              size={20}
              color="#FFFFFF"
            />
          </View>

          <View style={styles.listenContent}>
            <Text style={styles.listenTitle}>
              {isPlaying
                ? 'শোনা হচ্ছে...'
                : 'উচ্চারণ শুনুন'}
            </Text>

            <Text style={styles.listenSubtitle}>
              হরফটির সঠিক উচ্চারণ শুনুন
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={18}
            color={colors.text.secondary}
          />
        </Pressable>

        {/* Divider */}

        <View style={styles.divider} />

        {/* Record */}

        <Pressable
          onPress={onRecord}
          accessibilityRole="button"
          accessibilityLabel="নিজের উচ্চারণ রেকর্ড করুন"
          style={({ pressed }) => [
            styles.recordButton,
            pressed && styles.pressed,
          ]}
        >
          <View style={styles.recordIcon}>
            <Ionicons
              name="mic"
              size={19}
              color="#FFFFFF"
            />
          </View>

          <View style={styles.recordContent}>
            <Text style={styles.recordTitle}>
              এবার তুমি বলো
            </Text>

            <Text style={styles.recordSubtitle}>
              নিজের উচ্চারণ অনুশীলন করো
            </Text>
          </View>

          <View style={styles.recordArrow}>
            <Ionicons
              name="arrow-forward"
              size={15}
              color={colors.primary[500]}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: spacing.lg,
  },

  /* ==========================================
     HEADER
  ========================================== */

  header: {
    width: '100%',

    marginBottom: spacing.sm,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  eyebrow: {
    color: colors.text.secondary,

    fontSize: 11.5,
    lineHeight: 17,

    fontWeight: '600',
  },

  title: {
    marginTop: 1,

    color: colors.text.primary,

    fontSize: 18,
    lineHeight: 26,

    fontWeight: '800',
  },

  soundIcon: {
    width: 36,
    height: 36,

    borderRadius: 18,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor:
      colors.primary[50],
  },

  /* ==========================================
     CARD
  ========================================== */

  card: {
    width: '100%',

    paddingHorizontal: 12,
    paddingVertical: 5,

    borderRadius: radii.xl,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: colors.primary[100],

    shadowColor: '#21154F',

    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.05,

    shadowRadius: 10,

    elevation: 2,
  },

  /* ==========================================
     LISTEN
  ========================================== */

  listenButton: {
    minHeight: 67,

    flexDirection: 'row',
    alignItems: 'center',
  },

  listenIcon: {
    width: 42,
    height: 42,

    borderRadius: 14,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor:
      colors.primary[500],
  },

  listenContent: {
    flex: 1,

    marginLeft: 11,

    minWidth: 0,
  },

  listenTitle: {
    color: colors.text.primary,

    fontSize: 13,

    lineHeight: 19,

    fontWeight: '800',
  },

  listenSubtitle: {
    marginTop: 1,

    color: colors.text.secondary,

    fontSize: 9.5,

    lineHeight: 14,

    fontWeight: '500',
  },

  /* ==========================================
     DIVIDER
  ========================================== */

  divider: {
    height: 1,

    marginHorizontal: 4,

    backgroundColor: '#F0EDF7',
  },

  /* ==========================================
     RECORD
  ========================================== */

  recordButton: {
    minHeight: 67,

    flexDirection: 'row',
    alignItems: 'center',
  },

  recordIcon: {
    width: 42,
    height: 42,

    borderRadius: 14,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#F06A3A',
  },

  recordContent: {
    flex: 1,

    marginLeft: 11,

    minWidth: 0,
  },

  recordTitle: {
    color: colors.text.primary,

    fontSize: 13,

    lineHeight: 19,

    fontWeight: '800',
  },

  recordSubtitle: {
    marginTop: 1,

    color: colors.text.secondary,

    fontSize: 9.5,

    lineHeight: 14,

    fontWeight: '500',
  },

  recordArrow: {
    width: 30,
    height: 30,

    borderRadius: 15,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor:
      colors.primary[50],
  },

  /* ==========================================
     PRESS
  ========================================== */

  pressed: {
    opacity: 0.78,

    transform: [
      {
        scale: 0.985,
      },
    ],
  },
});