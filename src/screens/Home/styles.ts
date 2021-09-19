import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  background-color: ${({ theme })=> theme.colors.background_primary};
  justify-content: center;
  align-content: center;
  
`;

export const Title = styled.Text`
  text-align: center;
`;
