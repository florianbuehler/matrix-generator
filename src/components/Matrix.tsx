import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  display: block;
  background: black;
`;

const Matrix: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const sizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    sizeCanvas();

    window.addEventListener('resize', sizeCanvas);

    return () => {
      window.removeEventListener('resize', sizeCanvas);
    };
  }, []);

  return <StyledCanvas ref={canvasRef} />;
};

export default Matrix;
