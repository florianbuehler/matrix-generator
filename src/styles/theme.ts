import typography, { Typography } from './typography';

type Theme = {
  typography: Typography;
  background: string;
};

const theme: Theme = {
  typography,

  background: '#18181b' // tailwind zinc-900
};

export default theme;
