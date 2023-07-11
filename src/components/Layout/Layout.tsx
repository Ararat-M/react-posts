import React from 'react'
import styles from "./layout.module.css"

interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layot({ children }: ILayoutProps) {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  )
}
