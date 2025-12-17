import { render, screen } from '@testing-library/react';
import PostCard from '@/components/post-card';
import { IPost } from '@/types/post';

const mockPost: IPost = {
  id: 1,
  title: 'Post de Teste',
  body: 'Conteúdo do post',
  tags: ['next', 'react'],
  reactions: { likes: 10, dislikes: 2 },
  views: 100,
  userId: 1,
};

describe('PostCard', () => {
  it('deve renderizar titulo e conteudo do post', () => {
    render(<PostCard post={mockPost} />);
    expect(screen.getByText('Post de Teste')).toBeInTheDocument();
    expect(screen.getByText('Conteúdo do post')).toBeInTheDocument();
  });

  it('deve renderizar as tags', () => {
    render(<PostCard post={mockPost} />);

    expect(screen.getByText('next')).toBeInTheDocument();
    expect(screen.getByText('react')).toBeInTheDocument();
  });
});
