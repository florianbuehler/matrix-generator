export type Typography = {
  colors: {
    header: string;
    text: string;
    additionalInfo: string;
    icon: string;
  };
};

const typography: Typography = {
  colors: {
    header: '#d4d4d8', // tailwind zinc-300
    text: '#d4d4d8', // tailwind zinc-300
    additionalInfo: '#a1a1aa', // tailwind zinc-400
    icon: '#71717a' // tailwind zinc-500
  }
};

export default typography;
