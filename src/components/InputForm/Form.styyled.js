import styled from "styled-components"


export const FormStyle = styled.div`
    display: table-caption;
    
`;

export const ButtonForm = styled.button`
cursor: pointer;
padding: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.heading};
  border-radius: ${p => p.theme.radii.md};
  margin-bottom: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.lamp};
  color: ${p => p.theme.colors.red};
  border-color: ${p => p.theme.colors.sub};
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.purple};
    color: ${p => p.theme.colors.black}
  };
`

export const FormName = styled.input`
margin-right: ${p => p.theme.space[4]}px;
color: ${p => p.theme.colors.yellow};
`