export type MatrixSettings = {
  color: string;
  changeColor: (color: string) => void;
  backgroundColor: string;
  changeBackgroundColor: (backgroundColor: string) => void;
  velocity: number;
  changeVelocity: (velocity: number) => void;
  fadeFactor: number;
  changeFadeFactor: (fadeFactor: number) => void;
};
