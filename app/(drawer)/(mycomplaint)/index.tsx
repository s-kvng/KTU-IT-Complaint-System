import LinearGradientWrapper from "@/components/shared/LinearGradientWrapper";
import { useState, useEffect } from "react";
import { Alert, Platform, ScrollView, StyleSheet, View } from "react-native";
import { ActivityIndicator, Divider, TextInput } from "react-native-paper";
import { Button, Colors, ListItem, Text as TextUi } from "react-native-ui-lib";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Bounceable } from "rn-bounceable";
import { router } from "expo-router";
import ComplaintCard from "@/components/ui/ComplaintCard";
import { getStaffComplaints } from "@/lib/appwrite";
import { useGlobalContext } from "@/context/GlobalProvider";

const index = () => {
  const { user } = useGlobalContext();
  const [fetchLoading, setFetchLoading] = useState(false);
  const [complaints, setcomplaints] = useState(null);

  useEffect(() => {
    setFetchLoading(true);
    const fetchRequest = async () => {
      try {
        const complains = await getStaffComplaints(user?.$id);
        console.log("complains -> ", complains);
        setcomplaints(complains);
      } catch (error) {
        console.log(error);
        Alert.alert("Error fetching complaint");
      } finally {
        setFetchLoading(false);
      }
    };

    fetchRequest();
  }, []);

  return (
    <LinearGradientWrapper>
      <View style={{ height: "100%" }}>
        <View className=" my-20">
          <TextUi center className=" text-2xl font-bold">
            My Complaint
          </TextUi>
        </View>
        <View className="bg-white min-h-full rounded-t-3xl p-10">
          <ScrollView className=" flex-1 px-3 pt-2">
            {complaints?.filter((complaint) => complaint.assigned !== true)
              ?.length === 0 && (
              <View className=" flex-1 bg-red">
                <TextUi className="mb-2 text-[#0B4479] text-lg font-semibold">
                  No Pending Complaints
                </TextUi>
              </View>
            )}
            {fetchLoading || !complaints ? (
              <View style={{ height: "100%", justifyContent: "center" }}>
                <ActivityIndicator size="large" color="#0B4479" />
              </View>
            ) : (
              complaints
                .filter((complaint) => complaint.assigned !== true)
                .map((complaint) => (
                  <ComplaintCard key={complaint.$id} complaint={complaint} />
                ))
            )}
          </ScrollView>
        </View>
      </View>
    </LinearGradientWrapper>
  );
};

const styles = StyleSheet.create({});

export default index;
