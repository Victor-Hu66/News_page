// import React from 'react';
// import {Text, View,Image} from 'react-native';


// const MyBanner = (props) => {
//     return(
//         <View>

//             <Text>{props.head}</Text>

//         </View>
//     );
// };


// export default MyBanner;


import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';
const Banner = (props) =>{
    return(
    <View>
        <Image style={styles.imageContainer} source={props.picture}/>
        <Text style= {styles.header}>{props.title}</Text>
        <Text style= {styles.details}>{props.text}</Text>
    </View>
    )
} 
export default Banner;
const styles= StyleSheet.create({
    // container:{
    //   borderWidth:2,
    //   borderColor:"#3d3833",
    //   borderRadius:10,
    //   padding:10,
    //   margin:7,
    //   alignItems:"center",
    //   backgroundColor:"#f7e6d4",
    //   flex:1
    // },
    imageContainer:{
      width:370,
      height:220,
      borderRadius:10
    },
    details:{
      marginTop:7,
      fontWeight:"600",
      fontSize:17,
      textAlign:"center"
    },
    header:{
      fontStyle:"italic",
      alignSelf:"flex-start",
      marginTop:10,
      fontSize:15
    }
  });