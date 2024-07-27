import React from 'react';
import { StyleSheet, View , Text} from 'react-native';
import { useLocalSearchParams } from 'expo-router';


const ComplaintDetail = () => {
    const { id }  = useLocalSearchParams();
    return (
        <View>
            <Text className='text-white'>
                Complaint details {id}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ComplaintDetail;
