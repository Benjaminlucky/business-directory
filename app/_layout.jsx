import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import LoginScreen from "../components/LoginScreen";
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store"; // Import SecureStore
import { TokenCache } from "@clerk/clerk-expo/dist/cache";

// Create a token cache using SecureStore
const createTokenCache = (): TokenCache => {
  return {
    getToken: async (key) => {
      try {
        const item = await SecureStore.getItemAsync(key);
        if (item) {
          console.log(`🔐 Token retrieved successfully for key: ${key}`);
        } else {
          console.warn(`⚠️ No token found under the key: ${key}`);
        }
        return item;
      } catch (error) {
        console.error("❌ SecureStore getItem error:", error);
        // Attempt to delete the corrupted item
        await SecureStore.deleteItemAsync(key);
        return null;
      }
    },
    saveToken: async (key, token) => {
      try {
        await SecureStore.setItemAsync(key, token);
        console.log(`✅ Token saved successfully for key: ${key}`);
      } catch (error) {
        console.error("❌ SecureStore setItem error:", error);
      }
    },
  };
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"),
    "outfit-extrabold": require("../assets/fonts/Outfit-ExtraBold.ttf"),
  });

  // Prevent rendering until fonts are loaded
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading fonts...</Text>
      </View>
    );
  }

  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig.extra.clerkPublishableKey} // Fetch the publishable key from your app config
      tokenCache={createTokenCache()} // Pass the token cache to ClerkProvider
    >
      <SignedIn>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SignedIn>
      <SignedOut>
        <LoginScreen />
      </SignedOut>
    </ClerkProvider>
  );
}
