import styled from 'styled-components/native';
import { TextInput } from "react-native";

import theme from "../../theme";

export const Label = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  font-family: ${theme.fonts.semiBold};
  color: ${theme.colors.black};
`;

export const InputContainer = styled(TextInput)`
  margin-top: 10px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid ${theme.colors.primary};
  padding: 10px;
  font-family: ${theme.fonts.regular};
`;