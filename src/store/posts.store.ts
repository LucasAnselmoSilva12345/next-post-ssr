import { IPost } from '@/types/post';
import { create } from 'zustand';

interface IPostsState {
  posts: IPost[];
  setPosts: (posts: IPost[]) => void;
}

export const usePostStore = create<IPostsState>((set) => ({
  posts: [],
  setPosts: (posts) => {
    set({
      posts,
    });
  },
}));
