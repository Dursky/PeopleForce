import axios from 'axios';
import {SERVER_URL, API_KEY} from '@env';

export const getAllPosts = async () =>
  axios.get(`${SERVER_URL}/posts`, {
    headers: {'x-api-key': API_KEY},
  });

export const getPost = async (id: string) =>
  axios
    .get(`${SERVER_URL}/posts/${id}`, {
      headers: {'x-api-key': API_KEY},
    })
    .then(i => i.data);

export const createPost = async ({
  title,
  body,
}: {
  title: string;
  body: string;
}) =>
  axios
    .post(
      `${SERVER_URL}/posts`,
      {title, body},
      {
        headers: {'x-api-key': API_KEY},
      },
    )
    .then(i => i.data);

export const deletePost = async (id: string) =>
  axios
    .delete(`${SERVER_URL}/posts/${id}`, {
      headers: {'x-api-key': API_KEY},
    })
    .then(i => i.data);
