import React, {Component} from 'react';
import {View, Text, StyleSheet , ImageBackground} from 'react-native';
import HomeScreen from './HomeScreen';

const image = require('../assests/Splash.png')


class SplashScreen extends Component {
componentDidMount() {
  setTimeout(() => {
    this.props.navigation.navigate('Home')
    },2000);
}
render() {
    return (
      <View style={styles.container}>
        <ImageBackground 
        source = {image}
        resizeMode = 'cover'
        style={styles.image}
        ></ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  image:{
    flex:1,
  }
})


export default SplashScreen;