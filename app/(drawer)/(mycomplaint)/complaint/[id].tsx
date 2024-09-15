import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { Text as TextUi } from "react-native-ui-lib";
import { useLocalSearchParams } from "expo-router";
import LinearGradientWrapper from "@/components/shared/LinearGradientWrapper";
import { getComplaint } from "@/lib/appwrite";
import { ActivityIndicator } from "react-native-paper";

const ComplaintDetail = () => {
  const { id } = useLocalSearchParams();
  const [engineer, setEngineer] = useState("");
  const [fetchLoading, setFetchLoading] = useState(false);
  const [complaint, setcomplaint] = useState(null);

  useEffect(() => {
    setFetchLoading(true);
    const fetchRequest = async () => {
      try {
        const complain = await getComplaint(id);
        console.log("complain -> ", complain);
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
            My Complaint
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
                Complainer - {complaint?.complainer?.firstname}{" "}
                {complaint?.complainer?.lastname}
              </TextUi>
              <View className=" mb-2">
                <TextUi className=" text-sm text-gray-700">
                  Job Type - {complaint?.job_type}
                </TextUi>
              </View>
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
                  Status - {complaint.status}
                </TextUi>
              </View>
            </>
          )}
        </View>
      </View>
    </LinearGradientWrapper>
  );
};

const styles = StyleSheet.create({});

export default ComplaintDetail;
