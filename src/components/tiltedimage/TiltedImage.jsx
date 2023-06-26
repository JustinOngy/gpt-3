import ai from "../../assets/ai.png";
import "./tiltedimage.css";
import React, { useRef, useState } from "react";

const TiltedImage = () => {
  const imageRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate the tilt angles based on mouse position
    const x = ((clientX - centerX) / (width * 2)) * 50;
    const y = ((clientY - centerY) / (height * 2)) * 50;

    requestAnimationFrame(() => {
      setTilt({ x, y });
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      className="tilted-image-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
      <img
        ref={imageRef}
        className="tilted-image"
        src={ai}
        alt="Tilted Image"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        }}
      />
    </div>
  );
};

export default TiltedImage;
