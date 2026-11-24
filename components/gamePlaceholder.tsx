import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GameHeader from "./gameHeader";
import { COLORS } from "../constants/colors";

type GamePlaceholderProps = {
  title: string;
};

export default function GamePlaceholder({ title }: GamePlaceholderProps) {
  return (
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      <GameHeader title={title} />
      <View style={styles.content}>
        <Text style={styles.message}>Game coming soon.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.screenBackground,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    fontSize: 20,
    color: "#58719A",
  },
});
