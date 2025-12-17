import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://dummyjson.com/posts', () => {
    return HttpResponse.json({
      posts: [
        {
          id: 1,
          title: 'Post Mock',
          body: 'Conteúdo mockado',
          tags: ['test'],
          reactions: { likes: 5, dislikes: 0 },
          views: 50,
          userId: 1,
        },
      ],
    });
  }),
];
