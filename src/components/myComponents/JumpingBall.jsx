
// threejs ball

// import { Canvas, useFrame } from '@react-three/fiber';
// import { useRef, useState } from 'react';
// import { useSpring, animated } from '@react-spring/three';
// import { ContactShadows, Environment, PresentationControls } from '@react-three/drei';
// import * as THREE from 'three';

// const Ball = () => {
//     const ballRef = useRef<THREE.Mesh>(null);
//     const [isComplete, setIsComplete] = useState(false);
  
//     const { position, scale, rotation } = useSpring({
//     from: { position: [0, 4, 0], scale: [1, 1, 1], rotation: [0, 0, 0] },
//     to: async (next) => {
//       await next({ position: [0, 0, 0], scale: [1.2, 0.8, 1.2] });
//       await next({ position: [0, 3, 0], scale: [1, 1, 1], rotation: [0.2, 0.1, 0] });
//       await next({ position: [0, 0, 0], scale: [1.3, 0.7, 1.3] });
//       await next({ position: [0, 2, 0], scale: [1, 1, 1], rotation: [0.1, 0.3, 0] });
//       await next({ position: [0, 0, 0], scale: [1.4, 0.6, 1.4] });
//       await next({ position: [0, 0, 0], scale: [1, 1, 1] });
//       setIsComplete(true);
//     },
//     config: {
//         mass: 1,
//       tension: 180,
//       friction: 12
//     }
//   });

//   useFrame(() => {
//     if (ballRef.current && !isComplete) {
//       ballRef.current.rotation.x += 0.01;
//       ballRef.current.rotation.z += 0.01;  
//     }
//   });

//   return (
//       <animated.mesh
//         ref={ballRef}  
//         position={position}
//         scale={scale}
//         rotation={rotation}
//       onClick={() => isComplete && console.log('clicked!')}
//     >
//       <sphereGeometry args={[1, 32, 32]} />
//       <meshPhysicalMaterial
//         color={"#ff6b6b"}
//         clearcoat={1}
//         clearcoatRoughness={0.05}
//         metalness={0.2}
//         roughness={0.15}
//         envMapIntensity={1}
//       />
//     </animated.mesh>
//   );
// };

// const JumpingBall = () => {
//   return (
//       <div style={{ width: '100%', height: '100vh' }}>
//         <Canvas
//           shadows
//           camera={{ position: [0, 2, 8], fov: 45 }}
//           gl={{ antialias: true, alpha: true }}
//         >
//           <color attach="background" args={['#e6e6e6']} />
  
//           <PresentationControls
//             global
//             rotation={[0, 0, 0]}
//             polar={[-0.1, 0.1]}
//             azimuth={[-0.1, 0.1]}
//           >
//             <Ball />
//           </PresentationControls>
  
//           <Environment preset="warehouse" background />
  
//           <ContactShadows
//             position={[0, -1, 0]}
//             opacity={0.5}
//             scale={12}
//             blur={3}
//             far={5}
//           />
  
//           <ambientLight intensity={0.6} />
//           <directionalLight
//             position={[5, 5, 5]}
//             intensity={1.2}
//             castShadow
//             shadow-mapSize-width={1024}
//             shadow-mapSize-height={1024}
//           />
//         </Canvas>
//       </div>
//     );
//   };
  
