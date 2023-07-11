import React from 'react'
import classes from "./myModal.module.css"

interface IMyModal {
  children?: React.ReactNode;
  visibility: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

export function MyModal({children, visibility, setVisibility}: IMyModal) {
  const modalClasses = [classes.modal]
  
  if (visibility) {
    modalClasses.push([classes.active])
  }
  
  return (
    <div className={modalClasses.join(" ")} onClick={() => setVisibility(false)}>
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
