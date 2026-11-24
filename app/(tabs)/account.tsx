//TODO: Lock this page behind AuthGuard
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import TabHeader from "../../components/tabHeader";
import { COLORS } from "../../constants/colors";

type GameScore = {
  title: string;
  score: number;
};

type AccountScreenProps = {
  username: string;
  scores: GameScore[];
};

const DEFAULT_SCORES: GameScore[] = [
  { title: "Game 1", score: 1000 },
  { title: "Game 2", score: 321 },
  { title: "Game 3", score: 840 },
  { title: "Game 4", score: 950 },
];

const GRADIENT = ["#7837C9", "#476CEB", "#08B6B9"] as const;

export default function AccountScreen({
  //TODO: Get username from the login/auth and the scores for that user from the database
  username = "jonw",
  scores = DEFAULT_SCORES,
}: AccountScreenProps) {
  //TODO: Implement The Edit Profile and Log Out methods
  function onEditProfile() {}
  function onLogOut() {}

  return (
    <SafeAreaView style={styles.safeArea} edges={["left", "right"]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <TabHeader title="Account" />

        {/* Account content */}
        <View style={styles.content}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.sectionTitle}>Your scores</Text>

          <View style={styles.scoreList}>
            {scores.map((item, index) => (
              <View key={`${item.title}-${index}`} style={styles.scoreCard}>
                <View style={styles.scoreDetails}>
                  <Text style={styles.gameTitle}>{item.title}</Text>
                  <Text style={styles.personalBest}>Personal best</Text>
                </View>
                <View style={styles.scoreValueWrap}>
                  <Text style={styles.scoreValue}>
                    {item.score.toLocaleString()}
                  </Text>
                  <Text style={styles.pointsLabel}>POINTS</Text>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.actions}>
            <Pressable
              onPress={onEditProfile}
              style={({ pressed }) => [
                styles.actionButton,
                pressed && styles.pressed,
              ]}
            >
              <LinearGradient colors={GRADIENT} style={styles.actionGradient}>
                <Text style={styles.actionText}>Edit Profile</Text>
              </LinearGradient>
            </Pressable>
            <Pressable
              onPress={onLogOut}
              style={({ pressed }) => [
                styles.actionButton,
                pressed && styles.pressed,
              ]}
            >
              <LinearGradient colors={GRADIENT} style={styles.actionGradient}>
                <Text style={styles.actionText}>Log Out</Text>
              </LinearGradient>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F3F7FF",
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 31,
    paddingTop: 31,
    paddingBottom: 38,
  },
  username: {
    fontSize: 27,
    fontWeight: "800",
    color: "#233E69",
    marginBottom: 34,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "800",
    color: "#233E69",
    marginBottom: 19,
  },
  scoreList: {
    gap: 13,
  },
  scoreCard: {
    minHeight: 85,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#DCE6FF",
    backgroundColor: "rgba(255,255,255,0.18)",
    paddingHorizontal: 16,
    paddingVertical: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  scoreDetails: {
    gap: 3,
  },
  gameTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2E4D7A",
  },
  personalBest: {
    fontSize: 14,
    color: "#60799F",
  },
  scoreValueWrap: {
    alignItems: "flex-end",
    gap: 3,
  },
  scoreValue: {
    fontSize: 22,
    fontWeight: "800",
    color: "#3B67E8",
  },
  pointsLabel: {
    fontSize: 11,
    letterSpacing: 1.5,
    color: "#58719A",
  },
  actions: {
    flexDirection: "row",
    gap: 14,
    marginTop: 15,
  },
  actionButton: {
    flex: 1,
    borderRadius: 17,
    overflow: "hidden",
    minHeight: 61,
    shadowColor: "#4B5DAB",
    shadowOpacity: 0.16,
    shadowRadius: 13,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  actionGradient: {
    flex: 1,
    minHeight: 61,
    alignItems: "center",
    justifyContent: "center",
  },
  actionText: {
    fontSize: 20,
    fontWeight: "800",
    color: COLORS.white,
  },
  pressed: {
    opacity: 0.82,
    transform: [{ scale: 0.98 }],
  },
});
