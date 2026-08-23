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
    title: 'আরবি হরফ',
    subtitle: 'হরফ শিখি',
    icon: 'language-outline',
    backgroundColor: '#F0EAFF',
    iconColor: '#6947E8',
  },
  {
    id: 'words',
    title: 'শব্দ শেখা',
    subtitle: 'নতুন শব্দ',
    icon: 'book-outline',
    backgroundColor: '#EAF7D9',
    iconColor: '#42A62A',
  },
  {
    id: 'pronunciation',
    title: 'উচ্চারণ',
    subtitle: 'সঠিকভাবে বলি',
    icon: 'mic',
    backgroundColor: '#FFF3D8',
    iconColor: '#F2A300',
  },
  {
    id: 'quiz',
    title: 'কুইজ খেলা',
    subtitle: 'নিজেকে যাচাই করি',
    icon: 'trophy',
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

  /*
   * We keep four cards in one row.
   * Card width is calculated from the available
   * screen width so nothing can overflow.
   */
  const horizontalPadding = spacing.base * 2;
  const gap = 8;

  const availableWidth =
    width - horizontalPadding;

  const cardWidth =
    (availableWidth - gap * 3) / 4;

  /*
   * Small screens need slightly smaller typography.
   */
  const isSmallScreen = width < 360;

  const iconSize = isSmallScreen ? 27 : 30;

  const titleFontSize = isSmallScreen
    ? 9.5
    : 10.5;

  const subtitleFontSize = isSmallScreen
    ? 7.5
    : 8;

  return (
    <View style={styles.container}>
      {/* =====================================
          HEADER
      ====================================== */}

      <View style={styles.header}>
        <Text style={styles.title}>
          শেখা শুরু করি
        </Text>

        <Pressable
          onPress={() =>
            onCategoryPress?.('all')
          }
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
            size={13}
            color={colors.primary[500]}
          />
        </Pressable>
      </View>

      {/* =====================================
          RESPONSIVE FOUR CARD ROW
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
            {/* =================================
                ICON
            ================================= */}

            <View style={styles.iconArea}>
              <Ionicons
                name={category.icon}
                size={iconSize}
                color={
                  category.iconColor
                }
              />
            </View>

            {/* =================================
                TITLE
            ================================= */}

            <Text
              style={[
                styles.cardTitle,
                {
                  fontSize:
                    titleFontSize,
                },
              ]}
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.75}
            >
              {category.title}
            </Text>

            {/* =================================
                SUBTITLE
            ================================= */}

            <Text
              style={[
                styles.cardSubtitle,
                {
                  fontSize:
                    subtitleFontSize,
                },
              ]}
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.7}
            >
              {category.subtitle}
            </Text>

            {/* =================================
                ARROW
            ================================= */}

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
                size={12}
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

    marginBottom: 11,

    paddingHorizontal: 2,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    color: colors.text.primary,

    fontSize: 19,
    lineHeight: 27,

    fontWeight: '800',
  },

  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingVertical: 5,
    paddingLeft: 6,
  },

  seeAllText: {
    color: colors.primary[500],

    fontSize: 11.5,
    fontWeight: '700',

    marginRight: 1,
  },

  /* ==========================================
     CARDS ROW
  ========================================== */

  cardsRow: {
    width: '100%',

    flexDirection: 'row',

    alignItems: 'stretch',

    justifyContent: 'space-between',
  },

  /* ==========================================
     CARD
  ========================================== */

  card: {
    height: 132,

    borderRadius: radii.lg,

    paddingTop: 10,
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
      height: 4,
    },

    shadowOpacity: 0.075,

    shadowRadius: 9,

    elevation: 3,
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
    height: 55,

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 1,
  },

  /* ==========================================
     TITLE
  ========================================== */

  cardTitle: {
    width: '100%',

    minHeight: 18,

    paddingHorizontal: 1,

    color: colors.text.primary,

    lineHeight: 17,

    fontWeight: '800',

    textAlign: 'center',
  },

  /* ==========================================
     SUBTITLE
  ========================================== */

  cardSubtitle: {
    width: '100%',

    minHeight: 14,

    marginTop: 0,

    paddingHorizontal: 1,

    color: colors.text.secondary,

    lineHeight: 13,

    fontWeight: '500',

    textAlign: 'center',
  },

  /* ==========================================
     ARROW
  ========================================== */

  arrow: {
    position: 'absolute',

    bottom: 8,

    width: 23,
    height: 23,

    borderRadius: 12,

    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#21154F',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.12,

    shadowRadius: 4,

    elevation: 2,
  },

  pressed: {
    opacity: 0.7,
  },
});