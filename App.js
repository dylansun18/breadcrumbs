import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

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
      <View style={styles.container1}>
        <Text style={styles.title}>Breadcrumbs</Text>
        <TouchableOpacity style={styles.view1} onPress={() => this.props.navigation.navigate('Main')}>
          <Text style={styles.subtitle}>Tap here to enter</Text>
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
      <View style={styles.container2}>
        <View style={styles.cam}>
          
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}> 
            <Ionicons name="md-add-circle" size={32} color="white" />
            <Text style={styles.btext}>Toss a note </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}> 
            <Ionicons name="md-settings" size={32} color="white" />
            <Text style={styles.btext}>Settings</Text>
          </TouchableOpacity>
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
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 37,
  },
  subtitle: {
    fontSize: 18,
  },
  view1: {
    backgroundColor: 'red',
    marginTop:5,
    padding:3
  },
  cam: {
    width:300,
    height:450,
    marginTop:50,
  },
  buttons: {
    width:300,
    height:100,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    width:100,
    backgroundColor: '#738382',
    borderRadius: 5,
    marginRight:10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btext: {
    fontSize:15,
    textAlign: 'center',
    color: 'white'
  }
});
