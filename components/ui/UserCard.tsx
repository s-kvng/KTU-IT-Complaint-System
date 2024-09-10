import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Divider } from "react-native-paper";
import { Button, ListItem, Text as TextUi } from "react-native-ui-lib";
import { Bounceable } from "rn-bounceable";

const UserCard = ({ user }) => {
  return (
    <>
      <ListItem
        className=" -mb-2"
        height={90}
        onPress={() => router.push(`/user/${user.$id}`)}
      >
        <ListItem.Part middle column containerStyle={[{}]}>
          <View className=" flex-row justify-between items-center">
            <View>
              <ListItem.Part containerStyle={{ marginBottom: 0 }}>
                <TextUi
                  text60
                  numberOfLines={1}
                >{`${user?.firstname} ${user?.lastname}`}</TextUi>
              </ListItem.Part>
            </View>

            <View>
              <Bounceable>
                <Button
                  size={"xSmall"}
                  enableShadow
                  backgroundColor="#CDDAE1"
                  onPress={() => router.navigate(`/user/${user.$id}`)}
                >
                  <TextUi
                    center
                    className="  text-[#0B4479] font-semibold text-lg"
                  >
                    Open
                  </TextUi>
                  {/* <AntDesign name="rightcircle" size={24} color="#0B4479" /> */}
                </Button>
              </Bounceable>
            </View>
          </View>
        </ListItem.Part>
        {/* {showEndContent && this.renderEndLabel()} */}
      </ListItem>
      <Divider className=" text-gray-500" />
    </>
  );
};

const styles = StyleSheet.create({});

export default UserCard;
