import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'


const UsersLayout = () => {
  return (
    <Stack>
    <Stack.Screen name="users" options={{headerShown: false}}/>
    {/* <Stack.Screen name="user/[id]" options={{headerTitle: 'User Details',
      presentation: "modal"}}/>
      <Stack.Screen name="engineer/[id]" options={{headerTitle: 'Engineer Details',
      presentation: "modal"}}/> */}
  </Stack>
  )
}

export default UsersLayout