import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const EngineersLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="messages" options={{ headerShown: false }} />
      {/* <Stack.Screen name="complaint-detail/[id]" options={{headerTitle: 'Complaint Details',
      presentation: "modal"}}/> */}
    </Stack>
  );
};

export default EngineersLayout;
