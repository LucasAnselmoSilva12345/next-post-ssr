import { render, screen, waitFor } from '@testing-library/react';
import PostsPage from '@/app/posts/page';

describe('PostsPage (integração)', () => {
  it('deve renderizar os posts vindos da API', async () => {
    render(<PostsPage />);

    await waitFor(() => {
      expect(screen.getByText('Post Mock')).toBeInTheDocument();
    });
  });
});
