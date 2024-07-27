import LinearGradientWrapper from '@/components/shared/LinearGradientWrapper';
import React from 'react';
import {Alert, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { Divider, TextInput } from 'react-native-paper';
import { Button, Colors, ListItem, Text as TextUi } from 'react-native-ui-lib';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { Bounceable } from 'rn-bounceable';
import { router } from 'expo-router';
import ComplaintCard from '@/components/ui/ComplaintCard';

const index = () => {

  return (
    <LinearGradientWrapper>
     
      <View style={{ height: "100%"}}>
        <View className=' my-20'>
          <TextUi center className=" text-2xl font-bold">My Complaint</TextUi>
        </View>
        <View className='bg-white min-h-full rounded-t-3xl p-10'>
          <TextUi className="mb-5">Enter your complaint here</TextUi>

          <ScrollView className='bg-red-500 flex-1 px-3 pt-2'>
            <ComplaintCard/>
            <ComplaintCard/>
            <ComplaintCard/>
            <ComplaintCard/>
            <ComplaintCard/>
            <ComplaintCard/>
            <ComplaintCard/>
            
          </ScrollView>
         
        </View>
      </View>

    </LinearGradientWrapper>
  );
}

const styles = StyleSheet.create({})

export default index;
