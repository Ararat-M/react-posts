import React from 'react'
import classes from "./myForm.module.css"
import { MyButton } from '../MyButton'
import { MyInput } from '../MyInput'
import nanoid from 'nanoid';

interface IMyForm {
  create: (object: any) => void;
}

export function MyForm({ create }: IMyForm) {

  const [post, setPost] = React.useState({ title: "", body: ""})

  function addNewPost(e:React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    create({ id: nanoid(), title: post.title, body: post.body })
    setPost({ title: "", body: "" })
  }

  return (
    <>
      <form className={classes.form} action="">
        <MyInput
          placeholder="Заголовок поста"
          value={post.title}
          onChange={(e)=>{setPost( {...post, title: e.target.value} )}}
        />
        <MyInput
          placeholder="Описание поста"
          value={post.body}
          onChange={(e)=>{setPost( {...post, body: e.target.value} )}}
        />
        <MyButton fs={18} onClick={addNewPost}>Добавить пост</MyButton>
      </form>
    </>
  )
}
