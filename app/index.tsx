import React from 'react';
import { StyleSheet, View , Text, Image, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import {images} from "../constants"


const App = () => {

    console.log("app screen")
    return (
        <SafeAreaView className="h-full">
            <ScrollView style={{ height: "100%"}}>
                <LinearGradient
                            colors={['#F4F4F4', '#FFf', '#0A4A6D']}
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 1 }}
                            style={styles.linearGradient}
                            className='min-h-full justify-start items-center'
                >
                <Image source={images.computerFull} className='w-full max-w-[300px] ' resizeMode="contain"/>
                   <View>
                    <Text style={styles.text}>
                        Koforidua Texhnical University I.T Complaint System UGBS-ICS
                    </Text>
                   </View>
                    <Text style={styles.text}>Welcome to React Native</Text>
                </LinearGradient>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    linearGradient:{
        flex: 1,
    },
    text: {
        color: 'white',
    }
})

export default App;
