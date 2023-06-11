import React, { useEffect, useRef } from 'react';
import React from 'react';


const GlitchImage = ({ src, alt }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const applyGlitchEffect = () => {
      const image = imageRef.current;

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const offset = Math.floor(Math.random() * 20) - 10;

        data[i] += offset; // R
        data[i + 1] += offset; // G
        data[i + 2] += offset; // B
      }

      ctx.putImageData(imageData, 0, 0);
      image.src = canvas.toDataURL();
    };

    applyGlitchEffect();
  }, []);

  return <img ref={imageRef} src={src} alt={alt} />;
};

export default GlitchImage;
