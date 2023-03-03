import { createContext } from 'react';
import { MatrixSettings } from 'types';

const MatrixSettingsContext = createContext<MatrixSettings>({
  color: 'rgb(0 , 255 , 0)',
  changeColor: () => undefined,
  backgroundColor: 'rgb(0, 0, 0)',
  changeBackgroundColor: () => undefined
});

export default MatrixSettingsContext;