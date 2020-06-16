import React, { useEffect, useRef } from 'react';
import * as THREE from "three";

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
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial({ color: 0xf2aeb6 });
    const cube = new THREE.Mesh( geometry, material );

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
    
    // return () => {
    //   window.removeEventListener('resize', handleResize)
    //   // mount.current.removeChild(renderer.domElement)

    //   scene.remove(cube)
    //   geometry.dispose()
    //   material.dispose()
    // }
  }, []);

  return (
    <div id="three" ref={ mount }/>
  )
}

export default ThreeContainer