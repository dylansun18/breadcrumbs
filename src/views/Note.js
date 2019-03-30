import React from 'react';
import { View, StyleSheet, Text, Button /* other libraries here */ } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';


export default class Note extends React.Component {

  static navigationOptions = {
    header:null
  };

  state = {
    upvote: 0,
    downvote: 0
  };

  componentDidMount() {
    // Called once after the component is mounted
  }

  componentDidUpdate() {
    // Called every time setState or forceUpdate is called
  }

  up=() =>{
    value = this.state.upvote
    this.setState({upvote: this.state.upvote + 1})
  }

  down = () => {
    value = this.state.downvote
    this.setState({downvote: this.state.downvote + 1})
  }


  render() {
    const {navigate} = this.props.navigation;
    var note_text = "Hi this will be loooooooooong message so bear with me. I am bored with nothing to do.  "
    var author = "John Smith"
    
    return (  
      <View style={styles.container}>
        <Text style= {styles.title} >Notes</Text>
        <Text style = {top_corner.container} > {note_text} </Text>
        <View style = {bottom.container}>
          <Text style = {top_corner.subtitle} >Author: {author}</Text>
          <Button style={{marginTop: 10}} title='Upvote' onPress={this.up} />
          <Button style={{marginTop: 10}} title='Downvote' onPress={this.down} />
          <Text style = {{marginTop: 10}}  > Votes: {this.state.upvote - this.state.downvote} </Text>
        </View>
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

const bottom  = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})