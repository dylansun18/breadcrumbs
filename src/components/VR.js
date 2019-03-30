import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Main extends React.Component {

  static navigationOptions = {
    header: null
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
