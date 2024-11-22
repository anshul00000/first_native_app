import React, { useState } from 'react'
import { Button, FlatList, Modal, Text, View } from 'react-native'




function Profile() {

  const [isopen , setisopen]  = useState(false);

  return (
    <>
  
  <Modal visible={isopen} animationType="slide" transparent>
    <View style={{ width : "100%" , height : "100%",margin : 20 , justifyContent : "center", alignItems : "center" }}>
      
      <View style={{ width : "100%" , height : "70%", borderRadius :10 ,  backgroundColor : "black" , justifyContent : "center", alignItems : "center" }}>
      <Text style={{color : "white" , fontSize : 40}} >
        | Profile page |
      </Text>

      
      <Button title="Close" onPress={()=>setisopen(false)} />

      </View>

    </View>
  </Modal>

  
  <FlatList 
  data={[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,1, ,2 ,4 ,5 ,5 ,5, 6, 4, 6 ,7 ,7, 1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,1, ,2 ,4 ,5]}
  
  horizontal

  contentContainerStyle={{justifyContent : "center" , alignItems : "center"}}

  ListHeaderComponent={
    <View style={{ width : 400 , height : 100  ,margin : 20 , borderRadius :10 ,  backgroundColor : "lightblue" , justifyContent : "center", alignItems : "center" }}>
      <Text>| HEADER |</Text>
      <Button title="Open" onPress={()=>setisopen(true)} />
    
    </View>
  }

  ListFooterComponent={
    <View style={{ width : 400 ,height : 100  ,margin : 20 , borderRadius :10 ,  backgroundColor : "#800000" , justifyContent : "center", alignItems : "center" }}>
     <Text>| FOOTER |</Text> 
    </View>
  }


 
  renderItem={({item})=>{

    return(
   <View style={{ width : 400 ,height : 500 ,margin : 20 , borderRadius :10 ,  backgroundColor : "black" , justifyContent : "center", alignItems : "center" }}>

  <Text style={{color : "white" , fontSize : 40}} >
  | {item} |
  </Text>


  </View>
      
      
    )


  }}

  />

  
  

  {/* <Link style={{color : "blue" , fontSize : 20}}  href="/details">Go to Details page </Link> */}

    </>
  )
}


export default Profile
