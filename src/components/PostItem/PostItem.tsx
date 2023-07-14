import React from 'react'
import classes from "./postItem.module.css"
import { MyButton } from '../UI/MyButton';
import { useNavigate  } from 'react-router-dom';

interface IPostItem{
  id: string;
  title: string;
  body: string;
  delete: (id: string) => void;
}

export function PostItem({ ...props } : IPostItem) {
  const navigation = useNavigate()
  
  function deleteItem() {
    props.delete(props.id);
  }

  return (
    <li className={classes.item}>
      <div>
        <span className={classes.title}>
          {props.title}
        </span>
        <p className={classes.body}>
          {props.body}
        </p>
        <span className={classes.id}>
          {props.id}
        </span>
      </div>
      <div className={classes.btns}>
        <MyButton onClick={() => navigation(`${props.id}`)}>Открыть</MyButton>
        <MyButton onClick={deleteItem}>Удалить</MyButton>
      </div>
    </li>
  )
}