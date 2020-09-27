import axios from 'axios';

import getRealm from './realm';

export interface Item {
  id: number;
  name: string;
  fullName: string;
  description: string;
  stars: number;
  forks: number;
}

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export async function getRepos(repoName: string) {
  try {
    const response = await api.get(`repos/${repoName}`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
}
