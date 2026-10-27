import { ScrollView, Text, View, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import Game from "@/components/game";

export default function TabOneScreen() {
  const gameList = [
    {
      title: "Game 1",
      picture: require("@/assets/images/placeholder-400x300.png"),
    },
    {
      title: "Game 2",
      picture: require("@/assets/images/placeholder-400x300.png"),
    },
    {
      title: "Game 3",
      picture: require("@/assets/images/placeholder-400x300.png"),
    },
    {
      title: "Game 4",
      picture: require("@/assets/images/placeholder-400x300.png"),
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.screen}>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={styles.header}>
          <Text style={styles.title}>GOOP</Text>
        </View>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.sectionHeading}>
            <Text style={styles.eyebrow}>EXPLORE</Text>
            <Text style={styles.sectionTitle}>Choose a game to play</Text>
          </View>
          <View style={styles.list}>
            {gameList.map((game) => (
              <Game
                key={game.title}
                title={game.title}
                picture={game.picture}
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
  header: {
    backgroundColor: "#4A3548",
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: "center",
    alignItems: "center",
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
  title: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "800",
    letterSpacing: 3,
  },
  subtitle: {
    color: "#E8DCE7",
    fontSize: 15,
    marginTop: 4,
  },
  eyebrow: {
    color: "#8C7284",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.8,
    marginBottom: 5,
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
