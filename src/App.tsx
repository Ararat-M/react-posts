import React, { useMemo, useState } from "react";
import "./styles.global.css";
import { Layot } from "./components/Layout";
import { PostList } from "./components/PostList";
import { Main } from "./components/Main";
import { MyForm } from "./components/UI/MyForm";
import { PostFilter } from "./components/PostFilter";
import { MyModal } from "./components/MyModal";
import { MyButton } from "./components/UI/MyButton";
import { useSortedAndFilteredPosts } from "./hooks/usePosts";

export interface IPost {
  [index: string]: string;
  id: string;
  title: string;
  description: string;
}

export function App() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [filter, setFilter] = useState({sort: "", query: ""})
  const [modal, setModal] = useState(false)
  const sortedAndFilteredPosts = useSortedAndFilteredPosts(posts, filter.sort, filter.query)

  function createPost(newPost: IPost) {
    setPosts([...posts, { id: newPost.id, title: newPost.title, description: newPost.description}]);
    setModal(false)
  }

  function deletePost(id: string) {   
    setPosts(posts.filter(e => e.id !==  id));
  }

  return (
    <Layot>
      <MyButton onClick={() => setModal(true)}>
        Создать Пост
      </MyButton>
      <MyModal visibility={modal} setVisibility={setModal}>
        <MyForm create={createPost}/>
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <Main>
        <PostList title="Posts" posts={sortedAndFilteredPosts} deleteItem={deletePost}></PostList>
      </Main>
    </Layot>
  )
}