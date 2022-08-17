import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  min-width: 30px;

  padding: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  border-radius: ${p => p.theme.radii.md};
  margin-bottom: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  border-color: inherit;
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.secondary};
  }
`;
export const ContactName = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-right: ${p => p.theme.space[2]}px;
`;

export const ContactNumber = styled.span`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-right: ${p => p.theme.space[2]}px;
`;
