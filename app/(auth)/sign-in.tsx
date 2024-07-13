import { View, Text, SafeAreaView, ScrollView , StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { Button, Text as TextUi } from 'react-native-ui-lib'
import { images } from '@/constants'
import { AntDesign } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { Bounceable } from 'rn-bounceable'
import { TextInput } from 'react-native-paper'
import { router } from 'expo-router'

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("")

  return (
    <SafeAreaView className="h-full">
            <ScrollView style={{ height: "100%"}}>
                <LinearGradient
                            colors={['#F4F4F4', '#FFf', '#0A4A6D']}
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 1 }}
                            style={styles.linearGradient}
                            className='min-h-[100vh] justify-center items-center gap-y-14'
                >
                    <TextUi className="font-bold text-2xl" color="#0B4479">Login</TextUi>
                    <View className='w-full px-10 gap-y-5'>
                            <TextInput
                            className='bg-transparent '
                            textColor='black'
                            placeholderTextColor="#000"
                                mode='outlined'
                                label="Email"
                                value={email}
                                onChangeText={email => setEmail(email)}
                            />
                            <TextInput
                                className='bg-transparent'
                                textColor='#000'
                                mode='outlined'
                                label="Password"
                                value={password}
                                onChangeText={password => setPassword(password)}
                            />
                    </View>
                    <View className=''>
                        <Bounceable>
                            <Button enableShadow backgroundColor="#D9D9D9" onPress={()=> router.navigate("/(drawer)/dashboard")}>
                                <Text className=' mr-5 text-[#0B4479] font-semibold text-lg'>Login</Text>
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