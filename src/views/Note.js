import React from 'react';
import { View, StyleSheet, Text, Button, ActivityIndicator /* other libraries here */ } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import {Auth, API, graphqlOperation} from 'aws-amplify';

export default class Note extends React.Component {

  static navigationOptions = {
    header:null
  };

  state = {
    vote: 1,
    upvote: 0,
    downvote: 0,
    note: null,
    author: null
  };

  getNote(note_id) {
    return API.graphql(graphqlOperation(getNote,{
      id: note_id
    }));
  }

  componentDidMount() {
    // Called once after the component is mounted
    this.getNote(this.props.noteId)
    .then((data)=>{
      this.setState({
        note: data.data.getNote
      });
    });
  }

  componentDidUpdate() {
    // Called every time setState or forceUpdate is called
  }

  //for upvoting
  up=() =>{
    if(this.state.vote == 0)    //ensures cant vote twice
    {
      return;
    }
    this.setState({
      upvote: this.state.upvote + 1,
      vote: this.state.vote -1
    })
  }

  //for downvoting
  down = () => {
    if(this.state.vote ==0)     //ensures cant vote twice
    {
      return;
    }
    this.setState({
      downvote: this.state.downvote + 1,
      vote: this.state.vote -1
    })
  }


  //loading screen
  renderLoading = () => {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size="large" style={{marginTop: 250}}/>
      </View>
    )
  }


  render() {
    if(this.state.isLoading) {
      return (this.renderLoading());
    }

    const {goBack} = this.props.navigation;
    var note_text = this.state.note.content
    var author = this.state.note.author
    var upvote = this.state.note.upvote
    var downvote = this.state.note.downvote

    return (
      <View style={styles.container}>
        <Button style = {top_corner.subtitle} title = 'Back' onPress ={() => goBack()} />
        <Text style= {styles.title} >Note</Text>
        <Text style = {top_corner.container} > {note_text} </Text>
        <View style = {bottom.container}>
          <Text style = {top_corner.subtitle} >Author: {author}</Text>
          <Button style={{marginTop: 10}} title='Upvote' onPress={this.up} />
          <Button style={{marginTop: 10}} title='Downvote' onPress={this.down} />
          <Text style = {{marginTop: 10}}  > Votes: {upvote - downvote} </Text>
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
