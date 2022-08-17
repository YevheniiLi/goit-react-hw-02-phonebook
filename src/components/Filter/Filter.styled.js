import styled from 'styled-components';

export const InputName = styled.p`
  display: block;
  margin-bottom: ${p => p.theme.space[2]};
  margin-top: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.l};
`;
export const InputText = styled.input`
  font-size: ${p => p.theme.fontSizes.xl};
  margin-bottom: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.md};
  border: ${p => p.theme.borders.large};
  padding: ${p => p.theme.space[2]}px;
  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.secondary};
  }
`;
