import { Link } from 'expo-router';
import React from 'react' ;
import { Text, View , StatusBar } from 'react-native';

function index() {
  return (
  <>

<StatusBar barStyle = "dark-content" hidden = {false} backgroundColor ="#00BCD4" translucent = {false}/>

<View style={{flex : 1 , backgroundColor : "white" , justifyContent : "center", alignItems : "center" , alignContent : "center"}}>
  <Text style={{color : "black" , fontSize : 40}} >
    | Index page |
  </Text>

  {/* <Link style={{color : "blue" , fontSize : 20}}  href="/details">Go to Details page </Link> */}

  </View>
  </>
  )
}

export default index
