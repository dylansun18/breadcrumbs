import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MapView, { Marker, Location, Permissions, Circle } from 'react-native-maps';


import {Auth, API, graphqlOperation} from 'aws-amplify';

import noteMarker from './noteMarker.js';


export default class Map extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {
		region: null,
		circle: null,
		note_list: [{latitude: -118.451083, longitude: 34.071543}] 				//should contain a list of nearby notes with info about location
	};

	componentWillMount() {
		this.getLocationAsync();
		//this.noteInRange(this.props.getNote);				//not sure if this makes any sense
	}

	//iterate thru the database notes to see if any notes nearby will be added to note list
	// noteInRange(some_note) {
	// 	var long_dist = this.region.longitude - some_note.longitude
	// 	var lat_dist = this.region.latitude - some_note.latitude
	// 	const actual_dist = Math.sqrt(long_dist * long_dist + lat_dist * lat_dist);
	// 	if(actual_dist <= 100) {																	//can change value of 100
	// 		note_list.push(some_note);															//idk if you do this or the one below or a mix
	// 		return API.graphql(graphqlOperation(getNote, {note: some_note}));
	// 	}
	// }

	getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
			this.setState({
			errorMessage: 'Permission to access location was denied'
		});
    }

    let location = await Location.getCurrentPositionAsync({});
	const current_region = {
		latitude: location.coords.latitude,
		longitude: location.coords.longitude,
		latitudeDelta: previousState.region.latitudeDelta,
		longitudeDelta: previousState.region.longitudeDelta,
		};
	const current_circle = {
		latitude: location.coords.latitude,
		longitude: location.coords.longitude
		};
		await this.setState({ region: current_region });
		await this.setState({circle: current_circle});
	}

	static navigationOptions = {
		header:null
	};

	componentDidMount() {
		// Called once after the component is mounted
	}

	componentDidUpdate() {
		// Called every time setState or forceUpdate is called
	}

	render() {
		const { navigate } = this.props.navigation;
		const NoteMarkers = this.state.note_list.map((notes) =>
			<noteMarker key={note.id} navigator={this.props.navigator} notes = {notes}/>
		);
		return (
			
			<View>
				<View>
					<MapView
						styles={styles.container}
						region={this.region}
						showsUserLocation
						showsMyLocationButton
						followsUserLocation
					>
					<Circle
						center = {this.state.circle}
						radius = {1000}
						/>
						{NoteMarkers}
				</MapView>
				<View style={{top: 300}}>
				<Button
					onPress={() => navigate('Main')}
					title="Return to Home Screen"
					accessibilityLabel="Return to Home Screen"
				/>
				</View>
			</View>
		</View>);
	}
	styles = StyleSheet.create({
		container: {
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			justifyContent: 'flex-end',
			alignItems: 'center',
			height: 300,
		},
	});
}
