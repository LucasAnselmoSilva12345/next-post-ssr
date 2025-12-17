'use client';

import { usePostStore } from '@/store/posts.store';
import { IPost } from '@/types/post';
import { useEffect } from 'react';
import PostCard from './post-card';

interface IPostList {
  posts: IPost[];
}

export function PostList({ posts }: IPostList) {
  const setPosts = usePostStore((state) => state.setPosts);

  useEffect(() => {
    setPosts(posts);
  }, [posts, setPosts]);
  return (
    <div className=" space-y-7">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
