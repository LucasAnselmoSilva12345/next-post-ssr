import { getPosts } from '@/service/posts.service';
import { PostList } from './post-list';

export default async function PostsPage() {
  const { posts } = await getPosts();

  return (
    <section>
      <h1>Posts</h1>
      <PostList posts={posts} />
    </section>
  );
}
