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
