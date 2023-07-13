import React, { useEffect, useMemo, useState } from "react";
import "./styles.global.css";
import { Layot } from "./components/Layout";
import { PostList } from "./components/PostList";
import { Main } from "./components/Main";
import { MyForm } from "./components/UI/MyForm";
import { PostFilter } from "./components/PostFilter";
import { MyModal } from "./components/MyModal";
import { MyButton } from "./components/UI/MyButton";
import { useSortedAndFilteredPosts } from "./hooks/usePosts";
import PostService from "./API/PostSevice";
import { Loader } from "./components/UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPageCount } from "./utils/getPageCount";
import { usePagination } from "./hooks/usePagination";
import { Pagination } from "./components/Pagination/Pagination";

export interface IPost {
  [index: string]: string;
  id: string;
  title: string;
  body: string;
}

export function App() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [filter, setFilter] = useState({sort: "", query: ""})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedAndFilteredPosts] = useSortedAndFilteredPosts(posts, filter.sort, filter.query)
  const [pages] = usePagination(totalPages);

  const [isPostsLoading, postError, fetchPosts] = useFetching(async () => {
    const response = await PostService.getAll(limit, currentPage)
    const totalCount = response.headers["x-total-count"]
  
    setTotalPages(getPageCount(totalCount, limit))
    setPosts(response.data)
  })
  
  useEffect(() => {
    fetchPosts();
  },[currentPage])
   
  function createPost(newPost: IPost) {
    setPosts([...posts, { id: newPost.id, title: newPost.title, body: newPost.body}]);
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
        {postError &&
          <h1>Произошла ошибка: {postError}</h1>
        }
        {isPostsLoading
          ? <Loader />
          : <PostList title="Posts" posts={sortedAndFilteredPosts} deleteItem={deletePost}></PostList>
        }
        <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </Main>
    </Layot>
  )
}