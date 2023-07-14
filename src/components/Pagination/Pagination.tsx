import React from 'react'
import classes from "./pagination.module.css"
interface IPagination {
  pages: number[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export function Pagination({pages, currentPage, setCurrentPage}: IPagination) {
  if (pages.length <= 1) return(<></>)
  
  return (
    <div className={classes["pages-list"]}>
      {pages.map((elem) => {      
        return (
        <button 
          className={elem !== currentPage ? classes.page : [classes.page, classes["page_active"]].join(" ")} 
          key={elem} 
          onClick={(e) => setCurrentPage(elem)}
        >
          {elem}
        </button>
        )
      })}
    </div>
  )
}
