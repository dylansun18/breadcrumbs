import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

// AWS Amplify
import Amplify from 'aws-amplify';
import Auth from '@aws-amplify/auth';
import { withAuthenticator } from 'aws-amplify-react-native';

// AWS config file
import AWSConfig from './aws-exports';

// All Views
import Main from './src/views/Main';
import NewNote from './src/views/NewNote';
import Note from './src/views/Note';
import Profile from './src/views/Profile';

// Components
import Map from  './src/components/Map';

// Navigation stack
const AppNavigator = createStackNavigator(
  {
    Main: Main,
    NewNote: NewNote,
    Note: Note,
    Profile: Profile,
	Map: Map
  },
  {
    initialRouteName: 'Main'
  }
);

// AWS config
Amplify.configure(AWSConfig);

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
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
