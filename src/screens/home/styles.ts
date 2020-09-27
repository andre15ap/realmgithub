import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { Item } from '../../services/api';

import COLORS from '../../library/colors';

interface Props {
  error?: boolean;
}

export const Container = styled(LinearGradient).attrs({
  colors: [COLORS.PRIMARY, COLORS.PRIMARY_LIGHT],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  padding-top: 30px;
`;

export const Text = styled.Text`
  font-size: 32px;
  color: ${COLORS.WHITE};
  font-weight: bold;
  padding: 0 20px;
`;

export const Form = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 0 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: COLORS.GRAY_DARK,
})`
  flex: 1;
  padding: 12px 15px;
  border-radius: 4px;
  font-size: 16px;
  color: ${COLORS.GRAY_LIGHT};
  background-color: ${COLORS.WHITE};
  border-width: 1px;
  border-color: ${(props: Props) =>
    props.error ? COLORS.DANGER : COLORS.WHITE};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${COLORS.SECONDARY};
  margin-left: 10px;
  padding: 0 16px;
  border-radius: 4px;
  justify-content: center;
`;

export const List = styled(FlatList as new () => FlatList<Item>).attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
