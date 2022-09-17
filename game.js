import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls( camera, renderer.domElement );
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const loader = new OBJLoader();

// load a resource
loader.load(
	// resource URL
	'ImportAusslage.obj',
	// called when resource is loaded
	function ( object ) {

		scene.add( object );

	},
	// called when loading is in progresses
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

camera.position.z = 5;

const loader = new THREE.CubeTextureLoader();
const texture = loader.load([
    './textures/penguins/arid_ft.jpg',
    './textures/penguins/arid_bk.jpg',
    './textures/penguins/arid_up.jpg',
    './textures/penguins/arid_dn.jpg',
    './textures/penguins/arid_rt.jpg',
    './textures/penguins/arid_lf.jpg',
]);
scene.background = texture;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
