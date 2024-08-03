import LinearGradientWrapper from '@/components/shared/LinearGradientWrapper';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text as TextUi } from 'react-native-ui-lib';

const AdminDashboard = () => {
    return (
        <LinearGradientWrapper>
     
            <View style={{ height: "100%"}}>
                <View className=' my-20'>
                <TextUi center className=" text-2xl font-bold">Welcome Admin</TextUi>
                </View>
                <View className='bg-white min-h-full rounded-t-3xl p-7 pt-10'>
                <TextUi className="mb-5">Enter your complaint here</TextUi>



                <ScrollView className='bg-red-500 flex-1 px-1 pt-2'>
                    <View className=' flex flex-row gap-5 flex-wrap'>
                        <View className=' bg-blue-500 h-28 w-40 justify-center items-center shadow-lg rounded-md'>
                            <TextUi className=" text-xl">Complaints</TextUi>
                            <TextUi className="font-semibold text-lg">12</TextUi>
                        </View>

                        <View className=' bg-green-500 h-28 w-40 justify-center items-center shadow-lg rounded-md'>
                            <TextUi className=" text-xl">Forwarded</TextUi>
                            <TextUi className="font-semibold text-lg">12</TextUi>
                        </View>

                        <View className=' bg-purple-500 h-28 w-40 justify-center items-center shadow-lg rounded-md'>
                            <TextUi className=" text-xl">Normal Staff</TextUi>
                            <TextUi className="font-semibold text-lg">12</TextUi>
                        </View>

                        <View className=' bg-amber-500 h-28 w-40 justify-center items-center shadow-lg rounded-md'>
                            <TextUi className=" text-xl">Engineers</TextUi>
                            <TextUi className="font-semibold text-lg">12</TextUi>
                        </View>
                    </View>
                    <TextUi>down</TextUi>
                </ScrollView>
                
                </View>
            </View>

        </LinearGradientWrapper>
    );
}

const styles = StyleSheet.create({})

export default AdminDashboard;
