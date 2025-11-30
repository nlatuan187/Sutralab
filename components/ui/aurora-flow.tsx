"use client"

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points } from '@react-three/drei';
import * as THREE from 'three';
import { createNoise3D } from 'simplex-noise';

// Aurora-like flowing background
const AuroraBackground = () => {
  const { scene } = useThree();
  
  useEffect(() => {
    // Much larger geometry to ensure full coverage without black edges
    const geometry = new THREE.PlaneGeometry(500, 500);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 resolution;
        varying vec2 vUv;
        
        // Simplex noise
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
        
        float snoise(vec2 v) {
          const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                             -0.577350269189626, 0.024390243902439);
          vec2 i  = floor(v + dot(v, C.yy) );
          vec2 x0 = v -   i + dot(i, C.xx);
          vec2 i1;
          i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod289(i);
          vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
            + i.x + vec3(0.0, i1.x, 1.0 ));
          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
          m = m*m ;
          m = m*m ;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
          vec3 g;
          g.x  = a0.x  * x0.x  + h.x  * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
        }
        
        void main() {
          vec2 uv = vUv;
          
          // Create more organic, flowing aurora patterns with varying scales
          float flow1 = snoise(vec2(uv.x * 1.5 + time * 0.08, uv.y * 0.4 + time * 0.04));
          float flow2 = snoise(vec2(uv.x * 2.2 + time * 0.06, uv.y * 0.7 + time * 0.03));
          float flow3 = snoise(vec2(uv.x * 0.8 + time * 0.1, uv.y * 0.5 + time * 0.05));
          float flow4 = snoise(vec2(uv.x * 3.5 + time * 0.07, uv.y * 0.25 + time * 0.04));
          
          // Create organic streaky patterns with smoother transitions
          float streaks1 = sin((uv.x + flow1 * 0.4) * 6.0 + time * 0.15) * 0.5 + 0.5;
          float streaks2 = sin((uv.y + flow2 * 0.3) * 10.0 + time * 0.12) * 0.5 + 0.5;
          float streaks = (streaks1 * streaks2);
          streaks = pow(streaks, 1.5); // Softer streaks
          
          // Combine flows for more organic aurora effect with gradient blending
          float aurora1 = (flow1 + flow2) * 0.5 + 0.5;
          float aurora2 = (flow3 + flow4) * 0.5 + 0.5;
          float aurora = (aurora1 + aurora2) * 0.5;
          aurora = pow(aurora, 1.8); // Softer falloff for gradients
          
          // Aurora colors - teal, cyan, green with gradient transitions
          vec3 darkTeal = vec3(0.0, 0.08, 0.12);
          vec3 midTeal = vec3(0.0, 0.25, 0.35);
          vec3 teal = vec3(0.0, 0.4, 0.5);
          vec3 cyan = vec3(0.0, 0.65, 0.75);
          vec3 brightCyan = vec3(0.15, 0.85, 0.95);
          vec3 green = vec3(0.0, 0.75, 0.45);
          vec3 brightGreen = vec3(0.2, 0.95, 0.6);
          
          // Start with dark base
          vec3 color = darkTeal;
          
          // Layer 1: Smooth gradient from dark to mid-teal
          float layer1 = smoothstep(0.2, 0.6, aurora);
          color = mix(color, midTeal, layer1 * 0.6);
          
          // Layer 2: Gradient band for teal flows with smooth blending
          float layer2 = smoothstep(0.35, 0.75, aurora + streaks * 0.2);
          color = mix(color, teal, layer2 * 0.5);
          
          // Layer 3: Cyan gradient highlights with organic flow
          float layer3 = smoothstep(0.55, 0.85, aurora + flow1 * 0.3);
          color = mix(color, cyan, layer3 * 0.6);
          
          // Layer 4: Bright cyan streaks with gradient falloff
          float layer4 = smoothstep(0.75, 0.95, streaks + aurora * 0.4);
          color = mix(color, brightCyan, layer4 * 0.5);
          
          // Layer 5: Green gradient accents
          float layer5 = smoothstep(0.65, 0.9, flow3 + streaks * 0.15);
          color = mix(color, green, layer5 * 0.4);
          
          // Layer 6: Bright green highlights for depth
          float layer6 = smoothstep(0.85, 1.0, flow4 + aurora * 0.3);
          color = mix(color, brightGreen, layer6 * 0.3);
          
          // Add subtle noise texture for organic feel
          float noise = snoise(uv * 80.0) * 0.015;
          color += noise;
          
          // Ensure smooth gradient transitions
          color = mix(color, darkTeal, 0.1);
          
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      side: THREE.DoubleSide
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = -60;
    // Scale mesh to ensure full coverage
    mesh.scale.set(1.5, 1.5, 1);
    scene.add(mesh);
    
    const animate = () => {
      material.uniforms.time.value += 0.01;
      requestAnimationFrame(animate);
    };
    animate();
    
    return () => {
      scene.remove(mesh);
      geometry.dispose();
      material.dispose();
    };
  }, [scene]);
  
  return null;
};

// Camera Controller
const CameraController = () => {
  const { camera } = useThree();
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    camera.position.x = Math.sin(time * 0.05) * 3;
    camera.position.y = Math.cos(time * 0.07) * 2;
    camera.position.z = 30;
    camera.lookAt(0, 0, -30);
  });
  
  return null;
};

// Main Hero Component - Aurora Background Only
export const Component = () => {
  return (
    <div className="hero-container absolute inset-0 z-0 pointer-events-none w-screen h-full" style={{ left: 0, right: 0, top: 0, bottom: 0 }}>
      <div className="hero-canvas absolute inset-0 w-full h-full">
        <Canvas
          className="w-full h-full"
          camera={{ position: [0, 0, 35], fov: 100 }}
          gl={{ 
            antialias: true, 
            alpha: false,
            powerPreference: "high-performance"
          }}
        >
          <AuroraBackground />
          <CameraController />
          
          {/* Subtle lighting to enhance the aurora effect */}
          <ambientLight intensity={0.9} />
          <pointLight 
            position={[20, 20, 10]} 
            intensity={0.8} 
            color="#00cccc"
            distance={100}
            decay={2}
          />
          <pointLight 
            position={[-20, -10, 5]} 
            intensity={0.6} 
            color="#00ff99"
            distance={80}
            decay={2}
          />
        </Canvas>
      </div>
    </div>
  );
};
