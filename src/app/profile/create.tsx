 import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function CreateProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>নতুন প্রোফাইল</Text>

      <Text style={styles.subtitle}>
        এখানে শিশুর প্রোফাইল তৈরি করা হবে।
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>ফিরে যান</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
  },

  subtitle: {
    marginTop: 12,
    color: '#77718A',
  },

  button: {
    marginTop: 30,
    paddingHorizontal: 30,
    paddingVertical: 14,
    borderRadius: 25,
    backgroundColor: '#6D4AFF',
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});