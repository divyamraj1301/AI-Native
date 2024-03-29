import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import AIBot from "../../assets/images/ai-bot.png";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-white">
      <View class="space-y-2">
        <Text
          style={{ fontSize: wp(10) }}
          className="text-center font-bold text-gray-700"
        >
          AI-Native
        </Text>
        <Text
          style={{ fontSize: wp(4) }}
          className="text-center tracking-wider text-gray-700 font-semibold"
        >
          Of the AI, For the AI, By the AI
        </Text>
      </View>

      <View className="flex-row justify-center">
        <Image
          source={AIBot}
          className="w-72 h-72"
          style={{ width: wp(75), height: wp(75) }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        className="bg-blue-400 mx-5 p-4 rounded-2xl"
      >
        <Text
          style={{ fontSize: wp(6) }}
          className="text-center font-bold text-white text-2xl"
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
