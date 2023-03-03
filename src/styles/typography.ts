export type Typography = {
  colors: {
    text: string;
    header: string;
    icon: string;
  };
};

const typography: Typography = {
  colors: {
    header: '#d4d4d8', // tailwind zinc-300
    text: '#a1a1aa', // tailwind zinc-400
    icon: '#71717a' // tailwind zinc-500
  }
};

export default typography;
