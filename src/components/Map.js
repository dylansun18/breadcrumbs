import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MapView, { Marker, Location, Permissions, Circle } from 'react-native-maps';

import {getNote} from '../graphql/queries';

import {Auth, API, graphqlOperation} from 'aws-amplify';

import NoteMarker from './noteMarker.js';


export default class Map extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {
		region: null,
		circle: {latitude: -118.451083, longitude: 34.071543},
		note_list: [{latitude: -118.451083, longitude: 34.071543}] 				//should contain a list of nearby notes with info about location
	};

	

	componentWillMount() {
		this.getLocationAsync();
		API.graphql(graphqlOperation(getNote, {latitude: this.props.latitude, longitude: this.props.longitude}))
		.then((data) => {
			this.setState({
				note: data.data.getNote
			});
		})
	}

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
		const NoteMarkers = this.state.note_list.map((note) =>
		 	<NoteMarker key={note.id} navigator={this.props.navigator} note = {note}/>
		);
		return (
			
			<View>
				<View>
					<MapView
						style={styles.container}
						region={this.region}
						showsUserLocation
						showsMyLocationButton
						followsUserLocation
					>
					<Circle
						center = {this.state.circle}
						radius = {1000}
						/>
					{NoteMarker}		
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