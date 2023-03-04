import React, { useId } from 'react';
import styled from 'styled-components';

type Props = {
  label: string;
  unit?: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const StyledRangeSlider = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.typography.colors.text};

  width: 100%;
  padding-bottom: 0.25rem;

  input {
    appearance: none;
    background: #52525b;
    height: 3px;
    cursor: pointer;

    &::-webkit-slider-thumb {
      appearance: none;
      background-color: #a1a1aa;
      height: 1.25rem;
      width: 1.25rem;
      border: ${({ theme }) => `2px solid ${theme.background}`};
      border-radius: 50%;
    }
  }
`;

const StyledLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;

  label {
    font-weight: 500;
    color: ${({ theme }) => theme.typography.colors.text};
  }

  span {
    color: ${({ theme }) => theme.typography.colors.additionalInfo};
  }
`;

const RangeSlider: React.FC<Props> = ({ label, unit, id: providedId, value, ...delegated }) => {
  const generatedId = useId();
  const id = providedId || generatedId;

  return (
    <StyledRangeSlider>
      <StyledLabel>
        <label htmlFor={id}>{label}</label>
        <span>
          {value} {unit}
        </span>
      </StyledLabel>
      <input {...delegated} type="range" id={id} value={value} />
    </StyledRangeSlider>
  );
};

export default RangeSlider;
