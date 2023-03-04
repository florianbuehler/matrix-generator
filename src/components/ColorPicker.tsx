import React, { useId } from 'react';
import styled from 'styled-components';

type Props = {
  label: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const StyledColorPicker = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const StyledLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  label {
    font-weight: 500;
    color: ${({ theme }) => theme.typography.colors.text};
  }

  span {
    color: ${({ theme }) => theme.typography.colors.additionalInfo};
  }
`;

const StyledColorDisplay = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  border: 2px solid #52525b;
  border-radius: 6px;
  cursor: pointer;

  > div {
    width: 100%;
    border: ${({ theme }) => `2px solid ${theme.background}`};
    border-radius: 5px;
  }

  input {
    width: 100%;
    height: 100%;
    color-scheme: dark;
    cursor: pointer;

    opacity: 0;
  }
`;

const ColorPicker: React.FC<Props> = ({ label, id: providedId, value, ...delegated }) => {
  const generatedId = useId();
  const id = providedId || generatedId;

  const backgroundColor = typeof value === 'string' ? value : '#000000';

  return (
    <StyledColorPicker>
      <StyledLabel>
        <label htmlFor={id}>{label}</label>
        <span>{value}</span>
      </StyledLabel>
      <StyledColorDisplay>
        <div style={{ backgroundColor: backgroundColor }}>
          <input {...delegated} id={id} type="color" value={value} />
        </div>
      </StyledColorDisplay>
    </StyledColorPicker>
  );
};

export default ColorPicker;
