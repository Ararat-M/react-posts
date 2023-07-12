import React from 'react'
import classes from "./loader.module.css"

export function Loader() {
  return (
    <div className={classes.container}>
      <div className={classes.loader}></div>
    </div>
  )
}
