import React from 'react'
import classes from "./postList.module.css"
import nanoid from "nanoid"
import { PostItem } from '../PostItem'
import { IPost } from '../../App';

interface IPostList {
  title: string;
  posts: Array<IPost>;
  deleteItem: (id: string) => void;
}

export function PostList({ deleteItem, title, posts}: IPostList) {

  if (!posts.length) return <div className={classes.err}> Посты не найдены </div>

  return (
    <div>
      <span className={classes.title}>{title}</span>
      <ul className={classes.list}>
        {posts.map(item => {
          return <PostItem id={item.id} title={item.title} description={item.description} key={nanoid()} delete={deleteItem}/>
        })}
      </ul>
    </div>
  )
}