import LinearGradientWrapper from '@/components/shared/LinearGradientWrapper';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-paper';
import { Avatar, Text as TextUi, View as ViewUi , Button} from 'react-native-ui-lib';
import { Bounceable } from 'rn-bounceable';


const example = 
    {
        title: 'Image with fade in animation',
        size: 60,
        animate: true,
        imageProps: {animationDuration: 500},
        source: {uri: 'https://static.pexels.com/photos/60628/flower-garden-blue-sky-hokkaido-japan-60628.jpeg'}
      }

const UserDetail = () => {
    return (
        <LinearGradientWrapper>
     
        <View style={{ height: "100%"}}>
            <View className=' my-20'>
            <TextUi center className=" text-2xl font-bold">Registered User</TextUi>
            </View>
            <View className='bg-white min-h-full rounded-t-3xl p-7 pt-3'>
            <ViewUi paddingL-15 marginB-20 paddingV-15 className=' flex-row justify-center items-center'>
                <View>
                    <Avatar  {...example} onPress={() => console.log("avatar")}/>
                    <TextUi marginT-7 className=" text-[#0B4479] text-lg font-semibold">@user1</TextUi>
                </View>
            </ViewUi>

            <ScrollView className='flex-1 px-1 pt-2'>
                <View className=' '>
                  <ViewUi>
                    <TextUi>
                            <TextUi className=" font-semibold">Name : </TextUi>
                            John Doe
                    </TextUi>
                    <Divider  className=' text-gray-500 my-4'/>
                  </ViewUi>

                  <ViewUi marginT-15>
                    <TextUi>
                            <TextUi className=" font-semibold">Name : </TextUi>
                            John Doe
                    </TextUi>
                    <Divider  className=' text-gray-500 my-4'/>
                  </ViewUi>

                  <ViewUi marginT-15>
                    <TextUi>
                            <TextUi className=" font-semibold">Name : </TextUi>
                            John Doe
                    </TextUi>
                    <Divider  className=' text-gray-500 my-4'/>
                  </ViewUi>

                  <ViewUi marginT-15>
                    <TextUi>
                            <TextUi className=" font-semibold">Name : </TextUi>
                            John Doe
                    </TextUi>
                    <Divider  className=' text-gray-500 my-4'/>
                  </ViewUi>


                  <ViewUi marginT-15>
                    <TextUi>
                            <TextUi className=" font-semibold">Name : </TextUi>
                            John Doe
                    </TextUi>
                    <Divider  className=' text-gray-500 my-4'/>
                  </ViewUi>

                  <ViewUi marginT-15>
                    <TextUi>
                            <TextUi className=" font-semibold">Name : </TextUi>
                            John Doe
                    </TextUi>
                    <Divider  className=' text-gray-500 my-4'/>
                  </ViewUi>

                </View>
            </ScrollView>

            <View className=' mt-10 flex-1 items-center'>
                        <Bounceable>
                            <Button size={"medium"}
                              borderRadius={7} 
                              enableShadow 
                              style={{width: 100}}
                              backgroundColor="#CDDAE1" 
                              onPress={()=> router.navigate("/(drawer)/dashboard")}
                              >
                                <TextUi center className='  text-[#0B4479] font-semibold text-lg'>Delete</TextUi>
                                {/* <AntDesign name="rightcircle" size={24} color="#0B4479" /> */}
                            </Button>
                        </Bounceable>
                    </View>
            
            </View>
        </View>

    </LinearGradientWrapper>
    );
}

const styles = StyleSheet.create({})

export default UserDetail;
