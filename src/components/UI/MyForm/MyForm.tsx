import React from 'react'
import { MyButton } from '../MyButton'
import { MyInput } from '../MyInput'
import { IPost } from '../../../App';
import nanoid from 'nanoid';

interface IMyForm {
  create: (object: IPost) => void;
}

export function MyForm({ create }: IMyForm) {

  const [post, setPost] = React.useState({ title: "", description: ""})

  function addNewPost(e:React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    create({ id: nanoid(), title: post.title, description: post.description })
    setPost({ title: "", description: "" })
  }

  return (
    <form action="">
      <MyInput
        placeholder="Заголовок поста"
        value={post.title}
        onChange={(e)=>{setPost( {...post, title: e.target.value} )}}
      />
      <MyInput
        placeholder="Описание поста"
        value={post.description}
        onChange={(e)=>{setPost( {...post, description: e.target.value} )}}
      />
      <MyButton onClick={addNewPost}>Добавить пост</MyButton>
    </form>
  )
}
