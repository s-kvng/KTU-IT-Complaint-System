import LinearGradientWrapper from "@/components/shared/LinearGradientWrapper";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { ActivityIndicator, Divider, TextInput } from "react-native-paper";
import { Button, Colors, Picker, Text as TextUi } from "react-native-ui-lib";
import { longOptions, jobType } from "@/constants";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Bounceable } from "rn-bounceable";
import { router } from "expo-router";
import { addComplaint } from "@/lib/appwrite";
import { useGlobalContext } from "@/context/GlobalProvider";

const AddComplaint = () => {
  const { user } = useGlobalContext();
  const [uploading, setUploading] = useState<boolean>(false);
  const [form, setForm] = useState({
    phone: "",
    office: "",
    department_name: "",
    description: "",
    jobType: "",
  });

  const onSubmit = async () => {
    if (!form.phone || !form.office || !form.description || !form.jobType) {
      Alert.alert("Error", "Please fill in all required fields!!");
      return;
    }
    setUploading(true);
    // Add Complaint to appwrite
    try {
      await addComplaint({ ...form, userId: user?.$id });

      Alert.alert("Success", "Post Uploaded successfully");
    } catch (error: any) {
      Alert.alert("Error", error.message);
      console.log(error);
    } finally {
      setForm({
        phone: "",
        office: "",
        department_name: "",
        description: "",
        jobType: "",
      });
      setUploading(false);
    }
  };

  return (
    <LinearGradientWrapper>
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView style={{ height: "100%" }}>
          <View className=" my-20">
            <TextUi center className=" text-2xl font-bold">
              Make a Complaint
            </TextUi>
          </View>
          <View className="bg-white min-h-full rounded-t-3xl p-10">
            {uploading ? (
              <View style={{ height: "100%", justifyContent: "center" }}>
                <ActivityIndicator size="large" color="#0B4479" />
              </View>
            ) : (
              <>
                <TextUi>Enter your complaint here</TextUi>
                <View className=" gap-y-8">
                  <TextInput
                    className="bg-white "
                    textColor="black"
                    placeholderTextColor="#000"
                    mode="outlined"
                    activeOutlineColor="black"
                    label="Phone Number"
                    textContentType="telephoneNumber"
                    value={form.phone}
                    onChangeText={(value) => setForm({ ...form, phone: value })}
                    right={<TextInput.Icon icon="account-hard-hat" />}
                  />

                  <TextInput
                    className="bg-white"
                    textColor="black"
                    placeholderTextColor="#000"
                    mode="outlined"
                    label="Office Number"
                    value={form.office}
                    onChangeText={(value) =>
                      setForm({ ...form, office: value })
                    }
                    right={<TextInput.Icon icon="call-split" />}
                  />

                  <View>
                    <Picker
                      label="From (Department/Unit name)"
                      placeholder="Pick a Department"
                      useWheelPicker
                      value={form.department_name}
                      onChange={(wheelPickerValue) =>
                        setForm({ ...form, department_name: wheelPickerValue })
                      }
                      trailingAccessory={
                        <Entypo name="chevron-down" size={24} color="black" />
                      }
                      items={longOptions}
                    />
                    <Divider />
                  </View>

                  <View>
                    <Picker
                      placeholder="Job Type"
                      floatingPlaceholder
                      value={form.jobType}
                      enableModalBlur={false}
                      onChange={(item) => setForm({ ...form, jobType: item })}
                      topBarProps={{ title: "Languages" }}
                      trailingAccessory={
                        <Entypo name="chevron-down" size={24} color="black" />
                      }
                      // style={{color: Colors.red20}}
                      useWheelPicker
                      // searchPlaceholder={'Job Type'}
                      // searchStyle={{color: Colors.blue30, placeholderTextColor: Colors.grey50}}
                      // onSearchChange={value => console.warn('value', value)}
                      items={jobType}
                    />
                    <Divider />
                  </View>

                  <View>
                    <TextUi>
                      Please give a detailed description of your issue in the
                      text box below
                    </TextUi>
                    <TextInput
                      className="bg-white h-36"
                      textColor="black"
                      multiline
                      placeholderTextColor="#000"
                      mode="outlined"
                      label="Description"
                      value={form.description}
                      onChangeText={(value) =>
                        setForm({ ...form, description: value })
                      }
                    />
                  </View>
                </View>
                <View className=" mt-5 px-10">
                  <Bounceable>
                    <Button
                      enableShadow
                      backgroundColor="#D9D9D9"
                      onPress={onSubmit}
                    >
                      <TextUi className=" mr-5 text-[#0B4479] font-semibold text-lg">
                        Submit
                      </TextUi>
                      <AntDesign name="rightcircle" size={24} color="#0B4479" />
                    </Button>
                  </Bounceable>
                </View>
              </>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradientWrapper>
  );
};

const styles = StyleSheet.create({});

export default AddComplaint;
