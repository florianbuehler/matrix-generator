import React from 'react';
import styled from 'styled-components';
import { ColorPicker, Header } from 'components';
import { useMatrixSettings } from 'hooks';
import Footer from './Footer';

const StyledControl = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  background: ${({ theme }) => theme.background};
  border-radius: 8px;
  opacity: 0.9;
  padding: 1.75rem 1.75rem 1.75rem 1.75rem;

  width: 27.5rem;
`;

const StyledForm = styled.form`
  .form-row {
    display: flex;
    gap: 1.5rem;
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
      <Footer />
    </StyledControl>
  );
};

export default Control;
