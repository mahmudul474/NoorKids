import { router } from 'expo-router';
import {
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const profiles = [
  {
    id: 'arman',
    name: 'আরমান',
    age: '৬ বছর',
    emoji: '👦',
  },
  {
    id: 'mariam',
    name: 'মারিয়াম',
    age: '৭ বছর',
    emoji: '👧',
  },
  {
    id: 'yusuf',
    name: 'ইউসুফ',
    age: '৫ বছর',
    emoji: '👦',
  },
];

export default function ProfileSelectionScreen() {
  const handleProfileSelect = (profileId: string) => {
    console.log('Selected profile:', profileId);

    // আপাতত সরাসরি Home-এ যাবে।
    // পরে local storage/state দিয়ে selected profile save করব।
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>প্রোফাইল নির্বাচন</Text>

          <Text style={styles.subtitle}>
            পড়ার অগ্রগতি দেখতে{'\n'}
            একটি প্রোফাইল নির্বাচন করুন
          </Text>
        </View>

        {/* Profiles */}
        <View style={styles.profileList}>
          {profiles.map((profile) => (
            <Pressable
              key={profile.id}
              style={({ pressed }) => [
                styles.profileCard,
                pressed && styles.profileCardPressed,
              ]}
              onPress={() => handleProfileSelect(profile.id)}
            >
              <View style={styles.avatar}>
                <Text style={styles.avatarEmoji}>
                  {profile.emoji}
                </Text>
              </View>

              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>
                  {profile.name}
                </Text>

                <Text style={styles.profileAge}>
                  বয়স {profile.age}
                </Text>
              </View>

              <View style={styles.radio}>
                <View style={styles.radioInner} />
              </View>
            </Pressable>
          ))}
        </View>

        {/* Create new profile */}
        <Pressable
          style={({ pressed }) => [
            styles.createButton,
            pressed && styles.createButtonPressed,
          ]}
          onPress={() => router.push('/profile/create')}
        >
          <Text style={styles.plus}>＋</Text>

          <Text style={styles.createButtonText}>
            নতুন প্রোফাইল যোগ করুন
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F7FF',
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 28,
  },

  header: {
    alignItems: 'center',
    marginBottom: 32,
  },

  title: {
    fontSize: 27,
    fontWeight: '800',
    color: '#21154F',
  },

  subtitle: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 23,
    color: '#77718A',
    textAlign: 'center',
  },

  profileList: {
    gap: 14,
  },

  profileCard: {
    minHeight: 82,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#24155F',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },

  profileCardPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEE8FF',
  },

  avatarEmoji: {
    fontSize: 30,
  },

  profileInfo: {
    flex: 1,
    marginLeft: 14,
  },

  profileName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#21154F',
  },

  profileAge: {
    marginTop: 4,
    fontSize: 13,
    color: '#888197',
  },

  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#D4CBEA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#6D4AFF',
  },

  createButton: {
    marginTop: 24,
    minHeight: 56,
    borderRadius: 28,
    backgroundColor: '#6D4AFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  createButtonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },

  plus: {
    color: '#FFFFFF',
    fontSize: 22,
    marginRight: 7,
  },

  createButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});