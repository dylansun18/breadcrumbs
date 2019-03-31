import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MapView, { Marker, Location, Permissions } from 'react-native-maps';

export default class Map extends React.Component {
	constructor(props) {
		super(props);
	}
	
	state = {
		region: null,
	};

	componentWillMount() {
		this.getLocationAsync();
	}

	getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
			this.setState({
			errorMessage: 'Permission to access location was denied'
		});
    }

    let location = await Location.getCurrentPositionAsync({});
	const region = {
		latitude: location.coords.latitude,
		longitude: location.coords.longitude,
		...deltas
		};
		await this.setState({ region });
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
		return (
			<View>
				<View>
					<MapView
						style={styles.container}
						region={this.region}
						showsUserLocation
						showsMyLocationButton
					/>
				</View>
				<View style={{top: 300}}>
				<Button
					onPress={() => navigate('Main')}
					title="Return to Home Screen"
					accessibilityLabel="Return to Home Screen"
				/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
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
