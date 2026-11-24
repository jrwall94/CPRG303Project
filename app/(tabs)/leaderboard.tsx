import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { router, useLocalSearchParams } from "expo-router";
import TabHeader from "../../components/tabHeader";
import { COLORS } from "../../constants/colors";

//TODO: Get the games and scores from the database, then delete mock data
const games = ["Game 1", "Game 2", "Game 3", "Game 4"] as const;
type Game = (typeof games)[number];

function getGameFromParam(value: string | string[] | undefined): Game | undefined {
  const game = Array.isArray(value) ? value[0] : value;
  return games.find((candidate) => candidate === game);
}

type PlayerScore = {
  name: string;
  score: number;
};

const scoresByGame: Record<Game, PlayerScore[]> = {
  "Game 1": [
    { name: "jonw", score: 1000 },
    { name: "miya", score: 999 },
    { name: "alex", score: 888 },
    { name: "madelaine", score: 850 },
    { name: "nathan", score: 820 },
    { name: "alex", score: 790 },
    { name: "emma", score: 750 },
    { name: "james", score: 720 },
    { name: "lucy", score: 680 },
    { name: "noah", score: 650 },
  ],
  "Game 2": [
    { name: "jonw", score: 1250 },
    { name: "alex", score: 1135 },
    { name: "miya", score: 1040 },
    { name: "madelaine", score: 980 },
    { name: "nathan", score: 915 },
  ],
  "Game 3": [
    { name: "jonw", score: 950 },
    { name: "alex", score: 875 },
    { name: "miya", score: 1100 },
    { name: "madelaine", score: 1025 },
    { name: "nathan", score: 930 },
  ],
  "Game 4": [
    { name: "jonw", score: 1430 },
    { name: "alex", score: 1600 },
    { name: "miya", score: 1330 },
    { name: "madelaine", score: 1490 },
    { name: "nathan", score: 1280 },
  ],
};

