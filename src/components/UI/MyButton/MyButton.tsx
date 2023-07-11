import React from 'react'
import classes from "./myButton.module.css"

interface IMyButton {
  children?: React.ReactNode;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
}

export function MyButton({children, ...props}: IMyButton) {
  return (
    <button className={classes.myButton} {...props}>
      {children}
    </button>
  )
}
