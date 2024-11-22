import { Entypo , MaterialCommunityIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

import { Text, View , StatusBar } from 'react-native';



function TabLayout() {



  return (
    <Tabs screenOptions={{
         headerShown: true,
      }}>








<Tabs.Screen
        name="User"
        options={{
          title: 'User',
          tabBarIcon: ({ color, focused }) => (
            <Entypo color={color} size={28} name="user" />
            // <MaterialCommunityIcons size={28} name='emoticon-cool-outline'> </MaterialCommunityIcons>
           ),
        }}

        
/>


<Tabs.Screen
        name="Profile"
        options={{
          title: 'Cool',
          tabBarIcon: ({ color, focused }) => {
           return (
           <View style={{width : 60 , height : 60 ,borderRadius : 50 , backgroundColor : "black" , justifyContent : "center" , alignItems :"center"}}>
            
            <MaterialCommunityIcons color={color} size={28} name='emoticon-cool-outline'> </MaterialCommunityIcons> 
           {/* <Entypo color={color} size={28} name="user" /> */}
          
            </View>);   
           },
        }}
        
/>




<Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Entypo color={color} size={28} name="home" />
           ),
        }}
        
/>






    </Tabs>
  )
}

export default TabLayout
