import { useEffect } from 'react';
import { View as UiView , Avatar, Text as UiText  } from 'react-native-ui-lib';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { router , usePathname} from 'expo-router';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';


import { useColorScheme } from '@/components/useColorScheme';


const example = 
    {
        title: 'Image with fade in animation',
        size: 40,
        animate: true,
        imageProps: {animationDuration: 500},
        source: {uri: 'https://static.pexels.com/photos/60628/flower-garden-blue-sky-hokkaido-japan-60628.jpeg'}
      }

const CustomDrawerContent = (props: any) => {
  const path = usePathname();
  const colorScheme = useColorScheme();

  useEffect(()=>{
    console.log(path)
  },[path])

  const getBackgroundColor = (targetPath: string) => {
    if (path === targetPath) {
      return colorScheme === 'dark' ? '#fff' : '#333';
    }
    return colorScheme === 'dark' ? 'transparent' : 'transparent';
  };

  const getLabelColor = (targetPath: string) => {
    if (path === targetPath) {
      return colorScheme === 'dark' ? '#333' : '#fff';
    }
    return colorScheme === 'dark' ? '#fff' : '#111';
  };

  const getIconColor = (targetPath: string) => {
    if (path === targetPath) {
      return colorScheme === 'dark' ? '#333' : '#fff';
    }
    return colorScheme === 'dark' ? '#fff' : '#111';
  };


  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: colorScheme === "dark" ? "#000" : "#fff", flex: 1, borderRightWidth: 1, borderRightColor: colorScheme === "dark" ? "#111" : "#fff", position: "relative"}}>
      <UiView paddingL-15 marginB-30 paddingV-15 className=' border-b-[1px]  border-gray-500 dark:border-gray-700 border-opacity-50'>
        <Avatar  {...example} onPress={() => console.log("avatar")}/>
        <UiText marginT-7 className=" text-black dark:text-gray-400">@user1</UiText>
      </UiView>

    <DrawerItem
        icon={({ color, size, focused})=>(
          <MaterialCommunityIcons name="human-greeting-variant" 
                size={24} 
                color={getIconColor('/dashboard')} />
        )}
        label={"Dashboard"}
        labelStyle={[styles.navItemLabel, {color : getLabelColor('/dashboard')}]}
        style={{ backgroundColor: getBackgroundColor('/dashboard')}}
        onPress={()=> router.push("/dashboard")}
    />


    <DrawerItem
        icon={({ color, size, focused})=>(
          <MaterialIcons name="app-settings-alt" 
              size={24} 
              color={getIconColor('/complaint')} />
        )}
        label={"Add Complaint"}
        labelStyle={[styles.navItemLabel, {color : getLabelColor('/complaint')} ]}
        style={{ backgroundColor: getBackgroundColor('/complaint')}}
        onPress={()=> router.push("/complaint")}
      />  
    
    <DrawerItem
        icon={({ color, size, focused})=>(
          <MaterialCommunityIcons name="human-greeting-variant" 
                size={24} 
                color={getIconColor('/')} />
        )}
        label={"My Compliant"}
        labelStyle={[styles.navItemLabel, {color : getLabelColor('/')}]}
        style={{ backgroundColor: getBackgroundColor('/')}}
        onPress={()=> router.push("/(mycomplaint)")}
    />

    {/* Admin drawer list */}
    <DrawerItem
        icon={({ color, size, focused})=>(
          <MaterialCommunityIcons name="human-greeting-variant" 
                size={24} 
                color={getIconColor('/(admin)/admin-dashboard')} />
        )}
        label={"Dashboard"}
        labelStyle={[styles.navItemLabel, {color : getLabelColor('/(admin)/admin-dashboard')}]}
        style={{ backgroundColor: getBackgroundColor('/(admin)/admin-dashboard')}}
        onPress={()=> router.push("/(admin)/admin-dashboard")}
    />

    <DrawerItem
        icon={({ color, size, focused})=>(
          <MaterialIcons name="app-settings-alt" 
              size={24} 
              color={getIconColor('/settings')} />
        )}
        label={"Settings"}
        labelStyle={[styles.navItemLabel, {color : getLabelColor('/settings')} ]}
        style={{ backgroundColor: getBackgroundColor('/settings')}}
        onPress={()=> router.push("/(drawer)/(tabs)/(settings)")}
      />

<DrawerItem
        icon={({ color, size, focused})=>(
          <MaterialIcons name="app-settings-alt" 
              size={24} 
              color={getIconColor('/logout')} />
        )}
        label={"Logout"}
        labelStyle={[styles.navItemLabel, {color : getLabelColor('/logout')} ]}
        style={{ position: 'absolute' , bottom: 40, left: 0, right: 0}}
        onPress={()=> router.push("/sign-in")}
      />
    </DrawerContentScrollView>
  )
}


export default function DrawerLayout() {
  
  
  return (
   
      <Drawer
      drawerContent={(props)=> <CustomDrawerContent {...props}/>}
        screenOptions={{ headerShown: true , swipeEdgeWidth: 0}}
      >
        <Drawer.Screen
          name="dashboard" // This is the name of the page and must match the url from root
          options={{
            title: 'Dashboard',
          }}
        />

        <Drawer.Screen
          name="complaint" // This is the name of the page and must match the url from root
          options={{
            title: 'Add complaint',
          }}
        />

        <Drawer.Screen
          name="(mycomplaint)" // This is the name of the page and must match the url from root
          options={{
            title: 'My Complaint',
          }}
        />

      </Drawer>
       
      

  );
}


const styles = StyleSheet.create({
 navItemLabel: {
  marginLeft: -15,
  fontSize: 18,
 }
})