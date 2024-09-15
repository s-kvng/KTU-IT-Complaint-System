import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { Picker, Text as TextUi, Button } from "react-native-ui-lib";
import { router, useLocalSearchParams } from "expo-router";
import LinearGradientWrapper from "@/components/shared/LinearGradientWrapper";
import { Bounceable } from "rn-bounceable";
import { getComplaint, updateStatusComplaint } from "@/lib/appwrite";
import { ActivityIndicator } from "react-native-paper";

const EngineerComplaintDetail = () => {
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

  const handleDoneButton = async () => {
    console.log("Done");
    setFetchLoading(true);
    try {
      const newComplaint = await updateStatusComplaint(id);
      console.log("Updated complaint -> ", newComplaint);
      Alert.alert("Complaint status updated successfully");
      setcomplaint(newComplaint);
    } catch (error) {
      console.log("Error -> ", error);
    } finally {
      setFetchLoading(false);
    }
  };

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
                Complainer - {complaint?.complainer?.firstname}{" "}
                {complaint?.complainer?.lastname}
              </TextUi>
              <TextUi className=" text-sm text-gray-500 mb-8">
                {complaint?.$createdAt}
              </TextUi>

              <View className=" mb-8">
                <TextUi className=" text-lg">{complaint?.description}</TextUi>
              </View>

              <View className="mb-7">
                <TextUi className="text-lg text-blue-900 mb-3">
                  Assigned To:{" "}
                  <TextUi className="text-gray-500">
                    {complaint?.assigned_to?.firstname}
                  </TextUi>{" "}
                </TextUi>
                {/* deparment name  */}
                <TextUi className="text-lg text-blue-900 mb-3">
                  Department name :{" "}
                  <TextUi className="text-gray-500">
                    {complaint.department_name}
                  </TextUi>
                </TextUi>

                {/* office number */}
                <TextUi className="text-lg text-blue-900 mb-3">
                  Office number :{" "}
                  <TextUi className="text-gray-500">
                    {complaint.office_number}
                  </TextUi>
                </TextUi>

                {/* priority level */}
                <TextUi className="text-lg text-blue-900 mb-3">
                  Priority Level :{" "}
                  <TextUi className="text-gray-500">
                    {complaint.priority}
                  </TextUi>
                </TextUi>

                <TextUi className="text-lg text-blue-900 mb-5">
                  Status :{" "}
                  <TextUi className="text-gray-500">{complaint.status}</TextUi>
                </TextUi>
                <TextUi className=" text-sm text-right text-gray-500 mb-3">
                  Ref No. - {complaint?.$id}
                </TextUi>
              </View>

              {complaint?.status === "pending" && (
                <View>
                  <Bounceable>
                    <Button
                      size={"medium"}
                      enableShadow
                      backgroundColor="#D9D9D9"
                      onPress={handleDoneButton}
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
              )}
            </>
          )}
        </View>
      </View>
    </LinearGradientWrapper>
  );
};

const styles = StyleSheet.create({});

export default EngineerComplaintDetail;
