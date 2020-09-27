import styled from 'styled-components/native';

import COLORS from '../../../library/colors';

export const Container = styled.View`
  background-color: ${COLORS.WHITE};
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 15px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${COLORS.GRAY_LIGHT};
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: ${COLORS.GRAY_DARK};
  margin-top: 5px;
  line-height: 20px;
`;

export const Section = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const Content = styled.View`
  flex-direction: row;
  margin-right: 15px;
  align-items: center;
`;

export const Text = styled.Text`
  margin-left: 6px;
`;

export const RefreshButton = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
`;

export const RefreshText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-left: 5px;
  color: ${COLORS.PRIMARY};
  text-transform: uppercase;
`;
