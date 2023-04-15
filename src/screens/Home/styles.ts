import styled from 'styled-components/native'
import { FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import theme from '../../theme';

import { ChecklistDTO } from '../../dto/ChecklistDTO';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Body = styled.View`
    flex: 1;
    padding: 20px;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.black};
    margin-bottom: 20px;
`;

export const ListCheckLists = styled(FlatList as new () => FlatList<ChecklistDTO>).attrs({
  contentContainerStyle: {
    padding: 0
  },
  showsVerticalScrollIndicator: false
})``;

export const ButtonAdd = styled.TouchableOpacity`
  position: absolute;
  bottom: ${30 + getBottomSpace()}px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
`;
