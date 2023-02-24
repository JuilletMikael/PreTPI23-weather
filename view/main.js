import '../assets/css/style.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const scene = new THREE.Scene();
const loader = new GLTFLoader();
const renderer = new THREE.WebGLRenderer(
  {
    canvas: document.querySelector('#app')
  }
);

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);

var cloud;
var sun;
var rain;
var snow;
var cloudSun;
var thunder;


const light = new THREE.AmbientLight( 0xffffff ); // soft white light
scene.add( light );

// Cloud
loader.load( '../assets/models/cloud/scene.gltf', function ( gltf ) {

  cloud = gltf.scene;
  cloud.scale.set(2, 2, 2);
  cloud.position.y = 10;

	scene.add( cloud );

}, undefined, function ( error ) {

	console.error( error );

} );

// Sun 
loader.load( '../assets/models/sun/scene.gltf', function ( gltf ) {

  sun = gltf.scene;
  sun.scale.set(2, 2, 2);
  sun.position.y = -10;

	scene.add( sun );

}, undefined, function ( error ) {

	console.error( error );

} );

// Rain
loader.load( '../assets/models/rain/scene.glb', function ( gltf ) {

  rain = gltf.scene;
  console.log(rain);
	scene.add( rain );

}, undefined, function ( error ) {

	console.error( error );

} );


function animate (){
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();