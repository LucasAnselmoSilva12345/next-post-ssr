import { IPostResponse } from '@/types/post';

export async function getPosts(): Promise<IPostResponse> {
  const response = await fetch('https://dummyjson.com/posts', {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Erro ao buscar os posts');
  }

  return response.json();
}
