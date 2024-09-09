import LinearGradientWrapper from "@/components/shared/LinearGradientWrapper";
import React from "react";
import { Alert, Platform, ScrollView, StyleSheet, View } from "react-native";
import { ActivityIndicator, Divider, TextInput } from "react-native-paper";
import { Button, Colors, ListItem, Text as TextUi } from "react-native-ui-lib";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Bounceable } from "rn-bounceable";
import { router } from "expo-router";
import ComplaintCard from "@/components/ui/ComplaintCard";
import UserCard from "@/components/ui/UserCard";
import { getAllUsers } from "@/lib/appwrite";
import useAppwrite from "@/lib/useAppwrite";

const index = () => {
  const { data: users, refetch, isLoading } = useAppwrite(getAllUsers);

  return (
    <LinearGradientWrapper>
      <View style={{ height: "100%" }}>
        <View className=" my-20">
          <TextUi center className=" text-2xl font-bold">
            Users Data
          </TextUi>
        </View>
        <View className="bg-white min-h-full rounded-t-3xl px-10 py-6">
          <TextUi className="mb-2 text-[#0B4479] text-lg font-semibold">
            Registered Users
          </TextUi>
          <ScrollView className=" flex-1 pt-2">
            <View className=" mb-5 bg-[#EDEDEF] h-60 px-3 rounded-sm">
              <ScrollView className="h-50">
                {isLoading || !users ? (
                  <View style={{ height: "100%", justifyContent: "center" }}>
                    <ActivityIndicator size="large" color="#0B4479" />
                  </View>
                ) : (
                  users
                    .filter((user) => user.role === "Staff")
                    .map((user) => <UserCard key={user?.$id} user={user} />)
                )}
                {/* <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard /> */}
              </ScrollView>
            </View>

            <TextUi className="mb-2 text-[#0B4479] text-lg font-semibold">
              Registered Engineers
            </TextUi>
            <View className=" bg-[#EDEDEF] h-60 px-3 rounded-sm">
              <ScrollView>
                {isLoading || !users ? (
                  <View style={{ height: "100%", justifyContent: "center" }}>
                    <ActivityIndicator size="large" color="#0B4479" />
                  </View>
                ) : (
                  users
                    .filter((user) => user.role === "Engineer")
                    .map((user) => <UserCard key={user?.$id} user={user} />)
                )}
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </View>
    </LinearGradientWrapper>
  );
};

const styles = StyleSheet.create({});

export default index;
