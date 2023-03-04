import React from 'react';
import styled from 'styled-components';
import { ColorPicker, Footer, Header, RangeSlider } from 'components';
import { useMatrixSettings } from 'hooks';

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
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .form-row {
    display: flex;
    gap: 1.5rem;
  }
`;

const Control: React.FC = () => {
  const { color, changeColor, backgroundColor, changeBackgroundColor, fadeFactor, changeFadeFactor } =
    useMatrixSettings();

  return (
    <StyledControl>
      <Header />
      <main>
        <StyledForm>
          <div className="form-row" onSubmit={(e) => e.preventDefault()}>
            <ColorPicker label="Color:" value={color} onChange={(event) => changeColor(event.target.value)} />
            <ColorPicker
              label="Background:"
              value={backgroundColor}
              onChange={(event) => changeBackgroundColor(event.target.value)}
            />
          </div>
          <RangeSlider
            label="Fade Factor:"
            value={fadeFactor}
            onChange={(event) => changeFadeFactor(+event.target.value)}
            min={0}
            max={1}
            step={0.01}
          />
        </StyledForm>
      </main>
      <Footer />
    </StyledControl>
  );
};

export default Control;
