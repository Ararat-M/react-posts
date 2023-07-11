import React from 'react'
import { MySelect } from '../UI/MySelect'
import { MyInput } from '../UI/MyInput'

interface IPostFilter {
  filter: {query: string, sort: string}
  setFilter: React.Dispatch<React.SetStateAction<{
    query: string;
    sort: string;
  }>>
}

export function PostFilter({filter, setFilter}: IPostFilter) {
  return (
    <div>
      <MyInput 
        value={filter.query}
        onChange={e => setFilter({query: e.target.value, sort: filter.sort})}
        placeholder="поиск..." 
      />
      <MySelect
        value={filter.sort}
        onChange={e => setFilter({query: filter.query, sort: e.target.value})}
        defaultName='Сортировать по'
        options={[
          {value: "title", name: "Сортировать по заголовку"},
          {value: "description", name: "Сортировать по описанию"},
        ]}
      />
    </div>
  )
}
