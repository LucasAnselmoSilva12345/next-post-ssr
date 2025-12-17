import { getPostById } from '@/service/posts.service';

interface PostPageProps {
  params: {
    id: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostById(params.id); // ✅ objeto direto

  return (
    <main className="container mx-auto py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <p className="mb-6">{post.body}</p>

      <div className="flex gap-2 flex-wrap mb-4">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded bg-muted px-2 py-1 text-xs">
            #{tag}
          </span>
        ))}
      </div>

      <div className="text-sm text-muted-foreground">
        👍 {post.reactions.likes} | 👎 {post.reactions.dislikes} | 👁{' '}
        {post.views}
      </div>
    </main>
  );
}
