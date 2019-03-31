import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Marker } from 'react-native-maps';

type Props = {};
export default class NoteMarker extends Component<Props> {
    state = {
        note: this.props.note,
        coordinate: {
            latitude: parseFloat(this.props.note.latitude),
            longitude: parseFloat(this.props.note.longitude)
        }
    }
    componentDidMount() {

    }
    
    onPress() {

    }

    onCalloutPress() {
        this.props.navigate('Note',
        {
            note: this.props.note
        });
    }

    render() {
        if(!isNaN(this.state.coordinate.latitude) && !isNaN(this.state.coordinate.longitude)) {
            return (
                <Marker
                    coordinate = {this.state.coordinate}
                    noteId = {this.state.noteId}
                    onPress = {this.onPress.bind(this)}
                    onCalloutPress = {this.onCalloutPress.bind(this)}
                />
            );
        }
        return <View />;
    }
}