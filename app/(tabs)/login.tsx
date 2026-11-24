//TODO: Implement Sign in and Sign up auth and logic
//TODO: Account nav tab should route here by default, but route to account.tsx if the user has already signed in
//      AuthGuard can be used to achieve this

import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { router } from "expo-router";
import TabHeader from "../../components/tabHeader";
import { COLORS } from "../../constants/colors";

export default function AccountScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert(
        "Missing information",
        "Please enter your username/email and password.",
      );
      return;
    }
  };

  const handleSignUp = () => {};

  const handleForgotPassword = () => {
    if (!email.trim()) {
      Alert.alert(
        "Forgot Password",
        "Please enter your username or email first.",
      );
      return;
    }

    Alert.alert("Forgot Password", `Password reset requested for ${email}.`);
  };

  return (
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContent}
        >
          <TabHeader title="Login" />

          {/* Account Form */}
          <View style={styles.content}>
            {/* Username / Email */}
            <View style={styles.inputGroup}>
              <View style={styles.labelRow}>
                <Ionicons name="person-outline" size={16} color="#00B9B9" />
                <Text style={styles.label}>Username or Email</Text>
              </View>

              <TextInput
                style={[styles.inputShell, styles.textInput]}
                placeholder="Enter your username or email"
                placeholderTextColor={COLORS.placeholder}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* Password */}
            <View style={styles.inputGroup}>
              <View style={styles.labelRow}>
                <Ionicons name="person-outline" size={16} color="#8535C7" />
                <Text style={styles.label}>Password</Text>
              </View>

              <View style={[styles.inputShell, styles.passwordContainer]}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Enter your password"
                  placeholderTextColor={COLORS.placeholder}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                />

                <Pressable
                  onPress={() => setShowPassword(!showPassword)}
                  hitSlop={10}
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={20}
                    color={COLORS.placeholder}
                  />
                </Pressable>
              </View>
            </View>

            {/* Sign Up / Sign In */}
            <View style={styles.buttonRow}>
              <Pressable
                style={({ pressed }) => [
                  styles.signUpButton,
                  pressed && styles.pressed,
                ]}
                onPress={handleSignUp}
              >
                <Text style={styles.signUpText}>Sign Up</Text>
              </Pressable>

              <Pressable
                style={({ pressed }) => [
                  styles.signInButton,
                  pressed && styles.pressed,
                ]}
                onPress={handleSignIn}
              >
                <LinearGradient
                  colors={["#8534C5", "#5364E5", "#00B7BC"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.signInGradient}
                >
                  <Text style={styles.signInText}>Sign In</Text>
                  <Ionicons
                    name="arrow-forward"
                    size={25}
                    color={COLORS.white}
                  />
                </LinearGradient>
              </Pressable>
            </View>

            {/* Forgot Password */}
            <Pressable
              style={styles.forgotButton}
              onPress={handleForgotPassword}
            >
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.screenBackground,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },

  // Form
  content: {
    flex: 1,
    paddingHorizontal: 41,
    paddingTop: 47,
  },
  inputGroup: {
    marginBottom: 29,
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    marginBottom: 17,
  },
  label: {
    color: COLORS.label,
    fontSize: 15,
    fontWeight: "800",
    letterSpacing: 1.5,
  },
  inputShell: {
    height: 53,
    width: "100%",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#DFE6FF",
    backgroundColor: "#F0F4FF",
  },
  textInput: {
    paddingHorizontal: 23,
    fontSize: 16,
    color: COLORS.inputText,
  },
  passwordContainer: {
    paddingLeft: 23,
    paddingRight: 19,
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.inputText,
  },

  // Buttons
  buttonRow: {
    flexDirection: "row",
    gap: 14,
    marginTop: 1,
  },
  signUpButton: {
    flex: 1,
    height: 61,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#DDE4FF",
    backgroundColor: "#EAEFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpText: {
    fontSize: 20,
    fontWeight: "900",
    color: "#4861E8",
  },
  signInButton: {
    flex: 1,
    height: 61,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#6573B5",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
  },
  signInGradient: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  signInText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "900",
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },

  // Forgot Password
  forgotButton: {
    alignSelf: "center",
    marginTop: 74,
  },
  forgotText: {
    color: "#4057D7",
    fontSize: 15,
    fontWeight: "800",
    textDecorationLine: "underline",
  },
});
