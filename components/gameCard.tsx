import {
  Text,
  View,
  StyleSheet,
  Pressable,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants/colors";

//TODO: Replace the emoji/colors with an image to display for the game
type GameProps = {
  title: string;
  emoji: string;
  colors: readonly [string, string, string];
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function GameCard({
  title,
  emoji,
  colors,
  onPress,
  style,
}: GameProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        style,
        pressed && styles.cardPressed,
      ]}
    >
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.image}
      >
        <Text style={styles.emoji}>{emoji}</Text>
      </LinearGradient>

      <View style={styles.cardFooter}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 19,
    overflow: "hidden",
    backgroundColor: "#EEF2FF",
    borderWidth: 1,
    borderColor: "#DDE5FF",
  },
  image: {
    width: "100%",
    aspectRatio: 1.23,
    justifyContent: "center",
    alignItems: "center",
  },
  emoji: {
    fontSize: 76,
  },
  cardFooter: {
    height: 47,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEF2FF",
  },
  title: {
    fontSize: 18,
    fontWeight: "900",
    color: COLORS.heading,
  },
  cardPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },
});
