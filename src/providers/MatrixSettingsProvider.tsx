import React, { useState } from 'react';
import { MatrixSettingsContext } from 'context';

type Props = {
  children: React.ReactNode;
};

const MatrixSettingsProvider: React.FC<Props> = ({ children }) => {
  const [color, setColor] = useState('rgb(0, 255, 0)');
  const [backgroundColor, setBackgroundColor] = useState('rgb(0, 0, 0)');

  const value = {
    color,
    changeColor: (color: string) => setColor(color),
    backgroundColor,
    changeBackgroundColor: (backgroundColor: string) => setBackgroundColor(backgroundColor)
  };

  return <MatrixSettingsContext.Provider value={value}>{children}</MatrixSettingsContext.Provider>;
};

export default MatrixSettingsProvider;
