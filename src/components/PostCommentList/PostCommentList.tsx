import React from 'react'
import classes from "./postCommentList.module.css"
import { PostComment } from '../PostComment';

interface IPostCommentList {
  comments: {[index: string]: string}[]
}

export function PostCommentList({comments}: IPostCommentList) {

  if (!comments.length) return <div> Коментариев нет </div>

  return (
    <>
      <span className={classes.title}>Comments</span>
      <ul className={classes.list}>
        {comments.map(item => {
          return <PostComment key={item.id} name={item.name} email={item.email} body={item.body} />
        })}
      </ul>
    </>
  )
}