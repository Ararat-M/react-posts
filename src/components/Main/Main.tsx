import React from 'react'
import classes from "./main.module.css"

interface IMain {
  children: React.ReactNode;
}

export function Main({ children }: IMain) {
  return (
    <div className={classes.main}>
      {children}
    </div>
  )
}
