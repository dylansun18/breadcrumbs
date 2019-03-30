import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

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
