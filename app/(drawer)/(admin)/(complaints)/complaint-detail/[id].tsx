import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { Button, Picker, Text as TextUi } from "react-native-ui-lib";
import { useLocalSearchParams } from "expo-router";
import LinearGradientWrapper from "@/components/shared/LinearGradientWrapper";
import { longOptions } from "@/constants";
import { Entypo } from "@expo/vector-icons";
import { ActivityIndicator, Divider } from "react-native-paper";
import useAppwrite from "@/lib/useAppwrite";
import { assignComplaint, getComplaint, getEngineers } from "@/lib/appwrite";
import { Bounceable } from "rn-bounceable";

const AdminComplaintDetail = () => {
  const { id } = useLocalSearchParams();
  const [engineer, setEngineer] = useState("");
  const [fetchLoading, setFetchLoading] = useState(false);
  const [complaint, setcomplaint] = useState(null);
  const [engineerList, setEngineerList] = useState([]);

  useEffect(() => {
    setFetchLoading(true);
    const fetchRequest = async () => {
      try {
        const complain = await getComplaint(id);
        const fetchedEngineers = await getEngineers();
        console.log("enginers -> ", fetchedEngineers);
        const newArray = fetchedEngineers.map((eng) => ({
          label: eng.firstname + " " + eng.lastname,
          value: eng.$id,
        }));
        console.log("array -> ", newArray);

        console.log("reviews -> ", complain);
        setcomplaint(complain);
        setEngineerList(newArray);
      } catch (error) {
        console.log(error);
        Alert.alert("Error fetching complaint");
      } finally {
        setFetchLoading(false);
      }
    };

    fetchRequest();
  }, [id]);

  const handleUpdate = async () => {
    if (engineer === "") {
      Alert.alert("Please select an engineer");
      return;
    }
    setFetchLoading(true);

    try {
      const newComplaint = await assignComplaint(complaint.$id, engineer);
      Alert.alert("Engineer assigned successfully");
      setcomplaint(newComplaint);
    } catch (error) {
      console.log(error);
      Alert.alert("Error assigning engineer");
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

              <View className="">
                <TextUi className="text-lg text-blue-900 mb-3">
                  Assigned To:{" "}
                  <TextUi className="text-gray-500">
                    {complaint?.assigned
                      ? complaint?.assigned_to?.firstname
                      : "Not assigned"}
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

                <TextUi className="text-lg text-blue-900">
                  Status :{" "}
                  <TextUi className="text-gray-500">{complaint.status}</TextUi>
                </TextUi>

                {/* reference id */}
                <TextUi className=" text-sm text-right text-gray-500 mb-3">
                  Ref No. - {complaint?.$id}
                </TextUi>
              </View>

              {!complaint?.assigned && (
                <>
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
                      items={engineerList}
                    />
                    <Divider />
                  </View>

                  <View className="mt-4">
                    <Bounceable>
                      <Button
                        size={"medium"}
                        enableShadow
                        backgroundColor="#D9D9D9"
                        onPress={handleUpdate}
                      >
                        <TextUi
                          center
                          className="  text-[#0B4479] font-semibold text-lg"
                        >
                          Submit
                        </TextUi>
                        {/* <AntDesign name="rightcircle" size={24} color="#0B4479" /> */}
                      </Button>
                    </Bounceable>
                  </View>
                </>
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
