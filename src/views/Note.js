import React from 'react';
import { View, StyleSheet, Text, Button /* other libraries here */ } from 'react-native';
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

  upvoteinc() {
    
  }

  render() {
    const {navigate} = this.props.navigation;
    var note_text = "Hi this will be a loooooong message so bear with me. I am bored with nothing to do "
    var author = "John Smith"
    var upvote = 5;
    var downvote = 1;
    return (  
      <View style={styles.container}>
        <Text style= {styles.title} >Notes</Text>
        <Text style = {top_corner.container} > {note_text} </Text>
        <Text style = {top_corner.subtitle} >Author: {author}</Text>
        <Button style={{marginTop: 10}} title='Upvote' onPress={() => upvote++} />
        <Button style={{marginTop: 10}} title='Downvote' onPress={() => downvote++} />
        <Text style = {{marginTop: 10}}  > Upvote: {upvote} </Text>
        <Text style = {{marginTop: 10}} >Downvote: {downvote}</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
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

const top_corner = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20, 
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  size: {
    fontSize: 15
  }
});