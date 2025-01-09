import React, { useEffect, useRef } from "react";
import * as THREE from "three"; // Import three.js explicitly
import DOTS from "vanta/dist/vanta.dots.min"; // Import Vanta Dots effect

const Home = () => {
  const vantaRef = useRef(null); // Ref for the container div
  const vantaEffect = useRef(null); // Ref for Vanta instance

  useEffect(() => {
    if (!vantaEffect.current) {
      try {
        vantaEffect.current = DOTS({
          el: vantaRef.current, // Attach Vanta effect to the element
          THREE: THREE, // Pass the imported THREE library explicitly
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x736d90,
          color2: 0x1ceadb,
          size: 5.5,
          spacing: 36.0,
        });
      } catch (error) {
        console.error("[VANTA] Init error:", error);
      }
    }

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return <div ref={vantaRef} style={{ width: "100%", height: "100vh" }} />;
};

export default Home;
