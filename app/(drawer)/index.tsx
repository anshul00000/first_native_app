import MyButton from '@/Components/MyButton';
import { Link, useRouter } from 'expo-router';
import  React,  { useState ,  useEffect } from 'react' ;
import { Text, View , Button , StyleSheet, StatusBar ,SafeAreaView, Image, TextInput, ScrollView} from 'react-native';

// import {useFonts ,Poppins_600SemiBold_Italic ,Poppins_300Light} from "@expo-google-fonts/poppins" ;

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';





import Modal from "react-native-modal";

// import MyButton from "@/components/MyButton";

SplashScreen.preventAutoHideAsync();

function index() {
  
  

  const [loaded] = useFonts({
   
    'Inter-Black': require('@/assets/fonts/font.ttf'),

  });

  useEffect(() => {
    if (loaded) {
      const hideSplash = async () => {
        await SplashScreen.hideAsync();
      };
      hideSplash();
    }
  }, [loaded]);

  // if (!loaded ) {
  //   return null;
  // }

  const Router = useRouter();

  const[ user , setuser] = useState({

    email : '',
    password : ' '

  })

  const my_fun=()=>{
    Router.navigate("/Profile");
  }


  const [isopen , setisopen]  = useState(false);



  return (
  <>

<StatusBar barStyle = "dark-content" hidden = {false} backgroundColor ="#00BCD4" translucent = {false}/>


{/* <View style={{ flex: 1 , backgroundColor: "red" }}> */}
      <Modal isVisible={isopen} animationIn={"shake"} animationOut={"bounce"} onBackdropPress={()=>setisopen(false)} onBackButtonPress={()=>setisopen(false)}  style={{backgroundColor : "red" , justifyContent : "center" , alignItems : "center"}}>
 

        <View style={{position : "relative", width : "60%",height : "70%" ,  backgroundColor: "lightblue" , justifyContent : "center" , alignItems : "center"}}>
          <Text style={{fontSize : 33 , fontFamily : "Inter-Black" }}>I am the modal content!</Text>
        </View>
      <Button title="Close" onPress={()=>setisopen(false)} />

      </Modal>
  {/* </View> */}


<ScrollView >
  
  {/* <Text style={{color : "black" , fontSize : 40}} >
    | Index page |
  </Text> */}

<View style={[styles.container , {marginTop : 100}]}>


{/* <MyButton /> */}


<Text>email = {user.email} </Text>
<Text>Password = {user.password} </Text>



    <Image source={require("@/assets/images/code_gif_background.gif")} style={{width : "100%" , height : 200 }}/>

  
  
    <TextInput placeholder='Password' onChangeText={(e)=>setuser({ ...user, password: e })}  style={styles.input}/>
    <TextInput placeholder='Email' onChangeText={(e)=>setuser({ ...user, email: e })} style={styles.input}/>


      <MyButton title={"Profile"} onprace={my_fun} />

      <Button title="Open modal" onPress={()=>setisopen(true)} />

 

{/* <MyButton title="go to Profile"/> */}

  {/* <Link style={{color : "blue" , fontSize : 20}}  href="/Profile">Go to Details page </Link> */}
  </View>
  </ScrollView>
  </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    marginBottom : 20,
    gap : 20 ,
    paddingHorizontal : 20 ,
    // backgroundColor: "#f5f5f5",
    // backgroundColor: "gray",
  },

  input : {
    padding : 10 , 
    borderWidth: 1 ,
    borderRadius : 2 ,
    // backgroundColor : "black"
    // border : 1,
  }


});


export default index
