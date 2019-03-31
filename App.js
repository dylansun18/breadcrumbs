import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

// AWS Amplify
import Amplify from 'aws-amplify';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';

import { listUsers } from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';

// AWS config file
import AWSConfig from './aws-exports';

// All Views
import Main from './src/views/Main';
import NewNote from './src/views/NewNote';
import Note from './src/views/Note';
import Profile from './src/views/Profile';

// Components
import Map from  './src/components/Map';
import AR from './src/components/VR';

// Navigation stack
const AppNavigator = createStackNavigator(
  {
    Main: Main,
    NewNote: NewNote,
    Note: Note,
    Profile: Profile,
	Map: Map,
	AR: AR
  },
  {
    initialRouteName: 'Main'
  }
);

// AWS config
Amplify.configure(AWSConfig);

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {

  componentDidMount() {
    Auth.currentAuthenticatedUser()
    .then(user => {
      this.setState({ username: user.username });
      this.checkNewUser(user);
    })
    .catch(err => console.log(err));
  }

  // check if current authenticated user is in database
  // if not, then create new user to database
  checkNewUser(user) {
    (async () => {
      const data = await API.graphql(graphqlOperation(listUsers, {
        filter: { username: { eq: user.username } }
      }));
      console.log(data.data.listUsers);
      if(data.data.listUsers.items.length == 0) {
        API.graphql(graphqlOperation(createUser, {
          input: {
            username: user.username,
            email: user.attributes.email,
            emailVerified: user.attributes.email_verified
          }
        }))
        .then(data => console.log("New User Created: " + data.data.createUser.username));
      }
    })();
  }

  render() {
    return <AppContainer />;
  }
}

export default withAuthenticator(
                                  App,
                                  {
                                    includeGreetings: true,
                                    signUpConfig: {
                                      hiddenDefaults: ['phone_number']
                                    }
                                  }
                                );
