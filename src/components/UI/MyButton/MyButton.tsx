import React from 'react'
import classes from "./myButton.module.css"

interface IMyButton {
  children?: React.ReactNode;
  fs?: 14 | 18 | 22 | 24;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
}

export function MyButton({children, fs = 14, ...props}: IMyButton) {
  return (
    <button className={[classes.myButton, classes[`fs-${fs}`]].join(" ")} {...props}>
      {children}
    </button>
  )
}
