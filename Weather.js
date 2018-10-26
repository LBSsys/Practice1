import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import PropTypes from "prop-types";

// export default class Weather extends Component {
//   render() {
//     return (<LinearGradient colors={["#00C6F8", "#005BEA"]} style={styles.container}>
//       <View style={styles.upper}>
//         <Ionicons color="white" size={144} name="ios-rainy"/>
//         <Text style={styles.temp}>35°</Text>
//       </View>
//       <View style={styles.lower}>
//         <Text style={styles.title}>Raining like a Fucker!!</Text>
//         <Text style={styles.subtitle}>For more info look outside</Text>
//       </View>
//     </LinearGradient>);
//   }
// }

 const weatherCases ={ //thyun made own branch 
   						//made develop branch
   						//made develop-david branch all done!!!
   Rain: {
     colors: ["#00C6F8", "#005BEA"],
     title: "Raining like a Fucker",
     subtitle: "For more info look ouside",
     icon: "weather-rainy"
   },
   Clear: {
     colors: ["#FEF253", "#FF7300"],
     title: "Sunny like a Fucker",
     subtitle: "Go outside MF",
     icon: "weather-sunny"
   },
   Thunderstorm: {
     colors: ["#00ECBC", "#007ADF"],
     title: "Storms like a Fucker",
     subtitle: "go inside MF",
     icon: "weather-lightning"
   },
   Clouds: {
     colors: ["#D7D2CC", "#304352"],
     title: "Clouds like a Fucker",
     subtitle: "Boring!!! MF",
     icon: "weather-cloudy"
   },
   Snow: {
     colors: ["#7DE2FC", "#B9B6E5"],
     title: "Cold like a Fucker",
     subtitle: "Do you want to build a snowman MF",
     icon: "weather-snowy"
   },
   Drizzle: {
     colors: ["#89F7FE", "#66A6FF"],
     title: "Drizzle like a Fucker",
     subtitle: "Is like rain MF",
     icon: "weather-hail"
   },
   Haze: {
     colors: ["#89F7FE", "#66A6FF"],
     title: "Haze like a Fucker",
     subtitle: "Is like rain MF",
     icon: "weather-fog"
   }
 }

function Weather({weatherName, temp }){
  //weatherName='Clear'
  return(
    <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
      <View style={styles.upper}>
         <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon}/>
         <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.lower}>
         <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
         <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired
  ,weatherName: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    fontSize: 48,
    color: 'white',
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    color: 'white',
    marginBottom: 10,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 24
  }
})
