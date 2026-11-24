import { Tabs } from "expo-router";
import { Ionicons } from "@react-native-vector-icons/ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#6336B9",
        tabBarInactiveTintColor: "#60708F",
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "700",
          marginBottom: 5,
        },
        tabBarStyle: {
          height: 82,
          paddingTop: 8,
          paddingBottom: 8,
          backgroundColor: "#F8F9FF",
          borderTopWidth: 1,
          borderTopColor: "#E0E7F8",
          elevation: 0,
        },
        tabBarItemStyle: {
          borderRadius: 17,
          marginHorizontal: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="leaderboard"
        options={{
          title: "Leaderboard",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="accessibility-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
