import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useMatrixSettings } from 'hooks';
import { toHex } from 'utils';

type Column = {
  x: number;
  stackCounter: number;
  stackHeight: number;
};

const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  display: block;
`;

const getNewColumns = (maxStackHeight: number) => {
  const columns: Column[] = [];

  for (let i = 0; i < window.innerWidth / 20; ++i) {
    const column: Column = {
      x: i * 20,
      stackCounter: 0,
      stackHeight: 10 + Math.random() * maxStackHeight
    };

    columns.push(column);
  }

  return columns;
};

const Matrix: React.FC = () => {
  const { color, backgroundColor, velocity, fadeFactor } = useMatrixSettings();

  const [columns, setColumns] = useState(getNewColumns(Math.ceil(window.innerHeight / 20)));

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setCanvasSize();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setCanvasSize();
      setColumns(getNewColumns(Math.ceil(window.innerHeight / 20)));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const draw = () => {
      const canvas = canvasRef.current;

      if (!canvas) {
        return;
      }

      const ctx = canvas.getContext('2d')!;

      // draw a semi transparent rectangle on top of the scene to slowly fade older characters
      ctx.fillStyle = `${backgroundColor}${toHex(fadeFactor * 255)}`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // pick a font slightly smaller than the tile size
      ctx.font = 20 - 2 + 'px monospace';
      ctx.fillStyle = color;

      for (let i = 0; i < columns.length; ++i) {
        // pick a random ascii character (change the 94 to a higher number to include more characters)
        const randomCharacter = String.fromCharCode(33 + Math.floor(Math.random() * 94));
        ctx.fillText(randomCharacter, columns[i].x, columns[i].stackCounter * 20 + 20);
      }
    };

    draw();
  }, [color, backgroundColor, fadeFactor, columns]);

  useEffect(() => {
    const maxStackHeight = Math.ceil(window.innerHeight / 20);

    const nextColumns = columns.map((column) => {
      let nextColumn: Column;

      if (column.stackCounter >= column.stackHeight) {
        nextColumn = {
          ...column,
          stackCounter: 0,
          stackHeight: 10 + Math.random() * maxStackHeight
        };
      } else {
        nextColumn = { ...column, stackCounter: column.stackCounter + 1 };
      }

      return nextColumn;
    });

    const timeoutId = window.setTimeout(() => setColumns(nextColumns), velocity);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [columns, velocity]);

  const setCanvasSize = () => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  return <StyledCanvas style={{ backgroundColor }} ref={canvasRef} />;
};

export default Matrix;
