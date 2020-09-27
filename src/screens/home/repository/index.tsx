import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Item } from '../../../services/api';

import COLORS from '../../../library/colors';

import {
  Container,
  Name,
  Text,
  Description,
  Section,
  Content,
  RefreshButton,
  RefreshText,
} from './styles';

function Repository({
  item,
  onRefresh,
}: {
  item: Item;
  onRefresh: () => void;
}) {
  return (
    <Container>
      <Name>{item.name}</Name>
      <Description>{item.description}</Description>
      <Section>
        <Content>
          <Icon name="star" size={16} color={COLORS.GRAY_LIGHT} />
          <Text>{item.stars}</Text>
        </Content>
        <Content>
          <Icon name="code-fork" size={16} color={COLORS.GRAY_LIGHT} />
          <Text>{item.forks}</Text>
        </Content>
      </Section>
      <RefreshButton>
        <Icon name="refresh" size={16} color={COLORS.PRIMARY} />
        <RefreshText onPress={onRefresh}>Atualizar</RefreshText>
      </RefreshButton>
    </Container>
  );
}

export default Repository;
