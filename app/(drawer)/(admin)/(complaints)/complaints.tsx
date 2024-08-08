import LinearGradientWrapper from '@/components/shared/LinearGradientWrapper';
import React from 'react';
import {Alert, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { Divider, TextInput } from 'react-native-paper';
import { Button, Colors, ListItem, Text as TextUi } from 'react-native-ui-lib';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { Bounceable } from 'rn-bounceable';
import { router } from 'expo-router';
import AdminComplaintCard from '@/components/ui/AdminComplaintCard';
import UserCard from '@/components/ui/UserCard';

const index = () => {

  return (
    <LinearGradientWrapper>
     
      <View style={{ height: "100%"}}>
        <View className=' my-20'>
          <TextUi center className=" text-2xl font-bold">Users Data</TextUi>
        </View>
        <View className='bg-white min-h-full rounded-t-3xl px-10 py-6'>

        <TextUi className="mb-2 text-[#0B4479] text-lg font-semibold">Registered Users</TextUi>
        <ScrollView className=' flex-1 pt-2'>
         <View className=' mb-5 bg-[#EDEDEF] h-60 px-3 rounded-sm'>
          
            <ScrollView className='h-50'>
                <AdminComplaintCard/>
                <AdminComplaintCard/>
            </ScrollView>
         </View>

         <TextUi className="mb-2 text-[#0B4479] text-lg font-semibold">Registered Engineers</TextUi>
          <View className=' bg-[#EDEDEF] h-60 px-3 rounded-sm'>
              <ScrollView>
                 <UserCard/>
                 <UserCard/>
                 <UserCard/>
                 <UserCard/>
              </ScrollView>
          </View>
            
            
            
          </ScrollView>
         
        </View>
      </View>

    </LinearGradientWrapper>
  );
}

const styles = StyleSheet.create({})

export default index;
