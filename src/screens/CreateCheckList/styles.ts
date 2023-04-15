import styled from 'styled-components/native';

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