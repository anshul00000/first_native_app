import { Link } from 'expo-router'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';

function MyButton({title , onprace}) {
  return (
    <>


   <TouchableOpacity activeOpacity={0.6} onPress={onprace}>
        <Text style={styles.MYBUTTON} >
         {title}
        </Text>
        </TouchableOpacity>
     

    </>
  )
}


const styles = StyleSheet.create({

  MYBUTTON: {
    backgroundColor: "lightgreen",
    padding: 10,
    paddingHorizontal : 100 ,
    borderRadius: 5,
    // margin: 10,
    fontSize: 15,
    color: "black",
    // fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",

  }

});

export default MyButton
