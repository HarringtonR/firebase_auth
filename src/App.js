import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{
  state = {
    loggedIn: null
  }
  componentWillMount(){
   firebase.initializeApp({
    apiKey: '',
    authDomain: 'authentication-ad860.firebaseapp.com',
    databaseURL: 'https://authentication-ad860.firebaseio.com',
    projectId: 'authentication-ad860',
    storageBucket: 'authentication-ad860.appspot.com',
    messagingSenderId: '870254100330'

   })

   firebase.auth().onAuthStateChanged((user) => {
    if(user){
      this.setState({
        loggedIn: true
      });
    } else {
      this.setState({
        loggedIn: false
      })
    }
   });
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
         return (
            <CardSection>
              <Button onPress ={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          )
      case false:
        return <LoginForm />
      default:
        return (
          <View style={styles.spinnerContainer}>
            <Spinner size='large' />
          </View>
        )
    }
  }

  render() {
    return (
      <View style={styles.spinnerContainer}>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerContainer:{
    flex: 1,
  }
}

export default App;
