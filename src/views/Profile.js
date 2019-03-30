import React from 'react';
import { AppRegistry, View, Image, StyleSheet, Text, Button } from 'react-native';


export default class Profile extends React.Component {

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
	const { navigate } = this.props.navigation;
    return (
	<View style={{borderWidth: 20, borderTopWidth: 35, borderColor: 'transparent'}}>
		<View style={{flexDirection:'row'}}>
			<Image
				style={{width: 100, height: 100}}
				source={{uri: 'https://i.imgur.com/7aQkKHk.png'}}
			/>
			<Text style={{fontSize: 20}}>
				<Text style={{fontWeight: 'bold'}}>  Username: </Text>
				<Text style={{color: 939393}}>I am cool</Text>
				{"\n"}
			</Text>
		</View>
		
		<Button
			onPress={() => navigate('Home')}
			title="Home"
			color="#841584"
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
