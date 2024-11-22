import React from 'react'
import { Image, ScrollView } from 'react-native';

import { Text, View, StatusBar, StyleSheet } from 'react-native'; ``




function User() {


  const arr = [
    { index: 1, name: "tony", rank: 1021 },
    { index: 2, name: "brush", rank: 1123 },
    { index: 3, name: "alice", rank: 1223 },
    { index: 4, name: "bob", rank: 1345 },
    { index: 5, name: "charlie", rank: 1456 },
    { index: 6, name: "david", rank: 1567 },
    { index: 7, name: "eve", rank: 1678 },
    { index: 8, name: "frank", rank: 1789 },
    { index: 9, name: "grace", rank: 1890 },
    { index: 10, name: "hannah", rank: 1991 },
    { index: 11, name: "ivan", rank: 2023 },
    { index: 12, name: "judy", rank: 2134 },
    { index: 13, name: "kyle", rank: 2245 },
    { index: 14, name: "lisa", rank: 2356 },
    { index: 15, name: "mike", rank: 2467 },
    { index: 16, name: "nina", rank: 2578 },
    { index: 17, name: "oscar", rank: 2689 },
    { index: 18, name: "paul", rank: 2790 },
    { index: 19, name: "queen", rank: 2891 },
    { index: 20, name: "ryan", rank: 2992 },
    { index: 21, name: "sara", rank: 3093 },
    { index: 22, name: "tim", rank: 3194 },
    { index: 23, name: "uma", rank: 3295 },
    { index: 24, name: "victor", rank: 3396 },
    { index: 25, name: "wendy", rank: 3497 },
    { index: 26, name: "xander", rank: 3598 },
    { index: 27, name: "yvonne", rank: 3699 },
    { index: 28, name: "zack", rank: 3790 },
  ];
  



  return (

    <View style={{ flex: 1,  }}>


      <View style={styles.uperbox}>

     
          <Text style={styles.upertext}>Leader Board</Text>
        

        <View style={styles.upersecondbox}>

          <View style={[styles.maincard , {marginTop : 30}]}>
            <Image style={styles.maincard_image} source={{ uri: 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp' }} />
            <Text  style={styles.maincard_text}>Angle</Text>
           
           <View style={styles.maincard_rank}>
            <Text >3</Text>
           </View>
          </View>

          <View style={styles.maincard}>
            <Image style={styles.maincard_image} source={{ uri: 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp' }} />
            <Text  style={styles.maincard_text}>Angle</Text>
           
           <View style={styles.maincard_rank}>
            <Text >1</Text>
           </View>
          </View>

          <View style={[styles.maincard , {marginTop : 30}]}>
            <Image style={styles.maincard_image} source={{ uri: 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp' }} />
            <Text  style={styles.maincard_text}>Angle</Text>
           
           <View style={styles.maincard_rank}>
            <Text >2</Text>
           </View>
          </View>


          

        

         

        </View>

      </View>

      <ScrollView style={styles.lowerbox}>
   

      {
         arr?.map((item, index) => {
          return (
            <View key={index}  style={styles.lowerbox_li}>
          
            <View style={styles.lowerbox_li_one}>
              <Text style={styles.lowerbox_li_index}>{item.index}</Text>
              <View style={styles.lowerbox_li_image_box}>
                   <Image style={styles.lowerbox_li_image} source={{ uri: 'https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg' }} />
                   <Text style={styles.lowerbox_li_name}>{item.name}</Text>
              </View>
            </View>

            <Text style={styles.lowerbox_li_rank}>
             {item.rank}
            </Text>
       </View>

          );
        })
      }



        


    
          

      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({

  uperbox: {
   width :"100%",

    backgroundColor: "#6286a3",
      borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    paddingTop : 30 ,

    textAlign : "center" ,

      // iOS shadow
      // shadowColor: '#000',
      // shadowOffset: { width: 0, height: 5 },
      // shadowOpacity: 3,
      // shadowRadius: 4,
  
      // Android shadow
      // elevation: 7,


  }
  , 

  upertext :{
    fontSize : 30 ,
    fontWeight : 500 ,
    textAlign : "center" ,
     
  } ,

  upersecondbox: {
    flexDirection : "row",
    gap :30 ,
    paddingVertical:  50,
    justifyContent : "center",
  },

  maincard : {

    height: 140 ,
     position: "relative",
    backgroundColor : "#345169" ,
    alignItems : "center",
    
    padding : 10 ,
   borderRadius :20 

  }

  , 
  maincard_image :{
    width : 70,
    height : 80 ,
    borderRadius : 20 ,
    resizeMode : "cover"
  },

  maincard_text : {
    marginTop : 10 , 
    color : "#FFFFFF",
  
  },

  maincard_rank : {
    position : "absolute",
     bottom : -15 ,
     width : 30,
    height : 30,
    justifyContent : "center" ,
    alignItems : "center" ,
   backgroundColor : "orange",
   borderRadius :20 
  },

  // lowerbox : {
  //   backgroundColor : "red",
  // },
  lowerbox_li : {
    flexDirection : "row",
    justifyContent : "space-between",
    alignItems : "center",
    paddingVertical : 10,
    paddingHorizontal :30 ,
    // backgroundColor : "red",
    // borderBottomWidth: 1 ,
    // borderBottomColor : "black",
    marginVertical :4,
  },
  lowerbox_li_one : {
    flexDirection : "row",
    justifyContent : "center",
    alignItems : "center",
    gap : 30 ,
    
  } ,
  lowerbox_li_index : {
    fontWeight : 500 ,
  },
  lowerbox_li_image_box : {
    flexDirection : "row",
    justifyContent : "center",
    alignItems : "center",
    gap :20
  },
  lowerbox_li_image :{
    width : 40,
    height : 40 ,
    borderRadius : 50 ,
    resizeMode : "cover"
  } ,
  lowerbox_li_name : {
    fontWeight : 500 ,
    fontSize : 17
  } ,
  lowerbox_li_rank : {
    fontWeight : 700 ,
    fontSize : 17 ,
    color :"orange"
  } ,



});

export default User
