"use client";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import TabHeader from "@/components/tabHeader";

export default function LeaderboardScreen() {
  const tempHighScores = {
    game1: [
      { username: "jonw", score: 1000 },
      { username: "minl", score: 999 },
      { username: "alek", score: 888 },
      { username: "made", score: 777 },
      { username: "natf", score: 666 },
      { username: "fdax", score: 555 },
      { username: "aseq", score: 444 },
      { username: "atas", score: 333 },
      { username: "asdb", score: 222 },
      { username: "oiuy", score: 111 },
    ],

    game2: [
      { username: "jonw", score: 321 },
      { username: "minl", score: 432 },
      { username: "alek", score: 543 },
      { username: "made", score: 654 },
      { username: "natf", score: 765 },
    ],
  };

  const trophyColors = ["gold", "silver", "#CD7F32"];
  const trophySizes = [50, 42, 34];
  const fontSizes = [30, 25, 20];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TabHeader title={"Leaderboard"} />
      <View>
        <Text style={styles.title}>Game 1</Text>
        {tempHighScores.game1.map((entry, index) => (
          <View style={styles.topEntry} key={entry.username}>
            {index <= 2 ? (
              <View style={styles.trophy}>
                <Ionicons
                  name="trophy"
                  color={trophyColors[index]}
                  size={trophySizes[index]}
                />
              </View>
            ) : (
              <View style={styles.trophy} />
            )}
            <Text style={{ fontSize: fontSizes[index] || 15 }}>
              {tempHighScores.game1[index].username} -{" "}
              {tempHighScores.game1[index].score}
            </Text>
            <View style={styles.trophy} />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginHorizontal: "auto",
    marginTop: 20,
  },
  topEntry: {
    marginTop: 20,
    marginHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  entry: {},
  trophy: {
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
