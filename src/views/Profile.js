import React from 'react';
import { AppRegistry, View, Image, StyleSheet, Text, Button } from 'react-native';
import { Auth, API, graphqlOperation } from 'aws-amplify';

export default class Profile extends React.Component {

  static navigationOptions = {
    header:null
  };

  state = {
    user: {},
    isLoading: true
  };

  componentDidMount() {
    Auth.currentAuthenticatedUser()
    .then(user => {
      const username = user.username;
      API.graphql(graphqlOperation(listUsers, {
        filter: {
          username: { eq: username }
        },
      }))
      .then(data => {
        const user = data.data.listUsers.items[0];
        this.setState({
          user: user,
          isLoading: false
        });
      });
    });
  }

  componentDidUpdate() {
    // Called every time setState or forceUpdate is called
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
      return(this.renderLoading());
    }
	const { navigate } = this.props.navigation;
    return (
	<View style={{borderWidth: 20, borderTopWidth: 35, borderColor: 'transparent'}}>
		<View style={{flexDirection:'row', alignItems: 'stretch'}}>
			<Image
				style={{width: 100, height: 100}}
				source={{uri: 'https://i.imgur.com/7aQkKHk.png'}}
			/>
			<Text style={{borderLeftWidth: 10}}>
				<Text style={{fontWeight: 'bold'}}>{this.state.user.username}</Text>
				{"\n"}
				<Text>This is your status message</Text>
			</Text>
		</View>
		<Text>{"\n"}</Text>
		<Button
				onPress={() => navigate('Main')}
				title="Return to Home Screen"
				accessibilityLabel="Return to Home Screen"
		/>

		<Text style={{fontWeight: 'bold'}}>
			{"\n"}
			Scroll down to view your achievements
			{"\n"}
		</Text>

		<View style={{borderWidth: 10, borderColor: 'lightgrey', backgroundColor: 'lightgrey', flexWrap: 'wrap'}}>

			<Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>
				Achivements
				{"\n"}
			</Text>

			<View style={{flexDirection: 'row'}}>
				<Image
				style={{width: 75, height: 75, borderWidth: 10, borderColor: 'transparent'}}
				source={{uri: 'https://img.icons8.com/cotton/64/000000/medal.png'}}
				/>
				<Text style={{borderWidth: 10, borderColor: 'transparent', flex: 1, flexWrap: 'wrap'}}>
					<Text style={{fontWeight: 'bold'}}>Note Noob </Text>
					{"\n"}
					<Text style={{color: 939393}}>So you wrote your first note, congrats</Text>
				</Text>
			</View>

			<View style={{flexDirection: 'row'}}>
				<Image
				style={{width: 75, height: 75, borderWidth: 10, borderColor: 'transparent'}}
				source={{uri: 'https://img.icons8.com/pastel-glyph/64/000000/medal.png'}}
				/>
				<Text style={{borderWidth: 10, borderColor: 'transparent', flex: 1, flexWrap: 'wrap'}}>
					<Text style={{fontWeight: 'bold'}}>????? </Text>
					{"\n"}
					<Text style={{color: 939393}}>You have not unlocked this achievement yet</Text>
				</Text>
			</View>

		</View>
      </View>
    );
  }
}
