import nanoid from 'nanoid';
import React from 'react'

interface IMySelect {
  options: Array<{value: string, name: string}>;
  defaultName: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function MySelect({options, defaultName, value, onChange }: IMySelect) {
  return (
    <div>
      <select 
        value={value}
        onChange={e => onChange(e)}
      >
        <option disabled value="">{defaultName}</option>
        {options.map((item) => 
          <option value={item.value} key={nanoid()}>
            {item.name}
          </option>
        )}
      </select>
    </div>
  )
}