export default function LeaderboardScreen() {
  const { width } = useWindowDimensions();

  const { game: gameParam } = useLocalSearchParams<{ game?: string }>();
  const selectedGame = getGameFromParam(gameParam) ?? "Game 1";
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const players = [...scoresByGame[selectedGame]]
    .sort((first, second) => second.score - first.score)
    .map((player, index) => ({ ...player, rank: index + 1 }));

  const podiumWidth = (width - 88) / 3;
  const podiumPlaces = [
    {
      player: players[1],
      rank: 2,
      medal: "🥈",
      avatar: styles.secondAvatar,
      score: styles.secondScore,
      block: styles.secondBlock,
    },
    {
      player: players[0],
      rank: 1,
      medal: "🏆",
      avatar: styles.firstAvatar,
      score: styles.firstScore,
      block: styles.firstBlock,
    },
    {
      player: players[2],
      rank: 3,
      medal: "🥉",
      avatar: styles.thirdAvatar,
      score: styles.thirdScore,
      block: styles.thirdBlock,
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <TabHeader title="Highscores" />

        {/* Content */}
        <View style={styles.content}>
          {/* Game Selector */}
          <Text style={styles.selectLabel}>Select game</Text>

          <Pressable
            style={styles.gameSelector}
            onPress={() => setDropdownOpen(!dropdownOpen)}
          >
            <View style={styles.selectedGame}>
              <Text style={styles.gameIcon}>🎮</Text>
              <Text style={styles.gameName}>{selectedGame}</Text>
            </View>

            <Ionicons
              name={dropdownOpen ? "chevron-up" : "chevron-down"}
              size={18}
              color="#6336B9"
            />
          </Pressable>

          {dropdownOpen && (
            <View style={styles.dropdown}>
              {games.map((game) => (
                <Pressable
                  key={game}
                  style={styles.dropdownItem}
                  onPress={() => {
                    router.setParams({ game });
                    setDropdownOpen(false);
                  }}
                >
                  <Text
                    style={[
                      styles.dropdownText,
                      selectedGame === game && styles.selectedDropdownText,
                    ]}
                  >
                    {game}
                  </Text>

                  {selectedGame === game && (
                    <Ionicons name="checkmark" size={18} color="#6336B9" />
                  )}
                </Pressable>
              ))}
            </View>
          )}

          {/* Podium */}
          <View style={styles.podium}>
            {podiumPlaces.map(
              ({ player, rank, medal, avatar, score, block }) => (
                <View
                  key={rank}
                  style={[styles.podiumColumn, { width: podiumWidth }]}
                >
                  <View style={[styles.avatar, avatar]}>
                    <Text style={styles.avatarText}>
                      {player.name[0].toUpperCase()}
                    </Text>
                  </View>

                  <Text style={styles.medal}>{medal}</Text>
                  <Text style={styles.playerName}>{player.name}</Text>
                  <Text style={[styles.playerScore, score]}>
                    {player.score.toLocaleString()}
                  </Text>

                  <View style={[styles.podiumBlock, block]}>
                    <Text style={styles.podiumNumber}>{rank}</Text>
                  </View>
                </View>
              ),
            )}
          </View>

          {/* All Rankings */}
          <View style={styles.rankingsHeader}>
            <Text style={styles.rankingsTitle}>All Rankings</Text>
            <Text style={styles.playerCount}>
              {players.length} PLAYERS
            </Text>
          </View>

          <View style={styles.rankingsList}>
            {players.map((player) => (
              <View key={player.rank} style={styles.rankingRow}>
                <View style={styles.rankNumber}>
                  <Text style={styles.rankText}>{player.rank}</Text>
                </View>

                <View style={styles.rankingAvatar}>
                  <Text style={styles.rankingAvatarText}>
                    {player.name[0].toUpperCase()}
                  </Text>
                </View>

                <Text style={styles.rankingName}>{player.name}</Text>

                <Text style={styles.rankingScore}>
                  {player.score.toLocaleString()}
                </Text>
              </View>
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
  scrollContent: {
    paddingBottom: 24,
  },
  content: {
    paddingHorizontal: 39,
    paddingTop: 31,
  },
  selectLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.label,
    marginBottom: 10,
  },
  gameSelector: {
    height: 58,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#DCE4FF",
    backgroundColor: COLORS.screenBackground,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#6476B5",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  selectedGame: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },
  gameIcon: {
    fontSize: 16,
  },
  gameName: {
    fontSize: 16,
    fontWeight: "800",
    color: COLORS.inputText,
  },
  dropdown: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    marginTop: 6,
    borderWidth: 1,
    borderColor: "#E1E7FA",
    overflow: "hidden",
    elevation: 5,
    zIndex: 10,
  },
  dropdownItem: {
    height: 48,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F2FA",
  },
  dropdownText: {
    fontSize: 15,
    color: COLORS.label,
    fontWeight: "600",
  },
  selectedDropdownText: {
    color: "#6336B9",
    fontWeight: "900",
  },
  podium: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 38,
    marginBottom: 47,
  },
  podiumColumn: {
    alignItems: "center",
  },
  avatar: {
    width: 68,
    height: 68,
    borderRadius: 40,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  firstAvatar: {
    width: 85,
    height: 85,
    borderColor: "#FFC438",
    backgroundColor: "#E7E9FF",
  },
  secondAvatar: {
    borderColor: "#CCD3DF",
    backgroundColor: "#E4E9FF",
  },
  thirdAvatar: {
    borderColor: "#E18A27",
    backgroundColor: "#E8EBFF",
  },
  avatarText: {
    fontSize: 28,
    fontWeight: "900",
    color: "#40548F",
  },
  medal: {
    fontSize: 27,
    marginTop: 7,
    height: 31,
  },
  playerName: {
    fontSize: 16,
    fontWeight: "900",
    color: "#263B63",
    marginTop: 3,
  },
  playerScore: {
    fontSize: 18,
    fontWeight: "900",
    marginTop: 9,
  },
  firstScore: {
    color: "#FFBF3F",
  },
  secondScore: {
    color: "#C7CFD9",
  },
  thirdScore: {
    color: "#D77D2C",
  },
  podiumBlock: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    marginTop: 16,
  },
  firstBlock: {
    height: 95,
    backgroundColor: "#FFD36B",
  },
  secondBlock: {
    height: 67,
    backgroundColor: "#CBD3DD",
  },
  thirdBlock: {
    height: 50,
    backgroundColor: "#D3812E",
  },
  podiumNumber: {
    fontSize: 30,
    fontWeight: "900",
    color: "#17152C",
  },
  rankingsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  rankingsTitle: {
    fontSize: 25,
    fontWeight: "900",
    color: COLORS.heading,
  },
  playerCount: {
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 1.5,
    color: "#60718F",
  },
  rankingsList: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#D9C8FF",
    backgroundColor: "#F0EBFF",
    overflow: "hidden",
  },
  rankingRow: {
    minHeight: 68,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E1D9F4",
  },
  rankNumber: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: "#E2D8FF",
    justifyContent: "center",
    alignItems: "center",
  },
  rankText: {
    fontSize: 15,
    fontWeight: "900",
    color: "#6037AD",
  },
  rankingAvatar: {
    width: 38,
    height: 38,
    borderRadius: 20,
    backgroundColor: "#DFE6FF",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },
  rankingAvatarText: {
    fontSize: 17,
    fontWeight: "900",
    color: "#40548F",
  },
  rankingName: {
    flex: 1,
    fontSize: 16,
    fontWeight: "800",
    color: "#293D60",
    marginLeft: 12,
  },
  rankingScore: {
    fontSize: 16,
    fontWeight: "900",
    color: "#5D43AE",
  },
});
