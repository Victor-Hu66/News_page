// import React from 'react';
// import {SafeAreaView, ScrollView, Text,View, StyleSheet,Image} from 'react-native';
// import MyBanner from './components/MyBanner';



// const App = () => {

//   const dataList = [
//     {
//       id:0,
//       img:require('./components/images/country.png'),
//       text:'Despite its exotic name, there\'s a very good reason you\'ve never booked a vacation to the Quilombo of Palmeres. Same goes for the Islands of Refreshment, the Fiume Endeavour and Neutral Moresnet.',
//       head:'The countries that went extinct',
//     },
//     {
//       id:1,
//       img:require('./components/images/Alfajore.png'),
//       text:'Step into a neighborhood bakery from Argentina to Peru, and you\'re likely to find these tender, filled cookies piled high behind the counter. The crumbly bite of shortbread gives way to a sweet layer of dulce de leche, a caramel-like candy made by gently cooking sweetened milk until it turns into a rich, mellow treat.',
//       head:'Alfajores, South America',
//     },
//     {
//       id:2,
//       img:require ('./components/images/Baklava.png'),
//       text:'Dozens of delicate layers melt into a single tender bite in this syrupy confection, which is among the sweetest legacies of the Ottoman Empire. While it remains a sought-after treat through the Levant, Balkans, the Caucasus and North Africa -- regions that were once ruled from Constantinople -- the spiritual home of baklava is surely the modern-day country of Turkey.',
//       head:'Baklava, Turkey',
//     }

//   ];

//   return(
//     <SafeAreaView>
//       <ScrollView>
//         <View>
//           <View>
//             <Text style={styles.header}>NEWS</Text>
//           </View>
//           <View>
//             {dataList.map((items) => {
//               return (
//                 <MyBanner
//                 img = {items.img}
//                 text = {items.text}
//                 author = {items.author}
//                 />
//             )
//             })}
             
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   header:{
//     fontWeight:'bold',
//     fontSize:20,
//   }
// })



import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import Banner from './components/MyBanner';
const data = [
  {
    id:0,
    img: require("./components/images/country.png"),
    text:'If Nadal can defeat Djokovic for his 13th championship at Roland Garros on Sunday,',
    head: 'Rafael Nadal Could Tie the Majors Record at the French Open.',
  },
  {
    id:1,
    img: require("./components/images/Alfajores.png"),
    text:'China Central Television, a state-run network, stopped airing N.B.A. games',
    head: 'Chinese State TV to Air N.B.A.',
  },
  {
    id:2,
    img: require("./components/images/Baklava.png"),
    text:'Sunday\'s game against the Cardinals could be in doubt as the N.F.L.\'s outbreak spreads, and the league reminded teams that players and coaches can be penalized ',
    head: 'Jets Send Team Home After Player Tests Positive for Coronavirus'
  },
]
const App = () => {
    return(
        <ScrollView>
            <SafeAreaView>
                <View>
                    <Text style={styles.header}>Lighthouse News</Text>
                    {data.map((item) => {
                        return(
                            <Banner
                            picture = {item.img}
                            title = {item.head}
                            text = {item.text}
                        />);
                        })}
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}
const styles= StyleSheet.create({
  header:{
    textAlign:"center",
    fontSize:27,
    fontWeight:"bold",
    color:"#e87e0d",
    margin:10,
    borderBottomColor:"#e87e0d",
    borderBottomWidth:1   
  },
});
export default App;