import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Animated, Easing, TextInput, TouchableOpacity, Alert } from 'react-native';
import bgimg from './assets/background-vc.png';
import elipse1 from './assets/elipse1.png';
import elipse2 from './assets/elipse2.png';
import elipse3 from './assets/elipse3.png';
import elipse4 from './assets/elipse4.png';
import elipse5 from './assets/elipse5.png';
import logo from './assets/vc-logo.png';
import mastercard from './assets/mastercard.png';
import wireless from './assets/wireless.png';


export default function App() {
  // Spin Animation //
  const spinValue = new Animated.Value(0);

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const spin = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 15000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => spin());
  };

  useEffect(() => {
    spin();
  });

  // Spin Animation //

  // Menu //
  // openMenu() {
  //   alert('It Works')
  // }


  // const Box = (props) => {
  //   const [isMenu, openMenu] = useState(true);
  //   return (
  //     <Text style={styles.box}></Text>
  //   );
  // }

  const pressHandler = () => {
    console.log()
  }


  return (
    <View style={styles.container}>
      {/* <Box style={styles.box}></Box> */}

      <TouchableOpacity onPress={() => pressHandler()}>
        <Animated.View style={{ transform: [{ rotate }] }}>
          <Image style={styles.elipse5} source={elipse5}></Image>
          <Image style={styles.elipse4} source={elipse4}></Image>
          <Image style={styles.elipse3} source={elipse3}></Image>
          <Image style={styles.elipse2} source={elipse2}></Image>
          <Image style={styles.elipse1} source={elipse1}></Image>
        </Animated.View>
      </TouchableOpacity>


      <TextInput style={styles.cardholder}>CARDHOLDER NAME</TextInput>
      <TextInput style={styles.cardnumber}>0592 3625 2546 9832</TextInput>
      <TextInput style={styles.debit}>debit</TextInput>
      <TextInput style={styles.expire}>01/26</TextInput>
      <Image style={styles.wireless} source={wireless}></Image>
      <Image style={styles.mastercard} source={mastercard}></Image>
      <Image style={styles.logo} source={logo}></Image>
      <Image style={styles.background} source={bgimg}></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C3B40',
    alignItems: 'center',
    justifyContent: 'center',
  },

  background: {
    transform: [{ rotate: '90deg' }]
  },

  // Rotational Menu //
  elipse1: {
    position: 'absolute',
    height: 200,
    width: 200,
    top: -100,
    right: -100,
  },

  elipse2: {
    position: 'absolute',
    height: 200,
    width: 200,
    top: -101.9,
    right: -105,
  },

  elipse3: {
    position: 'absolute',
    height: 200,
    width: 200,
    top: -99.5,
    right: -99.5,
  },

  elipse4: {
    position: 'absolute',
    height: 200,
    width: 200,
    top: -99.5,
    right: -99.5,
  },

  elipse5: {
    position: 'absolute',
    height: 200,
    width: 200,
    top: -99.5,
    right: -99.5,
  },

  box: {

    backgroundColor: 'red',
    borderRadius: 100,
    height: 100,
    width: 100,
    position: 'absolute',
  },

  // Rotational Menu //

  cardholder: {
    fontSize: 30,
    color: 'white',
    top: 450,
    right: -20,
    position: 'absolute',
    transform: [{ rotate: '90deg' }]
  },

  cardnumber: {
    fontSize: 30,
    color: 'white',
    top: 450,
    right: 70,
    position: 'absolute',
    transform: [{ rotate: '90deg' }]
  },

  debit: {
    top: 160,
    right: -2,
    color: 'white',
    fontSize: 20,
    position: 'absolute',
    transform: [{ rotate: '90deg' }]
  },

  expire: {
    top: 300,
    right: 315,
    position: 'absolute',
    color: 'white',
    fontSize: 20,
    transform: [{ rotate: '90deg' }]
  },

  logo: {
    height: 150,
    width: 150,
    top: 580,
    right: -30,
    position: 'absolute',
    transform: [{ rotate: '90deg' }]
  },

  mastercard: {
    height: 150,
    width: 150,
    top: 580,
    right: 250,
    position: 'absolute',
    transform: [{ rotate: '90deg' }]
  },

  wireless: {
    top: 220,
    right: -150,
    position: 'absolute',
    transform: [{ rotate: '90deg' }]
  },

});
