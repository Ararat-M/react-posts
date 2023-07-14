import React, { useState } from 'react'
import { MySelect } from '../UI/MySelect'

interface IPostLimit {
  limit: number;
  setLimit: (value: React.SetStateAction<number>) => void;
  maxLimit: number;
}

export function PostLimit({limit, setLimit, maxLimit}: IPostLimit) {
  return (
    <>
      <MySelect
        value={String(limit)}
        onChange={e => setLimit(Number(e.target.value))}
        defaultName='Кол-во постов на странице'
        options={[
          {value: "10", name: "10 постов на странице"},
          {value: "25", name: "25 постов на странице"},
          {value: "50", name: "50 постов на странице"},
          {value: `${maxLimit}`, name: "Показать все"},
        ]}
      />
    </>
  )
}
