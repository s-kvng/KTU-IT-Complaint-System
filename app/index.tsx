import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Redirect, router } from "expo-router";
import { images } from "../constants";
import { Button } from "react-native-ui-lib";
import { Bounceable } from "rn-bounceable";
import { AntDesign } from "@expo/vector-icons";
import { useGlobalContext } from "@/context/GlobalProvider";

const App = () => {
  console.log("app screen");
  const { isLoading, isLoggedIn } = useGlobalContext();
  console.log(" -> ", isLoading, " ", isLoggedIn);

  if (!isLoading && isLoggedIn) return <Redirect href="/(drawer)" />;
  return (
    <SafeAreaView className="h-full">
      <LinearGradient
        colors={["#F4F4F4", "#FFf", "#0A4A6D"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.linearGradient}
        className="min-h-full justify-start items-center"
      >
        <ScrollView className="" style={{ height: "100%" }}>
          <Image
            source={images.computerFull}
            className="w-full max-w-[300px] "
            resizeMode="contain"
          />
          <View className="px-9 mb-10">
            <Text className="text-[#0B4479] text-center font-medium text-lg">
              Koforidua Technical University I.T Complaint System KTU-ICS
            </Text>
          </View>
          <View className="mt-20 px-8 ">
            <Bounceable>
              <Button
                enableShadow
                backgroundColor="#D9D9D9"
                onPress={() => router.push("/sign-in")}
              >
                <Text className=" mr-5 text-[#0B4479] font-semibold text-lg">
                  Get Started
                </Text>
                <AntDesign name="rightcircle" size={24} color="#0B4479" />
              </Button>
            </Bounceable>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  text: {
    color: "white",
  },
});

export default App;
