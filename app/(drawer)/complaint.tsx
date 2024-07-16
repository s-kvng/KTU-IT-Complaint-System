import LinearGradientWrapper from '@/components/shared/LinearGradientWrapper';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { Divider, TextInput } from 'react-native-paper';
import { Button, Colors, Picker, Text as TextUi } from 'react-native-ui-lib';
import { longOptions } from '@/constants';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { Bounceable } from 'rn-bounceable';

const AddComplaint = () => {
  const [text, setText] = React.useState<string | undefined >(undefined);
  return (
    <LinearGradientWrapper>
      <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={{ height: "100%"}}>
        <View className=' my-20'>
          <TextUi center className=" text-2xl font-bold">Make a Complaint</TextUi>
        </View>
        <View className='bg-white min-h-full rounded-t-3xl p-10'>
          <TextUi>Enter your complaint here</TextUi>
          <View className=' gap-y-8'>
          <TextInput
              className='bg-white '
              textColor='black'
              placeholderTextColor="#000"
                  mode='outlined'
                  activeOutlineColor='black'
                  label="Phone Number"
                  textContentType='telephoneNumber'
                  value={text}
                  onChangeText={text => setText(text)}
                  right={<TextInput.Icon icon="account-hard-hat"/>}
              />

              <TextInput
              className='bg-white'
              textColor='black'
              placeholderTextColor="#000"
                  mode='outlined'
                  label="Office Number"
                  value={text}
                  onChangeText={text => setText(text)}
                  right={<TextInput.Icon icon="call-split"/>}
              />

            <View>
              <Picker
                label="From (Department/Unit name)"
                placeholder="Pick a Language"
                useWheelPicker
                value={text}
                onChange={wheelPickerValue => setText(wheelPickerValue)}
                trailingAccessory={<Entypo name="chevron-down" size={24} color="black" />}
                items={longOptions}
              />
              <Divider/>
            </View>

              <View>
                <Picker
                  placeholder="Job Type"
                  floatingPlaceholder
                  value={text}
                  enableModalBlur={false}
                  onChange={item => setText(item)}
                  topBarProps={{title: 'Languages'}}
                  trailingAccessory={<Entypo name="chevron-down" size={24} color="black" />}
                  // style={{color: Colors.red20}}
                  useWheelPicker
                  // searchPlaceholder={'Job Type'}
                  // searchStyle={{color: Colors.blue30, placeholderTextColor: Colors.grey50}}
                  // onSearchChange={value => console.warn('value', value)}
                  items={longOptions}
                />
                <Divider/>
              </View>

              <View>
                <TextUi>
                  Please give a detailed description of your issue in the text box below
                </TextUi>
                <TextInput
                className='bg-white h-36'
                textColor='black'
                multiline
                placeholderTextColor="#000"
                    mode='outlined'
                    label="Description"
                    value={text}
                    onChangeText={text => setText(text)}
                />
              </View>
          </View>
          <View className=' mt-5 px-10'>
            <Bounceable>
                <Button enableShadow backgroundColor="#D9D9D9" onPress={()=> router.navigate("/(drawer)/dashboard")}>
                    <TextUi className=' mr-5 text-[#0B4479] font-semibold text-lg'>Submit</TextUi>
                    <AntDesign name="rightcircle" size={24} color="#0B4479" />
                </Button>
            </Bounceable>
          </View>
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradientWrapper>
  );
}

const styles = StyleSheet.create({})

export default AddComplaint;
