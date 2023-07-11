import React from 'react'
import classes from "./myInput.module.css"

interface IMyInput {
  value? : string;
  placeholder?: string;
  onClick?: ((event: React.MouseEvent<HTMLInputElement>) => void) | undefined;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}

export function MyInput({ ...props }: IMyInput) {
  return (
    <input className={classes.myInput} {...props} />
  )
}
