import React, { useState } from "react";
import "./styles.global.css";
import { Layot } from "./components/Layout";
import { PostList } from "./components/PostList";
import { Main } from "./components/Main";
import { MyForm } from "./components/UI/MyForm";
import { MySelect } from "./components/UI/MySelect";

export interface IPost {
  [index: string]: string;
  id: string;
  title: string;
  description: string;
}

export function App() {
  const [posts, setPosts] = useState<IPost[]>([])

  const [selectedSort, setSelectedSort] = useState("")

  function createPost(newPost: IPost) {
    setPosts([...posts, { id: newPost.id, title: newPost.title, description: newPost.description}]);
  }

  function deletePost(id: string) {   
    setPosts(posts.filter(e => e.id !==  id));
  }

  function sortPosts(sort: string){
    setSelectedSort(sort);
    setPosts([...posts].sort( (a: IPost, b: IPost) => a[sort].localeCompare(b[sort]) ))
  }

  return (
    <Layot>
      <MyForm create={createPost}/>
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultName='Сортировать'
        options={[
          {value: "title", name: "Сортировать по заголовку"},
          {value: "description", name: "Сортировать по описанию"},
        ]}
      />
      <Main>
        <PostList title="Posts" posts={posts} deleteItem={deletePost}></PostList>
      </Main>
    </Layot>
  )
}