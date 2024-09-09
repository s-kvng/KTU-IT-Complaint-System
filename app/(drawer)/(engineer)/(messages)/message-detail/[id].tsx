import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Picker, Text as TextUi, Button } from "react-native-ui-lib";
import { router, useLocalSearchParams } from "expo-router";
import LinearGradientWrapper from "@/components/shared/LinearGradientWrapper";
import { Bounceable } from "rn-bounceable";

const EngineerComplaintDetail = () => {
  const { id } = useLocalSearchParams();

  const [engineer, setEngineer] = React.useState("");
  return (
    <LinearGradientWrapper>
      <View style={{ height: "100%" }}>
        <View className=" my-20">
          <TextUi center className=" text-2xl font-bold">
            Complaint Detail
          </TextUi>
        </View>
        <View className="bg-white min-h-full rounded-t-3xl p-10">
          <TextUi className="mb-5 text-2xl font-bold text-sky-900">
            Enter your complaint here {id}
          </TextUi>
          <TextUi className=" text-sm text-gray-500 mb-8">Date</TextUi>

          <View className=" mb-8">
            <TextUi className=" text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              velit non odio pulvinar bibendum. Donec at ipsum velit. Nulla
              facilisi. In hac habitasse platea dictumst.
            </TextUi>
          </View>

          <View className="mb-7">
            <TextUi className=" text-sm text-gray-500 mb-3">
              Ref No. - INT001
            </TextUi>
            <TextUi className="text-lg text-blue-900">
              Assigned To: <TextUi className="text-gray-500">Gabby</TextUi>{" "}
            </TextUi>
            <TextUi className="text-lg text-blue-900">
              Status : <TextUi className="text-gray-500">Pending</TextUi>
            </TextUi>
          </View>

          <View>
            <Bounceable>
              <Button
                size={"medium"}
                enableShadow
                backgroundColor="#D9D9D9"
                onPress={() => console.log("Done")}
              >
                <TextUi
                  center
                  className="  text-[#0B4479] font-semibold text-lg"
                >
                  Done
                </TextUi>
                {/* <AntDesign name="rightcircle" size={24} color="#0B4479" /> */}
              </Button>
            </Bounceable>
          </View>
        </View>
      </View>
    </LinearGradientWrapper>
  );
};

const styles = StyleSheet.create({});

export default EngineerComplaintDetail;
