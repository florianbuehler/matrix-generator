import React from 'react';
import styled from 'styled-components';
import { Icon } from './icons';
import { useMatrixSettings } from 'hooks';

type StyledProps = {
  color: string;
};

const StyledFooter = styled.footer<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  margin-top: 2.5rem;
  color: ${({ theme }) => theme.typography.colors.additionalInfo};
  font-size: 14px;

  a {
    display: flex;
    align-items: center;

    &:hover {
      svg {
        fill: ${({ color }) => color};
      }
    }
  }

  svg {
    height: 20px;
    fill: ${({ theme }) => theme.typography.colors.icon};
  }
`;

const Footer: React.FC = () => {
  const { color } = useMatrixSettings();

  return (
    <StyledFooter color={color}>
      <span>Built by Florian Bühler</span>
      <a href="https://github.com/florianbuehler/matrix-generator" target="_blank" rel="noreferrer">
        <Icon name="github" />
      </a>
    </StyledFooter>
  );
};

export default Footer;
