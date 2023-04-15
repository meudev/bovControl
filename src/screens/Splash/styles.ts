import styled from 'styled-components/native'

import theme from '../../theme';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
`;

export const Logo = styled.Image`
  width: 100%;
  object-fit: contain;
`;