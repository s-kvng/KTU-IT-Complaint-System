import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'


const ComplaintLayout = () => {
  return (
    <Stack>
    <Stack.Screen name="index" options={{headerShown: false}}/>
    <Stack.Screen name="complaint/[id]" options={{headerTitle: 'Complaint Details',
      presentation: "modal"}}/>
  </Stack>
  )
}

export default ComplaintLayout