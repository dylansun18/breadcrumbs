import React from 'react';
import {Alert, StyleSheet, Text, TextInput, AppRegistry, View, TouchableOpacity, Button } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from '../../App.js'


export default class NewNote extends React.Component {

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
    const {goBack} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Your Note:</Text>
        <TextInput
          ref={input => { this.textInput = input }} // allows us to reference & clear TextInput later
          style={{marginLeft: 15, marginRight: 15, height: 40, borderColor: 'blue', borderWidth: 2}}
          placeholder="What's on your mind?"
          onChangeText={(text)=> this.setState({text})}
          value={this.state.text}
          />
        <Button
          style={{marginTop: 20}}
          onPress={() => {
            Alert.alert('You left your note!');
            this.textInput.clear() // clears input after submitting
            // put other stuff here
          }}
          title="Leave Note"
          />
        <Button
          style={{marginTop: 10}}
          onPress={() => {
            goBack()
          }}
          title="Return to Home Screen"
        />
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
