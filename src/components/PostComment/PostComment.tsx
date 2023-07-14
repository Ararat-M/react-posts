import React from 'react'

import classes from "./postcomment.module.css"

interface IPostComment {
  name: string;
  email: string;
  body: string;
}

export function PostComment({name, email, body}: IPostComment) {
  return (
    <div className={classes.item}>
      <div className={classes.meta}>
        <span className={classes.title}>
          {name}
        </span>
        <span className={classes.email}>
          {email}
        </span>
      </div>
      <p className={classes.body}>
        {body}
      </p>
    </div>
  )
}
