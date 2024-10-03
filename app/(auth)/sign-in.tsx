import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Button, Text as TextUi } from "react-native-ui-lib";
import { images } from "@/constants";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Bounceable } from "rn-bounceable";
import { ActivityIndicator, TextInput } from "react-native-paper";
import { router } from "expo-router";

import { getCurrentUser, signIn } from "@/lib/appwrite";
import { useGlobalContext } from "@/context/GlobalProvider";

const SignIn = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmit = async () => {
    if (!form.email || !form.password) {
      return Alert.alert("Error", "Please fill in all required fields !!!");
    }
    setError("");
    setIsSubmitting(true);
    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();

      // set to global state
      setUser(result);
      setIsLoggedIn(true);

      Alert.alert("Success", "User signed in successfully");
      router.replace("/(drawer)/dashboard");
    } catch (error: any) {
      setError(error.message);
      throw new Error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="h-full">
      <ScrollView style={{ height: "100%" }}>
        <LinearGradient
          colors={["#F4F4F4", "#FFf", "#0A4A6D"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.linearGradient}
          className="min-h-[100vh] justify-center items-center gap-y-14"
        >
          <TextUi className="font-bold text-2xl" color="#0B4479">
            Login
          </TextUi>
          {isSubmitting ? (
            <View style={{ height: "100%", justifyContent: "center" }}>
              <ActivityIndicator size="large" color="#0B4479" />
            </View>
          ) : (
            <View className="w-full px-10 gap-y-5">
              {error && (
                <TextUi color="red" className="text-sm mb-2">
                  {error}
                </TextUi>
              )}
              <TextInput
                className="bg-transparent "
                textColor="black"
                placeholderTextColor="#000"
                mode="outlined"
                label="Email"
                value={form.email}
                onChangeText={(email) => setForm({ ...form, email: email })}
              />
              <TextInput
                className="bg-transparent"
                textColor="#000"
                mode="outlined"
                label="Password"
                value={form.password}
                onChangeText={(password) =>
                  setForm({ ...form, password: password })
                }
                secureTextEntry
              />
            </View>
          )}

          <View className="">
            <Bounceable>
              <Button
                enableShadow
                disabled={isSubmitting}
                backgroundColor="#D9D9D9"
                onPress={onSubmit}
              >
                <Text className=" mr-5 text-[#0B4479] font-semibold text-lg">
                  Login
                </Text>
                <AntDesign name="rightcircle" size={24} color="#0B4479" />
              </Button>
            </Bounceable>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

export default SignIn;
