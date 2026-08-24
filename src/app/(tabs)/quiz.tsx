import { router } from 'expo-router';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function QuizTabScreen() {
  const handleStartQuiz = () => {
    router.push({
      pathname: '/quiz/[id]',
      params: {
        id: '1',
      },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}

        <View style={styles.header}>
          <Text style={styles.emoji}>
            🧠
          </Text>

          <Text style={styles.title}>
            কুইজ
          </Text>

          <Text style={styles.subtitle}>
            যা শিখেছো, এবার পরীক্ষা করে দেখো!
          </Text>
        </View>

        {/* Quiz Card */}

        <View style={styles.card}>
          <View style={styles.iconCircle}>
            <Text style={styles.icon}>
              🎯
            </Text>
          </View>

          <Text style={styles.cardTitle}>
            আরবি হরফ কুইজ
          </Text>

          <Text style={styles.cardDescription}>
            ১০টি প্রশ্নের মাধ্যমে তোমার
            শেখা যাচাই করো এবং ⭐ Star
            অর্জন করো।
          </Text>

          {/* Stats */}

          <View style={styles.stats}>
            <View style={styles.stat}>
              <Text style={styles.statValue}>
                ১০
              </Text>

              <Text style={styles.statLabel}>
                প্রশ্ন
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.stat}>
              <Text style={styles.statValue}>
                ⭐
              </Text>

              <Text style={styles.statLabel}>
                পুরস্কার
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.stat}>
              <Text style={styles.statValue}>
                🏆
              </Text>

              <Text style={styles.statLabel}>
                চ্যালেঞ্জ
              </Text>
            </View>
          </View>

          {/* Start */}

          <Pressable
            onPress={handleStartQuiz}
            style={({ pressed }) => [
              styles.startButton,
              pressed &&
                styles.buttonPressed,
            ]}
          >
            <Text style={styles.startText}>
              কুইজ শুরু করুন
            </Text>

            <Text style={styles.arrow}>
              →
            </Text>
          </Pressable>
        </View>

        {/* Encouragement */}

        <View style={styles.tip}>
          <Text style={styles.tipEmoji}>
            💡
          </Text>

          <Text style={styles.tipText}>
            মনোযোগ দিয়ে উত্তর দাও।
            ভুল হলেও আবার চেষ্টা করা যাবে!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9F7FF',
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 28,
  },

  header: {
    alignItems: 'center',
    marginBottom: 24,
  },

  emoji: {
    fontSize: 34,
    marginBottom: 6,
  },

  title: {
    color: '#21154F',
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '900',
  },

  subtitle: {
    marginTop: 6,
    color: '#77718A',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
  },

  card: {
    width: '100%',
    padding: 22,
    borderRadius: 26,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#E8E2F8',

    shadowColor: '#21154F',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.07,
    shadowRadius: 14,
    elevation: 4,
  },

  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEE8FF',
  },

  icon: {
    fontSize: 34,
  },

  cardTitle: {
    marginTop: 15,
    color: '#21154F',
    fontSize: 21,
    fontWeight: '900',
    textAlign: 'center',
  },

  cardDescription: {
    marginTop: 8,
    color: '#77718A',
    fontSize: 13,
    lineHeight: 21,
    textAlign: 'center',
  },

  stats: {
    width: '100%',
    marginTop: 22,
    paddingVertical: 14,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#F9F7FF',
  },

  stat: {
    flex: 1,
    alignItems: 'center',
  },

  statValue: {
    color: '#6D4AFF',
    fontSize: 17,
    fontWeight: '900',
  },

  statLabel: {
    marginTop: 3,
    color: '#888197',
    fontSize: 10,
    fontWeight: '600',
  },

  divider: {
    width: 1,
    height: 30,
    backgroundColor: '#DDD6EE',
  },

  startButton: {
    width: '100%',
    minHeight: 56,
    marginTop: 20,
    paddingHorizontal: 18,
    borderRadius: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#6D4AFF',
  },

  startText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },

  arrow: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
  },

  buttonPressed: {
    opacity: 0.82,
    transform: [
      {
        scale: 0.98,
      },
    ],
  },

  tip: {
    marginTop: 16,
    padding: 14,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF9E8',
    borderWidth: 1,
    borderColor: '#F8E9B8',
  },

  tipEmoji: {
    fontSize: 18,
  },

  tipText: {
    flex: 1,
    marginLeft: 9,
    color: '#75632D',
    fontSize: 11,
    lineHeight: 17,
    fontWeight: '600',
  },
});