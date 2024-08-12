import React from 'react';
import { StyleSheet, View , Text} from 'react-native';
import { Picker, Text as TextUi } from 'react-native-ui-lib';
import { useLocalSearchParams } from 'expo-router';
import LinearGradientWrapper from '@/components/shared/LinearGradientWrapper';
import { longOptions } from '@/constants';
import { Entypo } from '@expo/vector-icons';
import { Divider } from 'react-native-paper';


const AdminComplaintDetail = () => {
    const { id }  = useLocalSearchParams();

    const [engineer, setEngineer] = React.useState('');
    return (
        <LinearGradientWrapper>
     
        <View style={{ height: "100%"}}>
          <View className=' my-20'>
            <TextUi center className=" text-2xl font-bold">Complaint Detail</TextUi>
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
                    <TextUi className="text-lg text-blue-900">Assigned To: <TextUi className="text-gray-500">Gabby</TextUi> </TextUi>
                    <TextUi className="text-lg text-blue-900">Status : <TextUi className="text-gray-500" >Pending</TextUi></TextUi>
                </View>

                <View className='mt-5'>
                <Picker
                    label="Assign an Engineers"
                    placeholder="Assign an Engineer"
                    useWheelPicker
                    value={engineer}
                    onChange={wheelPickerValue => setEngineer(wheelPickerValue)}
                    trailingAccessory={<Entypo name="chevron-down" size={24} color="black" />}
                    items={longOptions}
                />
                <Divider/>
            </View>
            </View>
        </View>
        </LinearGradientWrapper>
    );
}

const styles = StyleSheet.create({})

export default AdminComplaintDetail;
