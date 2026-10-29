import { View, Text, StyleSheet } from "react-native";
import { Stack } from "expo-router";

export default function TabHeader() {
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.header}>
        <Text style={styles.title}>GOOP</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4A3548",
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: "center",
    alignItems: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "800",
    letterSpacing: 3,
  },
});
