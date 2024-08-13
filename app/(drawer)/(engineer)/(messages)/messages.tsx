import LinearGradientWrapper from "@/components/shared/LinearGradientWrapper";
import React from "react";
import { Alert, Platform, ScrollView, StyleSheet, View } from "react-native";
import { Divider, TextInput } from "react-native-paper";
import { Button, Colors, ListItem, Text as TextUi } from "react-native-ui-lib";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Bounceable } from "rn-bounceable";
import { router } from "expo-router";
import EngineerComplaintCard from "@/components/ui/EngineerComplaintCard";

const index = () => {
  return (
    <LinearGradientWrapper>
      <View style={{ height: "100%" }}>
        <View className=" my-20">
          <TextUi center className=" text-2xl font-bold">
            Assigned complaints
          </TextUi>
        </View>
        <View className="bg-white min-h-full rounded-t-3xl px-10 py-6">
          <TextUi className="mb-2 text-[#0B4479] text-lg font-semibold">
            Pending Complaints
          </TextUi>
          <View className=" h-[400px] min-h-[400px] max-h-[450px] ">
            <ScrollView className=" pt-5 bg-[#EDEDEF] px-3 rounded-lg">
              <EngineerComplaintCard />
              <EngineerComplaintCard />
              <EngineerComplaintCard />
              <EngineerComplaintCard />
              <EngineerComplaintCard />
              <EngineerComplaintCard />
              <EngineerComplaintCard />
              <EngineerComplaintCard />
              <EngineerComplaintCard />
            </ScrollView>
          </View>
        </View>
      </View>
    </LinearGradientWrapper>
  );
};

const styles = StyleSheet.create({});

export default index;
