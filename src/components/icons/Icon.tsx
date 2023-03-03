import React from 'react';
import { GitHubIcon } from 'components/icons';

export type IconName = 'github';

type Props = {
  name: IconName;
};

const Icon: React.FC<Props> = ({ name }) => {
  switch (name) {
    case 'github':
      return <GitHubIcon />;
    default:
      throw new Error(`No icon with name ${name}.`);
  }
};

export default Icon;
