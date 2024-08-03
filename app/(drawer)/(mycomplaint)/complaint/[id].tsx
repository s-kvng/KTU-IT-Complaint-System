import React from 'react';
import { StyleSheet, View , Text} from 'react-native';
import { Text as TextUi } from 'react-native-ui-lib';
import { useLocalSearchParams } from 'expo-router';
import LinearGradientWrapper from '@/components/shared/LinearGradientWrapper';


const ComplaintDetail = () => {
    const { id }  = useLocalSearchParams();
    return (
        <LinearGradientWrapper>
     
        <View style={{ height: "100%"}}>
          <View className=' my-20'>
            <TextUi center className=" text-2xl font-bold">My Complaint</TextUi>
          </View>
            <View className='bg-white min-h-full rounded-t-3xl p-10'>
                <TextUi className="mb-5 text-2xl font-bold text-sky-900">Enter your complaint here {id}</TextUi>
                <TextUi className=" text-sm text-gray-500 mb-8">Date</TextUi>

                <View className=' mb-8'>
                    <TextUi className=" text-lg">Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Sed vel velit non odio 
                        pulvinar bibendum. Donec at ipsum velit. Nulla facilisi. 
                        In hac habitasse platea dictumst.</TextUi>
                </View>

                <View className=''>
                    <TextUi className=" text-sm text-gray-500 mb-3">Ref No. - INT001</TextUi>
                    <TextUi className="text-lg text-blue-900">Resolved</TextUi>
                </View>
            </View>
        </View>
        </LinearGradientWrapper>
    );
}

const styles = StyleSheet.create({})

export default ComplaintDetail;
