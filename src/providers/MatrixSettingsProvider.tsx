import React, { useState } from 'react';
import { MatrixSettingsContext } from 'context';

type Props = {
  children: React.ReactNode;
};

const MatrixSettingsProvider: React.FC<Props> = ({ children }) => {
  const [color, setColor] = useState('#00ff00');
  const [backgroundColor, setBackgroundColor] = useState('#000000');
  const [velocity, setVelocity] = useState(50);
  const [fadeFactor, setFadeFactor] = useState(0.05);

  const value = {
    color,
    changeColor: (color: string) => setColor(color),
    backgroundColor,
    changeBackgroundColor: (backgroundColor: string) => setBackgroundColor(backgroundColor),
    velocity,
    changeVelocity: (velocity: number) => setVelocity(velocity),
    fadeFactor,
    changeFadeFactor: (fadeFactor: number) => setFadeFactor(fadeFactor)
  };

  return <MatrixSettingsContext.Provider value={value}>{children}</MatrixSettingsContext.Provider>;
};

export default MatrixSettingsProvider;
