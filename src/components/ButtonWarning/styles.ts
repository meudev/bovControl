import styled from 'styled-components/native'

import theme from '../../theme';

export const Button = styled.TouchableOpacity`
  margin-top: 30px;
  width: 100%;
  height: 60px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.warning};
`;

export const Text = styled.Text`
  font-size: 20px;
  font-family: ${theme.fonts.semiBold};
  color: ${theme.colors.white};
`;