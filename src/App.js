import React, {Component} from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';


export default class App extends Component{
  componentWillMount(){
   firebase.initalizeApp({

   })
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <Text> Auth App </Text>
      </View>
    );
  }
}
