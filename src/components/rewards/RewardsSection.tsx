import { StyleSheet, Text, View } from 'react-native';

import RewardItem from './RewardItem';

type RewardsSectionProps = {
  title?: string;
  showLocked?: boolean;
};

export default function RewardsSection({
  title = 'তোমার পুরস্কার',
  showLocked = true,
}: RewardsSectionProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.subtitle}>
          শেখার মাধ্যমে নতুন পুরস্কার অর্জন করো
        </Text>
      </View>

      <RewardItem
        title="প্রথম কুইজ"
        description="তোমার প্রথম কুইজ সফলভাবে সম্পন্ন করেছো"
        icon="🏆"
        status="unlocked"
      />

      <RewardItem
        title="Learning Starter"
        description="১০টি lesson সম্পন্ন করেছো"
        icon="📚"
        status="unlocked"
      />

      <RewardItem
        title="Star Collector"
        description="৫০০ Stars সংগ্রহ করো"
        icon="⭐"
        status="progress"
        progress={155}
        target={500}
        reward={50}
      />

      {showLocked && (
        <>
          <Text style={styles.lockedTitle}>
            পরবর্তী পুরস্কার
          </Text>

          <RewardItem
            title="Week Warrior"
            description="টানা ৭ দিন শেখার অভ্যাস তৈরি করো"
            status="progress"
            progress={3}
            target={7}
            reward={75}
          />

          <RewardItem
            title="Arabic Master"
            description="২৯টি আরবি হরফ সম্পূর্ণ শিখো"
            status="progress"
            progress={12}
            target={29}
            reward={100}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 24,
  },

  header: {
    marginBottom: 12,
  },

  title: {
    color: '#21154F',
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '900',
  },

  subtitle: {
    marginTop: 3,
    color: '#77718A',
    fontSize: 9.5,
    lineHeight: 15,
    fontWeight: '500',
  },

  lockedTitle: {
    marginTop: 9,
    marginBottom: 10,
    color: '#21154F',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '800',
  },
});