import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-paper';
import { Button, ListItem,  Text as TextUi } from 'react-native-ui-lib';
import { Bounceable } from 'rn-bounceable';

const AdminComplaintCard = () => {
    return (
        <>
            <ListItem height={90} onPress={() => router.push('/complaint/1')}>
              <ListItem.Part middle column containerStyle={[ {}]}>
                <View className=' flex-row justify-between items-center mb-3'>
                    <View>
                        <ListItem.Part containerStyle={{marginBottom: 3}}>
                            <TextUi text60 numberOfLines={1}>{`User ${1}`}</TextUi>
                        </ListItem.Part>
                        <ListItem.Part>
                            <TextUi text70 numberOfLines={1}>
                                Member
                            </TextUi>
                        </ListItem.Part>
                    </View>

                    <View>
                        <Bounceable>
                            <Button size={"xSmall"} enableShadow backgroundColor="#D9D9D9" onPress={()=> router.navigate("/(drawer)/dashboard")}>
                                <TextUi center className='  text-[#0B4479] font-semibold text-lg'>Open</TextUi>
                                {/* <AntDesign name="rightcircle" size={24} color="#0B4479" /> */}
                            </Button>
                        </Bounceable>
                    </View>
                </View>
               
                  <ListItem.Part>
                    <TextUi text70 numberOfLines={2}>
                      Since: Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Cum nulla temporibus hic perspiciatis aperiam cumque, quos delectus eum unde sapiente, placeat dignissimos obcaecati rem! Quae alias dolor quibusdam hic perferendis?
                    </TextUi>
                  </ListItem.Part>
              </ListItem.Part>
              {/* {showEndContent && this.renderEndLabel()} */}
              
            </ListItem>
            <Divider  className='my-5 text-gray-500'/>
        </>
    );
}

const styles = StyleSheet.create({})

export default AdminComplaintCard;
