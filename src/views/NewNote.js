import React from 'react';
import {Alert, StyleSheet, Text, TextInput, AppRegistry, View, TouchableOpacity, Button } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Geolocation from 'react-native-geolocation-service';

import HomeScreen from '../../App.js'


export default class NewNote extends React.Component {

  static navigationOptions = {
    header:null
  };

  state = {
    noteContent: '',
    submitting: false
  };

  componentDidMount() {
    // Called once after the component is mounted
  }

  componentDidUpdate() {
    // Called every time setState or forceUpdate is called
  }

  submit() {
    Geolocation.getCurrentPosition(
         (position) => {
           Auth.currentAuthenticatedUser()
           .then(user => {
             const username = user.username;
             API.graphql(graphqlOperation(listUsers, {
               filter: {
                 username: { eq: username }
               },
             }))
             .then(data => {
               const userID = data.data.listUsers.id;
               API.graphql(graphqlOperation(createNote, {
                 input: {
                   longitude: position.coords.longitude,
                   latitutde: position.coords.latitude,
                   altitude: position.coords.altitude,
                   content: this.state.noteContent,
                   noteAuthorId: userID
                }
               }))
               .then(data => {
                 goBack();
               })
             });
           });
         },
         (error) => {
           if (error) {
             this.showLocationError();
             this.setState({ error: error.message });
           }
         },
         { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
       );
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
            this.textInput.clear(); // clears input after submitting
            this.setState({
              submitting: true
            });
            this.submit();
          }}
          disabled={this.state.submitting}
          title="Leave Note"
          />
        <Button
          style={{marginTop: 10}}
          onPress={() => {
            goBack();
          }}
          title="Go Back"
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
