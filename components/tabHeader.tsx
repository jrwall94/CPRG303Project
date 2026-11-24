import { View, Text, StyleSheet, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HEADER_GRADIENT } from "../constants/colors";

export default function TabHeader({ title }: { title: string }) {
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
          { height: 140 + insets.top, paddingTop: insets.top },
        ]}
      >
        <View style={styles.logoIcon}>
          <Text style={styles.logoEmoji}>🎮</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  logoIcon: {
    width: 60,
    height: 60,
    borderRadius: 19,
    backgroundColor: "rgba(255,255,255,0.22)",
    borderWidth: 6,
    borderColor: "rgba(255,255,255,0.15)",
    justifyContent: "center",
    alignItems: "center",
  },
  logoEmoji: {
    fontSize: 28,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "900",
    letterSpacing: 3,
    marginTop: 12,
  },
});
