import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

// import Main from './src/views/Main';
import NewNote from './src/views/NewNote';
import Note from './src/views/Note';
import Profile from './src/views/Profile';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header:null
  };
  state = {

  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Breadcrumbs</Text>
        <TouchableOpacity style={styles.view1} onPress={() => this.props.navigation.navigate('Main')}>
          <Text style={styles.subtitle} >Tap here to enter</Text>
        </TouchableOpacity>
        <Button style={{marginTop: 10}} title='New Note' onPress={() => navigate('NewNote')} />
        <Button style={{marginTop: 10}} title='Note' onPress={() => navigate('Note')} />
        <Button style={{marginTop: 10}} title='Profile' onPress={() => navigate('Profile')} />
      </View>
    );
  }
}

class MainScreen extends React.Component {
  static navigationOptions = {
    header:null
  };
  state = {

  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.cam}>
        <View style={styles.buttons}>

        </View>
      </View>

    );
  }
}

const MainNav = createStackNavigator({
  Home: HomeScreen,
  Main: MainScreen,
  NewNote: NewNote,
  Note: Note,
  Profile: Profile
},{
  initialRouteName: "Home"
});

const App = createAppContainer(MainNav);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 15,
  },
  view1: {
    backgroundColor: 'red'
  }
});
