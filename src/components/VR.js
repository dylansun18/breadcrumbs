import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AR } from 'expo';
import { GraphicsView } from 'expo-graphics';
import ExpoTHREE, { THREE, AR as ThreeAR } from 'expo-three';
import MapView, { Marker, Location, Permissions } from 'react-native-maps';

export default class Main extends React.Component {

  static navigationOptions = {
    header: null
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
		<View style={styles.container2}>
			<View style={styles.container1}>
				<View style={styles.cam}>
					<GraphicsView
						isArEnabled
						onContextCreate={this.onContextCreate}
						onRender={this.onRender}
						onPress={(evt) => this.handlePress(evt)}
					/>
				</View>
				<View style={styles.buttons}>
					<TouchableOpacity style={styles.button} onPress={() => navigate('NewNote')}>
						<Ionicons name="md-add-circle" size={32} color="white" />
						<Text style={styles.btext}>Toss a note </Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => navigate('Main')}>
						<Ionicons name="md-home" size={32} color="white" />
						<Text style={styles.btext}>Home</Text>
					</TouchableOpacity>
				</View>
			</View>
      </View>
    );
  }

  onContextCreate = async ({
    // Web: const gl = canvas.getContext('webgl')
    gl,
    width,
    height,
    scale,
  }) => {
    AR.setPlaneDetection(AR.PlaneDetection.Horizontal);

    // Renderer
    this.renderer = new ExpoTHREE.Renderer({
      gl,
      width,
      height,
      pixelRatio: scale,
    });

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new ThreeAR.BackgroundTexture(this.renderer);

    // Camera
    this.camera = new ThreeAR.Camera(width, height, 0.1, 1000);

    // Cube
    const geometry = new THREE.BoxGeometry(0.15, 0.2, 0.02);
    const material = new THREE.MeshPhongMaterial({
      color: 0x7efffc
    });
    this.cube1 = new THREE.Mesh(geometry, material);
    this.cube2 = new THREE.Mesh(geometry, material);
    this.cube3 = new THREE.Mesh(geometry, material);
    this.cube1.position.z = -0.4;
    this.cube2.position.z = -0.8;
    this.cube3.position.z = -1.2;
    this.setState({cubes: [this.cube1,this.cube2,this.cube3]});
    this.scene.add(this.cube1);
    this.scene.add(this.cube2);
    this.scene.add(this.cube3);
    this.scene.remove(this.state.cubes[0]);

    // Light
    this.scene.add(new THREE.AmbientLight(0xffffff,0.8));
    this.scene.add(new THREE.DirectionalLight(0xffffff, 0.5));
    this.clock = 0;
    animate = () => {
      requestAnimationFrame(animate);

      this.cube1.rotation.x += 0.1;
      if(this.clock%200 == 0 && false){
        var temp = new THREE.Mesh(geometry, material);
        temp.position.z = Math.random()*-3;

        this.scene.add(temp);
        var joined = this.state.cubes.concat(temp);
        this.setState({cubes: joined});
        this.scene.remove(this.state.cubes[0]);
        var chopped = this.state.cubes.slice(1);
        this.setState({cubes:chopped});
      }
      console.log(this.scene.toJSON());
      this.clock += 1;

      this.renderer.render(this.scene, this.camera);
      gl.endFrameEXP();
    }
    animate();
  };

  onRender = () => {
    this.renderer.render(this.scene, this.camera);
  };
}
const screenCenter = new THREE.Vector2(0.5, 0.5);


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
    height:500,
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