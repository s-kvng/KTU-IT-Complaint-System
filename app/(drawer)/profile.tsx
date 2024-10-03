import React from "react";
import { useState, useEffect } from "react";
import LinearGradientWrapper from "@/components/shared/LinearGradientWrapper";
import { router, useLocalSearchParams } from "expo-router";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { ActivityIndicator, Divider } from "react-native-paper";
import {
  Avatar,
  Text as TextUi,
  View as ViewUi,
  Button,
} from "react-native-ui-lib";
import { Bounceable } from "rn-bounceable";
import { useGlobalContext } from "@/context/GlobalProvider";

const example = {
  title: "Image with fade in animation",
  size: 60,
  animate: true,
  imageProps: { animationDuration: 500 },
};

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  return (
    <LinearGradientWrapper>
      <View style={{ height: "100%" }}>
        <View className=" my-20">
          <TextUi center className=" text-2xl font-bold">
            Registered{" "}
            {user?.role === "Staff"
              ? "Staff"
              : user?.role === "Engineer"
              ? "Engineer"
              : "Admin"}
          </TextUi>
        </View>
        <View className="bg-white min-h-full rounded-t-3xl p-7 pt-3">
          {!user ? (
            <View style={{ height: "100%", justifyContent: "center" }}>
              <ActivityIndicator size="large" color="#0B4479" />
            </View>
          ) : (
            <>
              <ViewUi
                paddingL-15
                marginB-20
                paddingV-15
                className=" flex-row justify-center items-center"
              >
                <View>
                  <Avatar
                    {...example}
                    source={{ uri: user?.avatar_url }}
                    onPress={() => console.log("avatar")}
                  />
                  <TextUi
                    marginT-7
                    className=" text-[#0B4479] text-lg font-semibold"
                  >
                    {user?.email}
                  </TextUi>
                </View>
              </ViewUi>

              <ScrollView className="flex-1 px-1 pt-2">
                <View className=" ">
                  <ViewUi>
                    <TextUi>
                      <TextUi className=" font-semibold">Name : </TextUi>
                      {user?.firstname} {user?.lastname}
                    </TextUi>
                    <Divider className=" text-gray-500 my-4" />
                  </ViewUi>

                  <ViewUi marginT-15>
                    <TextUi>
                      <TextUi className=" font-semibold">Email : </TextUi>
                      {user?.email}
                    </TextUi>
                    <Divider className=" text-gray-500 my-4" />
                  </ViewUi>

                  <ViewUi marginT-15>
                    <TextUi>
                      <TextUi className=" font-semibold">Role : </TextUi>
                      {user?.role}
                    </TextUi>
                    <Divider className=" text-gray-500 my-4" />
                  </ViewUi>

                  <ViewUi marginT-15>
                    <TextUi>
                      <TextUi className=" font-semibold">
                        Date of Birth :{" "}
                      </TextUi>
                      {user?.date_of_birth}
                    </TextUi>
                    <Divider className=" text-gray-500 my-4" />
                  </ViewUi>

                  {user?.role === "Staff" && (
                    <ViewUi marginT-15>
                      <TextUi>
                        <TextUi className=" font-semibold">
                          {" "}
                          Complains :{" "}
                        </TextUi>
                        {user?.complaints?.length}
                      </TextUi>
                      <Divider className=" text-gray-500 my-4" />
                    </ViewUi>
                  )}

                  {user?.role === "Engineer" && (
                    <ViewUi marginT-15>
                      <TextUi>
                        <TextUi className=" font-semibold">Assigned : </TextUi>
                        {user?.assigned?.length}
                      </TextUi>
                      <Divider className=" text-gray-500 my-4" />
                    </ViewUi>
                  )}
                </View>
              </ScrollView>

              {/* <View className=" mt-10 flex-1 items-center">
                <Bounceable>
                  <Button
                    size={"medium"}
                    borderRadius={7}
                    enableShadow
                    style={{ width: 100 }}
                    backgroundColor="#CDDAE1"
                    onPress={() => router.navigate("/(drawer)/dashboard")}
                  >
                    <TextUi
                      center
                      className="  text-[#0B4479] font-semibold text-lg"
                    >
                      Delete
                    </TextUi>
                    <AntDesign name="rightcircle" size={24} color="#0B4479" />
                  </Button>
                </Bounceable>
              </View> */}
            </>
          )}
        </View>
      </View>
    </LinearGradientWrapper>
  );
};

const styles = StyleSheet.create({});

export default Profile;
