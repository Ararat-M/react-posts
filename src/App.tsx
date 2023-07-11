import React, { useMemo, useState } from "react";
import "./styles.global.css";
import { Layot } from "./components/Layout";
import { PostList } from "./components/PostList";
import { Main } from "./components/Main";
import { MyForm } from "./components/UI/MyForm";
import { PostFilter } from "./components/PostFilter";

export interface IPost {
  [index: string]: string;
  id: string;
  title: string;
  description: string;
}

export function App() {
  const [posts, setPosts] = useState<IPost[]>([])

  const [filter, setFilter] = useState({query: "", sort: ""})

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort( (a: IPost, b: IPost) => a[filter.sort].localeCompare(b[filter.sort]) )
    }
    
    return posts
  }, [filter.sort, posts])

  const sortedAndFilteredPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [sortedPosts, filter.query])

  function createPost(newPost: IPost) {
    setPosts([...posts, { id: newPost.id, title: newPost.title, description: newPost.description}]);
  }

  function deletePost(id: string) {   
    setPosts(posts.filter(e => e.id !==  id));
  }

  return (
    <Layot>
      <MyForm create={createPost}/>
      <PostFilter filter={filter} setFilter={setFilter} />
      <Main>
        <PostList title="Posts" posts={sortedAndFilteredPosts} deleteItem={deletePost}></PostList>
      </Main>
    </Layot>
  )
}