import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    dylan: "dylan",
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Breadcrumbs</Text>
        <Text style={styles.subtitle}>Tap here to enter</Text>
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
  }
});
