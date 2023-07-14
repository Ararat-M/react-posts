import React from 'react'
import classes from "./postList.module.css"
import { PostItem } from '../PostItem'
import { IPost } from '../../pages/Posts/Posts';

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
          return <PostItem id={item.id} title={item.title} body={item.body} key={item.id} delete={deleteItem}/>
        })}
      </ul>
    </div>
  )
}
