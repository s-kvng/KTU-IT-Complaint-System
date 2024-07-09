import { View, Text, SafeAreaView, ScrollView , StyleSheet } from 'react-native'
import React from 'react'
import { Button, Text as TextUi } from 'react-native-ui-lib'
import { images } from '@/constants'
import { AntDesign } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { Bounceable } from 'rn-bounceable'

const SignIn = () => {
  return (
    <SafeAreaView className="h-full">
            <ScrollView style={{ height: "100%"}}>
                <LinearGradient
                            colors={['#F4F4F4', '#FFf', '#0A4A6D']}
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 1 }}
                            style={styles.linearGradient}
                            className='min-h-full justify-center items-center'
                >
                    <TextUi Text30 color="#0B4479">Login</TextUi>
                    <View>
                        <Bounceable>
                            <Button enableShadow backgroundColor="#D9D9D9">
                                <Text className=' mr-5 text-[#0B4479] font-semibold text-lg'>Get Started</Text>
                                <AntDesign name="rightcircle" size={24} color="#0B4479" />
                            </Button>
                        </Bounceable>
                    </View>

                </LinearGradient>
            </ScrollView>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    linearGradient:{
        flex: 1,
    },
})

export default SignIn