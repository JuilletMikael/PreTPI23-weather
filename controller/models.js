import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const scene = new THREE.Scene();
const loader = new GLTFLoader();
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: document.createElement('canvas')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

var cloud;
var sun;
var rain;
var snow;
var cloudSun;
var thunder;

const light = new THREE.AmbientLight(0xffffff); // soft white light
scene.add(light);

// Cloud
loader.load('../assets/models/cloud.glb', function(gltf) {
  cloud = gltf.scene;
  cloud.scale.set(1, 1, 1);
  cloud.position.y = 10;
  scene.add(cloud);
}, undefined, function(error) {
  console.error(error);
});


// Sun 
loader.load( '../assets/models/sun.glb', function ( gltf ) {

    sun = gltf.scene;
    sun.scale.set(1,1,1);
    sun.position.y = -10;
  
      scene.add( sun );
  
  }, undefined, function ( error ) {
  
      console.error( error );
  
  } );
  
  // Rain
  loader.load( '../assets/models/rain.glb', function ( gltf ) {
  
    rain = gltf.scene;
    rain.scale.set(1,1,1);
    rain.position.y = -10;
    rain.position.x = -10;
  
  
      scene.add( rain );
  
  }, undefined, function ( error ) {
  
      console.error( error );
  
  } );
  
  
  // thunder
  loader.load( '../assets/models/thunder.glb', function ( gltf ) {
  
    thunder = gltf.scene;
    thunder.scale.set(1, 1, 1);
    thunder.position.y = -10;
    thunder.position.x = 10;
  
  
      scene.add( thunder );
  
  }, undefined, function ( error ) {
  
      console.error( error );
  
  } );
  
  
  // cloudSun
  loader.load( '../assets/models/cloudSun.glb', function ( gltf ) {
  
    cloudSun = gltf.scene;
    cloudSun.scale.set(1, 1, 1);
    cloudSun.position.y = -10;
    cloudSun.position.x = 20;
  
  
      scene.add( cloudSun );
  
  }, undefined, function ( error ) {
  
      console.error( error );
  
  } );
  
  // snow
  loader.load( '../assets/models/cloudSnow.glb', function ( gltf ) {
  
    snow = gltf.scene;
    snow.scale.set(1, 1, 1);
    snow.position.y = -10;
    snow.position.x = -20;
  
  
      scene.add( snow );
  
  }, undefined, function ( error ) {
  
      console.error( error );
  
  } );


document.body.appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
