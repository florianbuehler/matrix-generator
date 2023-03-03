import React from 'react';
import styled from 'styled-components';
import { ColorPicker, Header } from 'components';
import { useMatrixSettings } from 'hooks';

const StyledControl = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  //background: #171717;
  background: ${({ theme }) => theme.background};
  opacity: 0.9;
  padding: 1.75rem 1.75rem 1.75rem 1.75rem;

  width: 25rem;
`;

const StyledForm = styled.form`
  .form-row {
    display: flex;
    gap: 1.25rem;
  }
`;

const Control: React.FC = () => {
  const { color, changeColor, backgroundColor, changeBackgroundColor } = useMatrixSettings();

  return (
    <StyledControl>
      <Header />
      <main>
        <StyledForm>
          <div className="form-row">
            <ColorPicker label="Color:" color={color} onColorChange={changeColor} />
            <ColorPicker label="Background:" color={backgroundColor} onColorChange={changeBackgroundColor} />
          </div>
        </StyledForm>
      </main>
    </StyledControl>
  );
};

export default Control;
