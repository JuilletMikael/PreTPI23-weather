<template>
    <div ref="container"></div>
</template>
  
<script setup>
    import * as THREE from 'three';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
    import { ref, onMounted, defineProps } from 'vue';

    const props = defineProps({
        model : String,
        size : Number,
        canvasIndex : String,
    })

    const loader = new GLTFLoader();
    const container = ref(null);
    let modelCrated = null;

  
    onMounted(() => {
        const scene = new THREE.Scene();

        // Creation of a camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 4;

        // Creation of a directional light 
        const directionalLight = new THREE.DirectionalLight( 0xffffff, 3 );
        directionalLight.position.z = 4;
        directionalLight.position.x = 1;
        scene.add( directionalLight );

        // Creation of the threejs render
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.domElement.setAttribute('id', props.canvasIndex);
        container.value.appendChild(renderer.domElement);

        

        /**
         * This function create a 3d model with the model pass by props.
         */
         loader.load('../src/assets/models/' + props.model + '.glb', function(gltf) {
            modelCrated = gltf.scene;
            modelCrated.scale.set(1,1,1);
            scene.add(modelCrated);
        }, undefined, function(error) {
            console.log(error);
        });


        /**
         * This function resize canvas to correspond to the container size. 
         */
         const resize = () => {
            const { width, height } = container.value.getBoundingClientRect();
            renderer.setSize(width, width);
            camera.aspect = width / width;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', resize);
        resize;


        /**
         * This function create the animation of the sceen
         */
        const animate = function () {
            requestAnimationFrame(animate);

            if (props.canvasIndex == 'canvas-day' && modelCrated) {
                const yPosition = Math.sin(Date.now() * 0.001) * 0.5;
                modelCrated.position.y = yPosition;
            }

            renderer.render(scene, camera);
        };
        animate();
    });
</script>