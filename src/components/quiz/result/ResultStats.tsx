import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';

type ResultStatsProps = {
  correct?: number;
  wrong?: number;
  accuracy?: number;
};

export default function ResultStats({
  correct = 8,
  wrong = 2,
  accuracy = 80,
}: ResultStatsProps) {
  return (
    <View style={styles.container}>
      {/* Correct */}

      <View style={styles.statCard}>
        <View
          style={[
            styles.iconCircle,
            styles.correctCircle,
          ]}
        >
          <Ionicons
            name="checkmark"
            size={18}
            color="#42A62A"
          />
        </View>

        <Text style={styles.value}>
          {correct}
        </Text>

        <Text style={styles.label}>
          সঠিক উত্তর
        </Text>
      </View>

      {/* Wrong */}

      <View style={styles.statCard}>
        <View
          style={[
            styles.iconCircle,
            styles.wrongCircle,
          ]}
        >
          <Ionicons
            name="close"
            size={18}
            color="#E05252"
          />
        </View>

        <Text style={styles.value}>
          {wrong}
        </Text>

        <Text style={styles.label}>
          ভুল উত্তর
        </Text>
      </View>

      {/* Accuracy */}

      <View style={styles.statCard}>
        <View
          style={[
            styles.iconCircle,
            styles.accuracyCircle,
          ]}
        >
          <Ionicons
            name="trophy"
            size={17}
            color={colors.primary[500]}
          />
        </View>

        <Text style={styles.value}>
          {accuracy}%
        </Text>

        <Text style={styles.label}>
          নির্ভুলতা
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',

    marginTop: 12,

    flexDirection: 'row',

    gap: 8,
  },

  statCard: {
    flex: 1,

    minHeight: 108,

    paddingVertical: 12,
    paddingHorizontal: 5,

    borderRadius: radii.lg,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#FFFFFF',

    borderWidth: 1,

    borderColor:
      colors.primary[100],
  },

  iconCircle: {
    width: 34,
    height: 34,

    borderRadius: 17,

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 5,
  },

  correctCircle: {
    backgroundColor: '#EFF9EA',
  },

  wrongCircle: {
    backgroundColor: '#FFF0F0',
  },

  accuracyCircle: {
    backgroundColor:
      colors.primary[50],
  },

  value: {
    color: colors.text.primary,

    fontSize: 17,

    lineHeight: 22,

    fontWeight: '900',
  },

  label: {
    marginTop: 2,

    color: colors.text.secondary,

    fontSize: 8.5,

    lineHeight: 13,

    fontWeight: '600',

    textAlign: 'center',
  },
});