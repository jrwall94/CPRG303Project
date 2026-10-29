import { Text, View, StyleSheet } from "react-native";

export default function Game1() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Game One</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    margin: "auto",
    fontSize: 30,
  },
});
