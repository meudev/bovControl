import styled from 'styled-components/native'
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import theme from '../../theme';

export const Container = styled.View`
  padding: 0 20px;
  padding-top: ${Platform.OS == 'ios' ? 60 : 10 + getStatusBarHeight()}px;
  height: ${Platform.OS == 'ios' ? 110 : 60 + getStatusBarHeight()}px;
  background-color: ${theme.colors.primary};
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
`;

export const Title = styled.Text`
    margin-left: 20px;
    font-size: 24px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.white};
`;

export const ButtonBack = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  border: 1px solid ${theme.colors.white};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;