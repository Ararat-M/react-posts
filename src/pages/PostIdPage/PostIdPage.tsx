import React, { useEffect, useState } from 'react'
import classes from "./postIdPage.module.css"
import { useFetching } from '../../hooks/useFetching'
import PostService from '../../API/PostSevice'
import { useParams } from 'react-router-dom'
import { Loader } from '../../components/UI/Loader/Loader'
import { PostCommentList } from '../../components/PostCommentList'

export default function PostIdPage() {
  const params = useParams()
  const [post, setPost] = useState({id: "", title: "", body: ""})
  const [comments, setComments] = useState<{[index: string]: string}[]>([])

  const [isPostLoading, postErr, fetchPost] = useFetching(async () => {
    const response = await PostService.getPostById(params.id);
    const data = response.data;
    setPost(data)
  })
  
  const [isPostCommentsLoading, postCommentsErr, fetchPostComments] = useFetching(async () => {
    const response = await PostService.getPostCommentsById(params.id);
    const data = response.data;
    console.log(data);
    setComments(data)
  })
  
  useEffect(()=> {
    fetchPost()
    fetchPostComments()
  }, [])

  return (
    <>
      {isPostLoading
        ? <Loader />
        : 
        <>
        <div className={classes.content}>
          <h1 className={classes.title}>{post.title}</h1>
          <p className={classes.description}>
            {post.body}
          </p>
        </div>
        {isPostCommentsLoading
          ? <Loader />
          :
          <div className={classes.comments}>
            <PostCommentList comments={comments}/>
          </div>  
        }
        </>
      }
    </>
  )
}
