import styled from 'styled-components/native'

import theme from '../../theme';

export const Container = styled.View`
  flex: 1;
  padding: 0;
  background-color: ${theme.colors.background};
`;

export const Body = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 50,
  },
  showsVerticalScrollIndicator: false
})`
  padding: 20px;
`;

export const Content = styled.View`
  flex: 1;
  border-radius: 5px;
  padding: 10px;
  background-color: ${theme.colors.white};
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${theme.fonts.semiBold};
  color: ${theme.colors.black};
  margin-bottom: 30px;
`;

export const Label = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  font-family: ${theme.fonts.semiBold};
  color: ${theme.colors.black};
`;

export const Text = styled.Text`
  margin-top: 5px;
  font-size: 14px;
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.black};
`;
