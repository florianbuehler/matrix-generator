import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.75rem;

  h1 {
    margin: 0 0 0.5rem 0;
    font-size: 28px;
    color: ${({ theme }) => theme.typography.colors.header};
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.typography.colors.additionalInfo};
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Matrix Generator</h1>
      <p>Create your own beautiful matrix effect</p>
    </StyledHeader>
  );
};

export default Header;
