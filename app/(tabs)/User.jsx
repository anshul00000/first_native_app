import React from 'react'

import { Text, View , StatusBar } from 'react-native';``


function User() {
  return (
    <View style={{flex : 1 , backgroundColor : "black" , justifyContent : "center", alignItems : "center" , alignContent : "center"}}>
    <Text style={{color : "white" , fontSize : 40}} >
      | User page |
    </Text>
  
    {/* <Link style={{color : "blue" , fontSize : 20}}  href="/details">Go to Details page </Link> */}
  
    </View>
  )
}

export default User
