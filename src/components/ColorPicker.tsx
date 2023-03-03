import React, { ChangeEvent, useId } from 'react';
import styled from 'styled-components';

type Props = {
  label: string;
  color: string;
  onColorChange: (color: string) => void;
};

const StyledColorPicker = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.typography.colors.text};

  width: 100%;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
`;

const StyledColorDisplay = styled.div`
  width: 100%;
  height: 40px;
  border: 2px #52525b solid;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
  }

  > input {
    width: 100%;
    height: 100%;
    color-scheme: dark;

    opacity: 0;

    &:hover {
      cursor: pointer;
    }
  }
`;

const ColorPicker: React.FC<Props> = ({ label, color, onColorChange }) => {
  const id = useId();

  const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    onColorChange(event.target.value);
  };

  return (
    <StyledColorPicker>
      <div>
        <label htmlFor={id}>{label}</label>
        <span>{color}</span>
      </div>
      <StyledColorDisplay style={{ backgroundColor: color }}>
        <input id={id} type="color" value={color} onChange={handleColorChange} />
      </StyledColorDisplay>
    </StyledColorPicker>
  );
};

export default ColorPicker;
