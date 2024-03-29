import { View, Text, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ChatGPT from "../../assets/images/ChatGPT.png";
import DALLE from "../../assets/images/DALLE.png";
import SmartAI from "../../assets/images/Smart-AI.png";

export default function Feature() {
  return (
    <View style={{ height: hp(60) }} className="space-y-4">
      <Text
        style={{ fontSize: wp(6.5) }}
        className="font-semibold text-gray-700"
      >
        Feature
      </Text>
      <View className="bg-emerald-50 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image source={ChatGPT} style={{ height: hp(8), width: wp(15) }} />
          <Text
            style={{ fontSize: wp(7.8) }}
            className="font-bold text-gray-700 p-1"
          >
            ChatGPT
          </Text>
        </View>
        <Text
          style={{ fontSize: wp(4.5) }}
          className="text-gray-700 font-medium"
        >
          Elevate your project with ChatGPT's powerful language processing for
          dynamic interactions and smart responses.
        </Text>
      </View>

      <View className="bg-gray-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image source={DALLE} style={{ height: hp(8), width: wp(15) }} />
          <Text
            style={{ fontSize: wp(7.8) }}
            className="font-bold text-gray-700 p-2"
          >
            DALL-E
          </Text>
        </View>
        <Text
          style={{ fontSize: wp(4.5) }}
          className="text-gray-700 font-medium"
        >
          Transform your project with DALL-E's groundbreaking image generation,
          turning concepts into captivating visuals.
        </Text>
      </View>

      <View className="bg-cyan-100 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image source={SmartAI} style={{ height: hp(8), width: wp(15) }} />
          <Text
            style={{ fontSize: wp(7.8) }}
            className="font-bold text-gray-700"
          >
            Smart-AI
          </Text>
        </View>
        <Text
          style={{ fontSize: wp(4.5) }}
          className="text-gray-700 font-medium"
        >
          Empower your project with Smart-AI's intelligent capabilities,
          revolutionizing how you engage with data and users.
        </Text>
      </View>
    </View>
  );
}
