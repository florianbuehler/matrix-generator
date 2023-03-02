import { useContext } from 'react';
import { MatrixSettingsContext } from 'context';
import { MatrixSettings } from 'types';

const useMatrixSettings = () => useContext<MatrixSettings>(MatrixSettingsContext);

export default useMatrixSettings;
