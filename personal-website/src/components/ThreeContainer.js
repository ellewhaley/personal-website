import React, { useEffect, useRef } from 'react';
import * as THREE from "three";
import pink from '../images/logo-pink.png';
import green from '../images/logo-green.png';
import purple from '../images/logo-purple.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const ThreeContainer = () => {
  const mount = useRef(null);

  useEffect(() => {
    let width = mount.current.clientWidth
    let height = mount.current.clientHeight
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    const renderScene = () => {
      renderer.render(scene, camera)
    }
    document.body.appendChild(renderer.domElement);

    let loader = new THREE.TextureLoader();
    let materialArray = [
        new THREE.MeshBasicMaterial( { map: loader.load(pink) } ),
        new THREE.MeshBasicMaterial( { map: loader.load(pink) } ),
        new THREE.MeshBasicMaterial( { map: loader.load(green) } ),
        new THREE.MeshBasicMaterial( { map: loader.load(green) } ),
        new THREE.MeshBasicMaterial( { map: loader.load(purple) } ),
        new THREE.MeshBasicMaterial( { map: loader.load(purple) } ),
    ];

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const cube = new THREE.Mesh( geometry, materialArray );

    scene.add( cube );
    camera.position.z = 3;

    const handleResize = () => {
      width = mount.current.clientWidth
      height = mount.current.clientHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderScene()
    }

    const animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderScene()
    };

    animate();

    mount.current.appendChild(renderer.domElement)
    window.addEventListener('resize', handleResize)
  }, []);

  return (
    <div className="three">
      <div className="three__cube" ref={ mount }/>
      <AnchorLink className="three__scroll" href="#content">
        <span></span>
        <span></span>
        <span></span>
      </AnchorLink>
    </div>
  )
}

export default ThreeContainer