import { useMemo } from "react";
import { IPost } from "../pages/Posts/Posts";

export function useSortedPost(posts: IPost[], sort: string) {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort( (a: IPost, b: IPost) => a[sort].localeCompare(b[sort]) )
    }
    
    return posts
  }, [sort, posts])

  return [sortedPosts]
}

export function useSortedAndFilteredPosts(posts: IPost[], sort: string, query: string) {
  const [sortedPosts] = useSortedPost(posts, sort)

  const sortedAndFilteredPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }, [sortedPosts, query])

  return [sortedAndFilteredPosts]
}