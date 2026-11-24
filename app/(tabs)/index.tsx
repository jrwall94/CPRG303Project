import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TabHeader from "../../components/tabHeader";
import GameCard from "../../components/gameCard";
import { COLORS } from "../../constants/colors";
import { router } from "expo-router";

//TODO: Change game names to be more descriptive and add the new names here
const GAME_ROUTES = {
  1: "/game1",
  2: "/game2",
  3: "/game3",
  4: "/game4",
} as const;

//TODO: Replace the emojis and color gradients with images from the actual games
const games = [
  {
    id: 1,
    title: "Game 1",
    emoji: "🎮",
    colors: ["#8436CB", "#535EEB", "#08B5BC"] as const,
  },
  {
    id: 2,
    title: "Game 2",
    emoji: "🕹️",
    colors: ["#00AFB5", "#426FE1", "#8038C6"] as const,
  },
  {
    id: 3,
    title: "Game 3",
    emoji: "🎯",
    colors: ["#DC528B", "#A12CB2", "#555CEB"] as const,
  },
  {
    id: 4,
    title: "Game 4",
    emoji: "🧩",
    colors: ["#F5A342", "#E45B82", "#9231C9"] as const,
  },
] as const;

export default function HomeScreen() {
  const { width } = useWindowDimensions();

  const cardWidth = (width - 64 - 16) / 2;

  const handleGamePress = (gameId: keyof typeof GAME_ROUTES) => {
    router.navigate(GAME_ROUTES[gameId]);
  };

  return (
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <TabHeader title="GOOP" />

        {/* Main Content */}
        <View style={styles.content}>
          <Text style={styles.heading}>Choose your game</Text>

          {/* Game Grid */}
          <View style={styles.grid}>
            {games.map((game) => (
              <GameCard
                key={game.id}
                title={game.title}
                emoji={game.emoji}
                colors={game.colors}
                onPress={() => handleGamePress(game.id)}
                style={{ width: cardWidth }}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.screenBackground,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  content: {
    paddingHorizontal: 32,
    paddingTop: 34,
  },
  heading: {
    fontSize: 28,
    fontWeight: "900",
    color: COLORS.heading,
    marginBottom: 30,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 16,
  },
});
