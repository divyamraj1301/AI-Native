import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import Bot from "../../assets/images/HomeBot.png";
import Feature from "../components/Feature";
import { dummyMessages } from "../constants";

export default function HomeScreen() {
  const [messages, setMessages] = useState(dummyMessages);
  return (
    <View className="flex-1 bg-white ">
      <SafeAreaView className="flex-1 flex mx-5">
        <View className="flex-row justify-center">
          <Image source={Bot} style={{ height: hp(15), width: wp(35) }} />
        </View>
        {messages.length ? (
          <View className="space-y-2 flex-1">
            <Text
              style={{ fontSize: wp(7) }}
              className="text-gray-700 font-semibold ml-1"
            >
              Assistant
            </Text>
            <View
              style={{ height: hp(58) }}
              className="bg-neutral-200 rounded-3xl p-4"
            >
              <ScrollView
                bounces={false}
                className="space-y-4"
                showsVerticalScrollIndicator={false}
              >
                {messages.map((message, index) => {
                    if(message.role='assistant'){
                        if(message.content.includes('https')){

                        }
                        else{

                        }
                    }
                    else{
                        return (
                            <View key={index}  className="flex-row justify-end">
                                
                            </View>
                        )
                    }
               
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Feature />
        )}
      </SafeAreaView>
    </View>
  );
}
