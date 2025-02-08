import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { Colors } from "../constants/Colors";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const handleGoogleSignIn = async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow();
      if (createdSessionId) {
        await setActive({ session: createdSessionId });
      }
    } catch (err) {
      console.error("OAuth error:", err);
    }
  };

  return (
    <View>
      <View style={{ display: "flex", alignItems: "center", marginTop: 50 }}>
        <Image
          source={require("../assets/login.png")}
          style={{
            width: 220,
            height: 450,
            borderRadius: 20,
            borderWidth: 6,
            borderColor: "#000",
          }}
        />
      </View>
      <View style={styles.SubContainer}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: "outfit-bold",
            textAlign: "center",
          }}
        >
          Your Ultimate{" "}
          <Text style={{ color: Colors.PRIMARY }}>
            Community Business Directory
          </Text>{" "}
          App
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "outfit",
            textAlign: "center",
            marginVertical: 10,
            color: Colors.GRAY,
          }}
        >
          Find your favorite business and post your own business to your
          community.
        </Text>
        <TouchableOpacity style={styles.btn} onPress={handleGoogleSignIn}>
          <Text
            style={{ textAlign: "center", color: "#fff", fontFamily: "outfit" }}
          >
            Sign in with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  SubContainer: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: -30,
  },
  btn: {
    backgroundColor: Colors.PRIMARY,
    padding: 13,
    borderRadius: 99,
    marginTop: 20,
  },
});
