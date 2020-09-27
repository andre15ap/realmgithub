import React, { useEffect, useState } from 'react';

import { Keyboard } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import COLORS from '../../library/colors';

import { Item, getRepos } from '../../services/api';
import getRealm from '../../services/realm';

import Repository from './repository';

import { Container, Text, Form, Input, Button, List } from './styles';

function HomeScreen() {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [repositories, setRepositories] = useState<Item[] | any>([]);

  const handleInput = (value: string) => {
    setInput(value);
  };

  const saveRepository = async (repository: any) => {
    const data = {
      id: repository.id,
      name: repository.name,
      fullName: repository.full_name,
      description: repository.description,
      stars: repository.stargazers_count,
      forks: repository.forks_count,
    };

    const realm = await getRealm();

    try {
      realm.write(() => {
        realm.create('Repository', data, true);
      });
    } catch (e) {
      console.log(e);
    }

    setRepositories(
      repositories.map((value: Item) => (value.id === data.id ? data : value))
    );
  };

  const getResponseRepo = async (repoName: string) => {
    const response = await getRepos(repoName);
    if (response) {
      saveRepository(response);
      setError(false);
      setInput('');
    } else {
      setError(true);
    }
  };

  const handleSubmit = async () => {
    Keyboard.dismiss();
    getResponseRepo(input);
  };

  const handleRefreshRepositories = async (repository: Item) => {
    getResponseRepo(repository.fullName);
  };

  const loadRepositories = async () => {
    const realm = await getRealm();
    const data = realm.objects('Repository').sorted('stars', true);
    setRepositories(data);
  };

  useEffect(() => {
    loadRepositories();
  }, []);

  return (
    <Container>
      <Text>Repositórios</Text>
      <Form>
        <Input
          value={input}
          onChangeText={handleInput}
          error={error}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositório"
        />
        <Button onPress={handleSubmit}>
          <Icon name="add" size={22} color={COLORS.WHITE} />
        </Button>
      </Form>

      <List
        keyboardShouldPersistTaps="handled"
        data={repositories}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <Repository
            item={item}
            onRefresh={() => handleRefreshRepositories(item)}
          />
        )}
      />
    </Container>
  );
}

export default HomeScreen;
