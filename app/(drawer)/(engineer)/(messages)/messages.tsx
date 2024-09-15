import LinearGradientWrapper from "@/components/shared/LinearGradientWrapper";
import { useState, useEffect } from "react";
import { Alert, Platform, ScrollView, StyleSheet, View } from "react-native";
import { ActivityIndicator, Divider, TextInput } from "react-native-paper";
import { Button, Colors, ListItem, Text as TextUi } from "react-native-ui-lib";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Bounceable } from "rn-bounceable";
import { router } from "expo-router";
import EngineerComplaintCard from "@/components/ui/EngineerComplaintCard";
import { getAssignedToComplaints } from "@/lib/appwrite";

const index = () => {
  const [fetchLoading, setFetchLoading] = useState(false);
  const [complaints, setcomplaints] = useState(null);

  useEffect(() => {
    setFetchLoading(true);
    const fetchRequest = async () => {
      try {
        const complains = await getAssignedToComplaints("66d5b4c500271f29c803");
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
            Assigned complaints
          </TextUi>
        </View>
        <View className="bg-white min-h-full rounded-t-3xl px-10 py-6">
          <TextUi className="mb-2 text-[#0B4479] text-lg font-semibold">
            Complaints
          </TextUi>
          <View className=" h-[400px] min-h-[400px] max-h-[450px] ">
            <ScrollView className=" pt-5 bg-[#EDEDEF] px-3 rounded-lg">
              {fetchLoading || !complaints ? (
                <View style={{ height: "100%", justifyContent: "center" }}>
                  <ActivityIndicator size="large" color="#0B4479" />
                </View>
              ) : (
                complaints.map((complaint) => (
                  <EngineerComplaintCard
                    key={complaint.$id}
                    complaint={complaint}
                  />
                ))
              )}
            </ScrollView>
          </View>
        </View>
      </View>
    </LinearGradientWrapper>
  );
};

const styles = StyleSheet.create({});

export default index;
