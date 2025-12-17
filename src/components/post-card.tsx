import { IPost } from '@/types/post';
import Link from 'next/link';

interface IPostCard {
  post: IPost;
}

export default function PostCard({ post }: IPostCard) {
  return (
    <div className="border-2 border-emerald-500">
      <span className="block bg-emerald-500 text-white text-center">
        Post - {post.id}
      </span>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      {post.tags.map((tag) => (
        <p key={tag}>{tag}</p>
      ))}
      <p>{post.reactions.likes}</p>
      <p>{post.reactions.dislikes}</p>
      <p>{post.views}</p>
      <p>{post.userId}</p>

      <Link href={`/posts/${post.id}`} className="block bg-orange-500">
        Ver Post
      </Link>
    </div>
  );
}
