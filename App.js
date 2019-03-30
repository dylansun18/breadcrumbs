import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';



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
