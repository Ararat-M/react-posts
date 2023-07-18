import React, { useEffect, useState } from 'react'
import classes from "./posts.module.css"
import { MyButton } from '../../components/UI/MyButton'
import { MyModal } from '../../components/MyModal'
import { MyForm } from '../../components/UI/MyForm'
import { PostFilter } from '../../components/PostFilter'
import { Loader } from '../../components/UI/Loader/Loader'
import { PostList } from '../../components/PostList'
import { Pagination } from '../../components/Pagination'
import { useSortedAndFilteredPosts } from '../../hooks/usePosts'
import { usePagination } from '../../hooks/usePagination'
import PostService from '../../API/PostSevice'
import { useFetching } from '../../hooks/useFetching'
import { getPageCount } from '../../utils/getPageCount'
import { PostLimit } from '../../components/PostLimit'

export interface IPost {
  [index: string]: string;
  id: string;
  title: string;
  body: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [filter, setFilter] = useState({sort: "", query: ""})
  const [modal, setModal] = useState(false)
  const [totalCount, setTotalCount] = useState(0)
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sortedAndFilteredPosts] = useSortedAndFilteredPosts(posts, filter.sort, filter.query)
  const [pages] = usePagination(totalPages);

  const [isPostsLoading, postError, fetchPosts] = useFetching(async () => {
    const response = await PostService.getAll(limit, currentPage)
    const totalCount = response.headers["x-total-count"];

    setTotalCount(totalCount)
    setTotalPages(getPageCount(totalCount, limit))
    
    setPosts(response.data)
  })

  useEffect(() => {
    currentPage > totalPages
      ? setCurrentPage(1)
      : fetchPosts()
  }, [currentPage, limit, totalPages])
  
  function createPost(newPost: IPost) {
    setPosts([...posts, { id: newPost.id, title: newPost.title, body: newPost.body}]);
    setModal(false)
  }

  function deletePost(id: string) {   
    setPosts(posts.filter(e => e.id !==  id));
  }

  return (
    <div className={classes.content}>
      <div className={classes.controls}>
        <MyButton fs={22} onClick={() => setModal(true)}>
          Создать Пост
        </MyButton>
        <MyModal visibility={modal} setVisibility={setModal}>
          <MyForm create={createPost}/>
        </MyModal>
        <div className={classes["controls__filter"]}>
          <PostFilter filter={filter} setFilter={setFilter} />
        </div>
        <div className={classes["controls__limit"]}>
          <PostLimit 
            limit={limit} 
            setLimit={setLimit}
            maxLimit={totalCount}
          />
        </div>
      </div>
      {postError &&
        <h1>Произошла ошибка: {postError}</h1>
      }
      {isPostsLoading
        ? <Loader />
        : <PostList title="Posts" posts={sortedAndFilteredPosts} deleteItem={deletePost}></PostList>
      }
      {!isPostsLoading &&
        <div className={classes["pagination-container"]}>
          <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
      }
    </div>
  )
}
