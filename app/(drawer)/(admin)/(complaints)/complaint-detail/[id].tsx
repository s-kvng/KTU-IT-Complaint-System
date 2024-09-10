import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { Picker, Text as TextUi } from "react-native-ui-lib";
import { useLocalSearchParams } from "expo-router";
import LinearGradientWrapper from "@/components/shared/LinearGradientWrapper";
import { longOptions } from "@/constants";
import { Entypo } from "@expo/vector-icons";
import { ActivityIndicator, Divider } from "react-native-paper";
import useAppwrite from "@/lib/useAppwrite";
import { getComplaint } from "@/lib/appwrite";

const AdminComplaintDetail = () => {
  const { id } = useLocalSearchParams();
  const [engineer, setEngineer] = useState("");
  const [fetchLoading, setFetchLoading] = useState(false);
  const [complaint, setcomplaint] = useState(null);

  useEffect(() => {
    setFetchLoading(true);
    const fetchRequest = async () => {
      try {
        const complain = await getComplaint(id);
        console.log("reviews -> ", complain);
        setcomplaint(complain);
      } catch (error) {
        console.log(error);
        Alert.alert("Error fetching complaint");
      } finally {
        setFetchLoading(false);
      }
    };

    fetchRequest();
  }, [id]);

  return (
    <LinearGradientWrapper>
      <View style={{ height: "100%" }}>
        <View className=" my-20">
          <TextUi center className=" text-2xl font-bold">
            Complaint Detail
          </TextUi>
        </View>
        <View className="bg-white min-h-full rounded-t-3xl p-10">
          {fetchLoading || !complaint ? (
            <View style={{ height: "100%", justifyContent: "center" }}>
              <ActivityIndicator size="large" color="#0B4479" />
            </View>
          ) : (
            <>
              <TextUi className="mb-5 text-2xl font-bold text-sky-900">
                Enter your complaint here {id}
              </TextUi>
              <TextUi className=" text-sm text-gray-500 mb-8">
                {complaint?.$createdAt}
              </TextUi>

              <View className=" mb-8">
                <TextUi className=" text-lg">{complaint?.description}</TextUi>
              </View>

              <View className="">
                <TextUi className=" text-sm text-gray-500 mb-3">
                  Ref No. - {complaint?.$id}
                </TextUi>
                <TextUi className="text-lg text-blue-900">
                  Assigned To:{" "}
                  <TextUi className="text-gray-500">
                    {complaint?.assigned
                      ? complaint?.assigned_to?.firstname
                      : "Not assigned"}
                  </TextUi>{" "}
                </TextUi>
                <TextUi className="text-lg text-blue-900">
                  Status :{" "}
                  <TextUi className="text-gray-500">{complaint.status}</TextUi>
                </TextUi>
              </View>

              {!complaint?.assigned && (
                <View className="mt-5">
                  <Picker
                    label="Assign an Engineers"
                    placeholder="Assign an Engineer"
                    useWheelPicker
                    value={engineer}
                    onChange={(wheelPickerValue) =>
                      setEngineer(wheelPickerValue)
                    }
                    trailingAccessory={
                      <Entypo name="chevron-down" size={24} color="black" />
                    }
                    items={longOptions}
                  />
                  <Divider />
                </View>
              )}
            </>
          )}
        </View>
      </View>
    </LinearGradientWrapper>
  );
};

const styles = StyleSheet.create({});

export default AdminComplaintDetail;
