import { Stack } from "expo-router";

export default function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="game1" options={{ headerShown: false }} />
      <Stack.Screen name="game2" options={{ headerShown: false }} />
      <Stack.Screen name="game3" options={{ headerShown: false }} />
      <Stack.Screen name="game4" options={{ headerShown: false }} />
    </Stack>
  );
}
