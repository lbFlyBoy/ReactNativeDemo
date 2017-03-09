/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

/*
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Image,
    TextInput
} from 'react-native';

var Dimensions = require('Dimensions');



export default class HelloWordOne extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>当前宽度是屏幕的：{Dimensions.get('window').height}</Text>
        <Image source={{uri:'https://img.alicdn.com/tps/TB1OvT9NVXXXXXdaFXXXXXXXXXX-520-280.jpg'}} style={styles.imageStyle}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'gray',
      flex:1,
    // flexDirection:'row',
    marginTop:25,
    justifyContent:'center',
    alignItems:'center'
  },
    imageStyle:{
      width:100,
        height:100,
        resizeMode:Image.resizeMode.contain
    }
});

AppRegistry.registerComponent('HelloWordOne', () => HelloWordOne);

*/

export default class imoocApp extends Component {

  constructor(props){
    super(props)
    this.state = {times: 0}
  }

  timesPuls(){
    let times = this.state.times
    times++;
    this.setState({
      times:times
    })
  }

  componentWillMount(){
    console.log("conponentWillMount")
  }

  componentDidMount(){
    console.log("conponentDidMount")
  }

  shouldComponentUpdate(){
    console.log("shouldComponentUpdate")
    return true;
  }

  componentWillUpdate(){
    console.log("ComponentWillUpdate")
  }

  componentDidUpdate(){
    console.log("ComponentDidUpdate")
  }

  render() {

    console.log("render");
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={this.timesPuls.bind(this)}>
          点我哦😯
        </Text>
        <Text style={styles.instructions}>
          你点了我{this.state.times}次
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('imoocApp', () => imoocApp);
