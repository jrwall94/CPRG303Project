import { ScrollView, Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import GameCard from "@/components/gameCard";
import TabHeader from "@/components/tabHeader";

export default function TabOneScreen() {
  const gameList = [
    {
      title: "Game 1",
      value: "game1",
      picture: require("@/assets/images/placeholder-400x300.png"),
    },
    {
      title: "Game 2",
      value: "game2",
      picture: require("@/assets/images/placeholder-400x300.png"),
    },
    {
      title: "Game 3",
      value: "game3",
      picture: require("@/assets/images/placeholder-400x300.png"),
    },
    {
      title: "Game 4",
      value: "game4",
      picture: require("@/assets/images/placeholder-400x300.png"),
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.screen}>
        <TabHeader />
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.sectionHeading}>
            <Text style={styles.sectionTitle}>Choose a game to play</Text>
          </View>
          <View style={styles.list}>
            {gameList.map((game) => (
              <GameCard
                key={game.title}
                title={game.title}
                picture={game.picture}
                value={game.value}
                style={styles.game}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F8F5F8",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 28,
  },
  sectionHeading: {
    marginBottom: 18,
  },
  sectionTitle: {
    color: "#342B36",
    fontSize: 21,
    fontWeight: "700",
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 16,
  },
  game: {
    width: "48%",
  },
});
