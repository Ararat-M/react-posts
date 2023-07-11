import React from 'react'
import classes from "./postItem.module.css"
import { MyButton } from '../UI/MyButton';
import { IPost } from '../../App';

interface IPostItem extends IPost{
  delete: (id: string) => void;
}

export function PostItem({ ...props } : IPostItem) {

  function deleteItem() {
    props.delete(props.id);
  }

  return (
    <li className={classes.item}>
      <div>
        <span className={classes.title}>
          {props.title}
        </span>
        <p className={classes.description}>
          {props.description}
        </p>
        <span className={classes.id}>
          {props.id}
        </span>
      </div>
      <MyButton onClick={deleteItem}>Удалить</MyButton>
    </li>
  )
}