//   export default JumpingBall;
  
  // framermotion ball
  // import { motion } from "framer-motion";
  // import { useState } from "react";
  
  // const JumpingBall = () => {
  //   const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  
  //   const handleClick = () => {
  //     if (isAnimationComplete) {
  //       window.open("/assets/resume.pdf", "_blank");
  //     }
  //   };
  
  //   const bounceVariants = {
  //     initial: {
  //       y: -200,
  //       scale: 1,
  //       borderRadius: "50%",
  //       scaleY: 1,
  //       scaleX: 1,
  //       width: "50px",
  //     },
  //     animate: {
  //       y: [
  //         -200,  // start
  //         0,     // first land
  //         -150,  // first jump
  //         0,     // second land
  //         -80,   // second jump
  //         0,     // third land
  //         0      // rest
  //       ],
  //       scaleY: [
  //         1,     
  //         0.85,  
  //         1,     
  //         0.8,   
  //         1,     
  //         0.75,  
  //         1      
  //       ],
  //       scaleX: [
  //         1,     
  //         1.1,   
  //         1,     
  //         1.15,  
  //         1,     
  //         1.2,   
  //         1      
  //       ],
  //       borderRadius: [
  //         "50%", 
  //         "45%", 
  //         "50%", 
  //         "40%", 
  //         "50%", 
  //         "30%", 
  //         "15%"  
  //       ],
  //       width: [
  //         "50px",
  //         "55px",
  //         "50px",
  //         "60px",
  //         "50px",
  //         "65px",
  //         "80px"
  //       ],
  //     },
  //   };
  
  //   return (
  //     <div style={{
  //       position: 'relative',
  //       height: '400px',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'flex-end',
  //       // background: 'linear-gradient(to top, #e6e6e6, #f7f7f7)',
  //     }}>
  //       {/* Ground Effect */}
  //       <div style={{
  //         position: 'absolute',
  //         bottom: 0,
  //         width: '300px',
  //         height: '10px',
  //         background: 'radial-gradient(circle, rgba(0,0,0,0.3) 30%, transparent)',
  //         borderRadius: '50%',
  //         opacity: 0.7,
  //         transform: 'translateY(50%)'
  //       }} />
  
  //       <motion.div
  //         initial="initial"
  //         animate="animate"
  //         variants={bounceVariants}
  //         transition={{
  //           duration: 3,
  //           times: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
  //           ease: "easeInOut",
  //         }}
  //         onAnimationComplete={() => setIsAnimationComplete(true)}
  //         onClick={handleClick}
  //         style={{
  //           width: "50px",
  //           height: "50px",
  //           background: 'radial-gradient(circle at 30% 30%, #ff7f50, #ff4500)',
  //           cursor: isAnimationComplete ? "pointer" : "default",
  //           display: "flex",
  //           alignItems: "center",
  //           justifyContent: "center",
  //           color: "white",
  //           padding: isAnimationComplete ? "10px 20px" : "0",
  //           boxShadow: "inset -8px -8px 12px rgba(0,0,0,0.4), 0px 4px 25px rgba(0,0,0,0.3)",
  //           position: 'relative',
  //           marginBottom: '20px',
  //           borderRadius: "50%",
  //         }}
  //       >
  //         {isAnimationComplete && "Open Resume"}
  //       </motion.div>
  //     </div>
  //   );
  // };
  
  // export default JumpingBall;
  
  
  // framer motion cube
 // framer motion cube
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import pdf from '../../pdfs/FinalResume.pdf';

const JumpingCube = ({ isMdScreen }) => {
  const [temp,setTemp] = useState(false)
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [jumpDistance, setJumpDistance] = useState(0); // Dynamic horizontal jump distance



  useEffect(() => {
    // Dynamically set the jump distance based on screen size and placement
    if (isMdScreen) {
      setJumpDistance(window.innerWidth / 4 - 50); // Subtract cube width for padding
    } else {
      setJumpDistance(window.innerWidth - 200); // Subtract cube width for padding
    }
  }, [isMdScreen]);

  const handleClick = () => {
    if (isAnimationComplete) {
      window.open(pdf);
    }
  };
  const handleAnimation = ()=>{
    setIsAnimationComplete(true)
    if(isAnimationComplete){
      setTemp(true)
    }
    
  }

  const bounceVariants = {
    initial: {
      y: -100,
      rotate: 0,
    },
    animate: {
      y: [
        -jumpDistance, // start
        0, // first land
        -jumpDistance, // first jump
        0, // second land
        -jumpDistance, // second jump
        0, // third land
        isMdScreen ? 0 : -(jumpDistance / 2 - 60), // rest
      ],
      rotate: [
        0, 90, 180, 270, 360, 630, 630, // final angle
      ],
    },
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        background: "transparent",
      }}
    >
      <motion.div
        initial="initial"
        animate="animate"
        variants={bounceVariants}
        transition={{
          duration: 3,
          times: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
          ease: [0.42, 0, 0.58, 1],
          delay: 3, // Using a spring-like ease for smooth motion
        }}
        onAnimationComplete={handleAnimation}
        onClick={handleClick}
        style={{
          width: temp ? 'fit-content' : "50px",
          height: "50px",
          background: "linear-gradient(135deg, #00cea8, #bf61ff)",
          cursor: temp ? "pointer" : "default",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: temp ? "10px 20px" : "0", // Dynamic padding
          boxShadow:
            "0px 4px 25px rgba(0, 0, 0, 0.7), inset 0px 0px 15px rgba(255, 255, 255, 0.2)",
          borderRadius: temp ? "16px" : "5px", // Dynamic border radius
          position: "relative",
          marginBottom: "20px",
          fontWeight: "bold",
          fontSize: temp ? "16px" : "0", // Hide text before animation completes
          textAlign: "center",
        }}
      >
        {temp && "Open Resume"}
      </motion.div>
    </div>
  );
};

export default JumpingCube;
