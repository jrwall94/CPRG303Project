import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS, HEADER_GRADIENT } from "../constants/colors";

type GameHeaderProps = {
  title: string;
};

export default function GameHeader({ title }: GameHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={HEADER_GRADIENT}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[
          styles.header,
          { height: 100 + insets.top, paddingTop: insets.top },
        ]}
      >
        <View style={styles.controls}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Go back"
            onPress={() => router.back()}
            style={({ pressed }) => [
              styles.controlButton,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.backArrow}>←</Text>
          </Pressable>

          <Text style={styles.title}>{title}</Text>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Open leaderboard"
            onPress={() => router.navigate("/leaderboard")}
            style={({ pressed }) => [
              styles.controlButton,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.trophy}>🏆</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingBottom: 22,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  controlButton: {
    width: 53,
    height: 53,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
    backgroundColor: "rgba(255,255,255,0.12)",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    color: COLORS.white,
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
  },
  backArrow: {
    color: COLORS.white,
    fontSize: 29,
    lineHeight: 32,
  },
  trophy: {
    fontSize: 25,
  },
  pressed: {
    opacity: 0.75,
  },
});
