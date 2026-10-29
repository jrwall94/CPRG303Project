import { Text, View, StyleSheet } from "react-native";

export default function Game2() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Game Two</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    margin: "auto",
    fontSize: 30,
  },
});
