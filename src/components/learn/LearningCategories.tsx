import { Ionicons } from '@expo/vector-icons';
import {
    Pressable,
    StyleSheet,
    Text,
    useWindowDimensions,
    View,
} from 'react-native';

import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';
import { spacing } from '@/theme/spacing';

type LearningCategory = {
  id: string;
  title: string;
  subtitle: string;
  icon: keyof typeof Ionicons.glyphMap;
  backgroundColor: string;
  iconColor: string;
};

const categories: LearningCategory[] = [
  {
    id: 'letters',
    title: 'হরফ',
    subtitle: 'আরবি বর্ণমালা',
    icon: 'language-outline',
    backgroundColor: '#F0EAFF',
    iconColor: '#6947E8',
  },
  {
    id: 'words',
    title: 'শব্দ',
    subtitle: 'নতুন শব্দ শিখি',
    icon: 'book-outline',
    backgroundColor: '#EAF7D9',
    iconColor: '#42A62A',
  },
  {
    id: 'pronunciation',
    title: 'উচ্চারণ',
    subtitle: 'সঠিকভাবে বলি',
    icon: 'volume-high-outline',
    backgroundColor: '#FFF3D8',
    iconColor: '#F2A300',
  },
  {
    id: 'writing',
    title: 'লেখা',
    subtitle: 'লিখতে শিখি',
    icon: 'create-outline',
    backgroundColor: '#E5F3FF',
    iconColor: '#2788D8',
  },
];

type LearningCategoriesProps = {
  onCategoryPress?: (categoryId: string) => void;
};

export default function LearningCategories({
  onCategoryPress,
}: LearningCategoriesProps) {
  const { width } = useWindowDimensions();

  const horizontalPadding = spacing.base * 2;
  const gap = 8;

  const availableWidth =
    width - horizontalPadding;

  const cardWidth =
    (availableWidth - gap * 3) / 4;

  const isSmallScreen = width < 360;

  const iconSize = isSmallScreen ? 25 : 28;

  return (
    <View style={styles.container}>
      {/* =====================================
          SECTION HEADER
      ====================================== */}

      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>
            শেখার বিভাগ
          </Text>

          <Text style={styles.title}>
            নিজের মতো করে শেখো
          </Text>
        </View>
      </View>

      {/* =====================================
          CATEGORY ROW
      ====================================== */}

      <View
        style={[
          styles.cardsRow,
          {
            gap,
          },
        ]}
      >
        {categories.map((category) => (
          <Pressable
            key={category.id}
            onPress={() =>
              onCategoryPress?.(
                category.id,
              )
            }
            accessibilityRole="button"
            accessibilityLabel={
              category.title
            }
            style={({ pressed }) => [
              styles.card,
              {
                width: cardWidth,
                backgroundColor:
                  category.backgroundColor,
              },
              pressed && styles.cardPressed,
            ]}
          >
            {/* Icon */}

            <View style={styles.iconArea}>
              <Ionicons
                name={category.icon}
                size={iconSize}
                color={
                  category.iconColor
                }
              />
            </View>

            {/* Title */}

            <Text
              style={styles.cardTitle}
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.75}
            >
              {category.title}
            </Text>

            {/* Subtitle */}

            <Text
              style={styles.cardSubtitle}
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.65}
            >
              {category.subtitle}
            </Text>

            {/* Arrow */}

            <View
              style={[
                styles.arrow,
                {
                  backgroundColor:
                    category.iconColor,
                },
              ]}
            >
              <Ionicons
                name="arrow-forward"
                size={11}
                color="#FFFFFF"
              />
            </View>
          </Pressable>
        ))}
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
    marginBottom: 10,
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

  /* ==========================================
     CARDS
  ========================================== */

  cardsRow: {
    width: '100%',

    flexDirection: 'row',

    alignItems: 'stretch',

    justifyContent: 'space-between',
  },

  card: {
    height: 124,

    borderRadius: radii.lg,

    paddingTop: 9,
    paddingBottom: 8,
    paddingHorizontal: 4,

    alignItems: 'center',
    justifyContent: 'flex-start',

    borderWidth: 1,

    borderColor:
      'rgba(100, 70, 220, 0.10)',

    shadowColor: '#21154F',

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.06,

    shadowRadius: 8,

    elevation: 2,
  },

  cardPressed: {
    transform: [
      {
        scale: 0.96,
      },
    ],

    opacity: 0.88,
  },

  /* ==========================================
     ICON
  ========================================== */

  iconArea: {
    width: '100%',
    height: 50,

    alignItems: 'center',
    justifyContent: 'center',
  },

  /* ==========================================
     TITLE
  ========================================== */

  cardTitle: {
    width: '100%',

    color: colors.text.primary,

    fontSize: 11,

    lineHeight: 17,

    fontWeight: '800',

    textAlign: 'center',
  },

  /* ==========================================
     SUBTITLE
  ========================================== */

  cardSubtitle: {
    width: '100%',

    marginTop: 0,

    color: colors.text.secondary,

    fontSize: 7.5,

    lineHeight: 12,

    fontWeight: '500',

    textAlign: 'center',
  },

  /* ==========================================
     ARROW
  ========================================== */

  arrow: {
    position: 'absolute',

    bottom: 7,

    width: 22,
    height: 22,

    borderRadius: 11,

    alignItems: 'center',
    justifyContent: 'center',
  },
});