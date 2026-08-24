import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';

type AnswerState =
  | 'default'
  | 'selected'
  | 'correct'
  | 'wrong';

type AnswerOptionProps = {
  label?: string;
  answer?: string;
  state?: AnswerState;
  onPress?: () => void;
};

export default function AnswerOption({
  label = 'A',
  answer = 'আলিফ',
  state = 'default',
  onPress,
}: AnswerOptionProps) {
  const isSelected =
    state === 'selected';

  const isCorrect =
    state === 'correct';

  const isWrong =
    state === 'wrong';

  const getBorderColor = () => {
    if (isCorrect) {
      return '#42A62A';
    }

    if (isWrong) {
      return '#E05252';
    }

    if (isSelected) {
      return colors.primary[500];
    }

    return '#E9E5F2';
  };

  const getBackgroundColor = () => {
    if (isCorrect) {
      return '#EFF9EA';
    }

    if (isWrong) {
      return '#FFF0F0';
    }

    if (isSelected) {
      return colors.primary[50];
    }

    return '#FFFFFF';
  };

  const getLabelBackground = () => {
    if (isCorrect) {
      return '#42A62A';
    }

    if (isWrong) {
      return '#E05252';
    }

    if (isSelected) {
      return colors.primary[500];
    }

    return '#F2EFF8';
  };

  const getLabelColor = () => {
    if (
      isCorrect ||
      isWrong ||
      isSelected
    ) {
      return '#FFFFFF';
    }

    return colors.text.secondary;
  };

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`উত্তর ${label}, ${answer}`}
      style={({ pressed }) => [
        styles.container,
        {
          borderColor:
            getBorderColor(),
          backgroundColor:
            getBackgroundColor(),
        },
        pressed &&
          styles.pressed,
      ]}
    >
      {/* =====================================
          OPTION LABEL
      ====================================== */}

      <View
        style={[
          styles.labelCircle,
          {
            backgroundColor:
              getLabelBackground(),
          },
        ]}
      >
        <Text
          style={[
            styles.label,
            {
              color:
                getLabelColor(),
            },
          ]}
        >
          {label}
        </Text>
      </View>

      {/* =====================================
          ANSWER
      ====================================== */}

      <Text
        style={styles.answer}
        numberOfLines={2}
        adjustsFontSizeToFit
        minimumFontScale={0.8}
      >
        {answer}
      </Text>

      {/* =====================================
          STATE ICON
      ====================================== */}

      {isCorrect && (
        <View style={styles.stateIcon}>
          <Ionicons
            name="checkmark-circle"
            size={23}
            color="#42A62A"
          />
        </View>
      )}

      {isWrong && (
        <View style={styles.stateIcon}>
          <Ionicons
            name="close-circle"
            size={23}
            color="#E05252"
          />
        </View>
      )}

      {isSelected && !isCorrect && !isWrong && (
        <View style={styles.selectedIndicator}>
          <View
            style={
              styles.selectedIndicatorInner
            }
          />
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',

    minHeight: 58,

    paddingHorizontal: 12,

    borderRadius: radii.lg,

    borderWidth: 1.5,

    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 9,

    shadowColor: '#21154F',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.035,

    shadowRadius: 6,

    elevation: 1,
  },

  /* ==========================================
     LABEL
  ========================================== */

  labelCircle: {
    width: 34,
    height: 34,

    borderRadius: 17,

    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    fontSize: 12,

    fontWeight: '900',
  },

  /* ==========================================
     ANSWER
  ========================================== */

  answer: {
    flex: 1,

    marginLeft: 11,

    color: colors.text.primary,

    fontSize: 14,

    lineHeight: 20,

    fontWeight: '700',
  },

  /* ==========================================
     STATE
  ========================================== */

  stateIcon: {
    width: 28,
    height: 28,

    alignItems: 'center',
    justifyContent: 'center',

    marginLeft: 6,
  },

  selectedIndicator: {
    width: 21,
    height: 21,

    borderRadius: 11,

    borderWidth: 2,

    borderColor:
      colors.primary[500],

    alignItems: 'center',
    justifyContent: 'center',

    marginLeft: 6,
  },

  selectedIndicatorInner: {
    width: 9,
    height: 9,

    borderRadius: 5,

    backgroundColor:
      colors.primary[500],
  },

  /* ==========================================
     PRESS
  ========================================== */

  pressed: {
    opacity: 0.82,

    transform: [
      {
        scale: 0.985,
      },
    ],
  },
});