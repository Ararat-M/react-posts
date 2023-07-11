import React from 'react'
import { MySelect } from '../UI/MySelect'

interface IPostFilter {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function PostFilter({value, onChange}: IPostFilter) {
  return (
    <div>
      <MySelect
        value={value}
        onChange={onChange}
        defaultName='Сортировать по'
        options={[
          {value: "title", name: "Сортировать по заголовку"},
          {value: "description", name: "Сортировать по описанию"},
        ]}
      />
    </div>
  )
}
