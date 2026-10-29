import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  type StyleProp,
  type ViewStyle,
  type ImageSource,
} from "react-native";

import { Href, Link } from "expo-router";

type GameProps = {
  title: string;
  picture: ImageSource;
  value: string;
  style?: StyleProp<ViewStyle>;
};

export default function GameCard({ title, value, picture, style }: GameProps) {
  return (
    <View style={[styles.card, style]}>
      <Link href={`./${value}`} asChild>
        <Pressable>
          <View style={styles.content}>
            <Image source={picture} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#EEE7EF",
    shadowColor: "#342536",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
  content: {
    paddingBottom: 13,
  },
  title: {
    color: "#342B36",
    fontSize: 15,
    fontWeight: "700",
    marginHorizontal: 13,
    marginTop: 11,
  },
});
