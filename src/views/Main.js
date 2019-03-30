import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

import VR from '../components/VR';

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
    const { navigate } = this.props.navigation;
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
