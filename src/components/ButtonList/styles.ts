import styled from 'styled-components/native'

import theme from '../../theme';

export const ButtonCheckList = styled.TouchableOpacity`
  height: 100px;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
  justify-content: space-between;
  background-color: ${theme.colors.white};
`;

export const Title = styled.Text`
    font-size: 20px;
    font-family: ${theme.fonts.semiBold};
    color: ${theme.colors.black};
`;

export const Text = styled.Text`
    font-size: 16px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.black};
`;

export const Date = styled.Text`
    font-size: 10px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.black};
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const FarmInfo = styled.View`
    flex: 1;
    margin-left: 10px;
`;