import React, { useMemo, useState } from "react";
import "./styles.global.css";
import { Layot } from "./components/Layout";
import { PostList } from "./components/PostList";
import { Main } from "./components/Main";
import { MyForm } from "./components/UI/MyForm";
import { MySelect } from "./components/UI/MySelect";
import { MyInput } from "./components/UI/MyInput";
import { PostFilter } from "./components/PostFilter";

export interface IPost {
  [index: string]: string;
  id: string;
  title: string;
  description: string;
}

export function App() {
  const [posts, setPosts] = useState<IPost[]>([])

  const [selectedSort, setSelectedSort] = useState("")

  const [searchQuery, setSearchQuery] = useState("")

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort( (a: IPost, b: IPost) => a[selectedSort].localeCompare(b[selectedSort]) )
    }
    
    return posts
  }, [selectedSort, posts])

  const sortedAndFilteredPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [sortedPosts, searchQuery])

  function createPost(newPost: IPost) {
    setPosts([...posts, { id: newPost.id, title: newPost.title, description: newPost.description}]);
  }

  function deletePost(id: string) {   
    setPosts(posts.filter(e => e.id !==  id));
  }

  return (
    <Layot>
      <MyForm create={createPost}/>
      <MyInput 
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="поиск..." 
      />
      <PostFilter
        value={selectedSort}
        onChange={e => setSelectedSort(e.target.value)}
      />
      <Main>
        <PostList title="Posts" posts={sortedAndFilteredPosts} deleteItem={deletePost}></PostList>
      </Main>
    </Layot>
  )
}