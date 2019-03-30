import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import * as THREE from 'three';
import ExpoTHREE from 'expo-three';
import Expo from 'expo';

console.disableYellowBox = true;

class HomeScreen extends React.Component {
  static navigationOptions = {
    header:null
  };
  state = {

  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container1}>
        <Text style={styles.title}>Breadcrumbs</Text>
        <TouchableOpacity style={styles.view1} onPress={() => this.props.navigation.navigate('Main')}>
          <Text style={styles.subtitle}>Tap here to enter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class MainScreen extends React.Component {
  static navigationOptions = {
    header:null
  };
  state = {

  };
  _onGLContextCreate = async (gl) => {
    const arSession = await this._glView.startARSessionAsync();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);

    const renderer = ExpoTHREE.createRenderer({ gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
    scene.background = ExpoTHREE.createARBackgroundTexture(arSession, renderer);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.07;
      cube.rotation.y += 0.04;
      renderer.render(scene, camera);
      gl.endFrameEXP();
    }
    animate();
  }
  onContextCreate = async ({gl, scale, width, height, arSession}) => {
   // Initialize renderer…
   this.renderer = ExpoTHREE.createRenderer({gl});
   this.renderer = setPixelRatio(scale);
   this.renderer.setSize(width, height);
   
   // Initialize scene…
   this.scene = new THREE.Scene();
   this.scene.background =  
      ExpoTHREE.createARBackgroundTexture(arSession, this.renderer);
   
   // Initialize camera…
   this.camera = ExpoTHREE.createARCamera(arSession, width / scale,
       height / scale, 0.01, 1000);
   
   // Initialize lighting…
   var ambientLight = new THREE.AmbientLight(0xaaaaaa);
   this.scene.add(ambientLight);
  }
  onRender = (delta) => {
    this.renderer.render(this.scene, this.camera);
  }
  render() {
    const {navigate} = this.props.navigation;
    return (

      <View style={styles.container2}>
        <View style={styles.cam}>
          <ExpoGraphics.View style={{flex:1}}
           onContextCreate={this.onContextCreate}
           onRender={this.onRender}
           arEnabled={true}
         />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}> 
            <Ionicons name="md-add-circle" size={32} color="white" />
            <Text style={styles.btext}>Toss a note </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}> 
            <Ionicons name="md-settings" size={32} color="white" />
            <Text style={styles.btext}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}

const MainNav = createStackNavigator({
  Home: HomeScreen,
  Main: MainScreen,
},{
  initialRouteName: "Home"
});

const App = createAppContainer(MainNav);

export default App;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 37,
  },
  subtitle: {
    fontSize: 18,
  },
  view1: {
    backgroundColor: 'red',
    marginTop:5,
    padding:3
  },
  cam: {
    width:300,
    height:450,
    marginTop:50,
  },
  buttons: {
    width:300,
    height:100,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    width:100,
    backgroundColor: '#738382',
    borderRadius: 5,
    marginRight:10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btext: {
    fontSize:15,
    textAlign: 'center',
    color: 'white'
  }
});
