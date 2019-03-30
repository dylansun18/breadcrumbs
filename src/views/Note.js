import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button /* other libraries here */ } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

export default class Note extends React.Component {

  static navigationOptions = {
    header:null
  };

  state = {

  };

  componentDidMount() {
    // Called once after the component is mounted
  }

  componentDidUpdate() {
    // Called every time setState or forceUpdate is called
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style= {styles.title} >Notes</Text>
        
      </View>
    );
  }
}

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