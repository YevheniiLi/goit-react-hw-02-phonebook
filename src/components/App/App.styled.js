import styled from 'styled-components';

export const Phonebook = styled.div`
    background-color: ${p => p.theme.colors.warmneutral};
  display: grid;
  flex-direction: column;
  justify-items: center;
  border: 2px solid purple;
  border-radius: 20px;
  max-width: 300px;
  margin: auto;
  margin-top: 50px;
  padding: 13px;
  border: 1px solid rgba(0, 0, 0, 0.7);
  
  &:hover {
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.7);
    -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.7);
  }
`;
