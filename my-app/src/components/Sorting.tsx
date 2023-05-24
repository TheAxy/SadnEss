import { observer } from 'mobx-react'
import React, { FC, useCallback, useEffect, useState } from 'react'
import MyButton from '../UI/MyButton'
import '.././style/Sorting.css'

interface ISearch {
  className: string,
  state?(val: any): any,
  callback?(): any,
}

const Search: FC<ISearch> = observer(({className, state, callback}) => {

  const [value, setValue] = useState<string>('')
  const [bool, setBool] = useState<boolean>(false)

  const Change = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (state) state(e.target.value)
  }, [])

  const Click = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setBool(prev => !prev)
  }, [])

  useEffect(() => {
    if (callback) callback()
  }, [bool])

  return (
    <form className={`${className} sort-form`}>
      <input className={`${className}  sort-form__input`} type="text" value={value} onChange={Change} placeholder="Поиск" />
      <MyButton className={`${className}-btn sort-form__button`} type='submit' onClick={Click}>Поиск</MyButton>
    </form>
  )
})


interface ISort {
  defaultValue  : string,
  className: string,
  state?(val: any): any,
  callback?(val?: any): any,
  arrOptions: Array<any>,
  disabled?: boolean,
}

const Sort: FC<ISort> = ({defaultValue, className, state, callback, arrOptions, disabled = true}) => {

  const [selected, setSelected] = useState<string>(defaultValue)

  const Change = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value)
    if (state) state(e.target.value)
    if (callback) {
      if (e.target.value === defaultValue) callback('')
      else callback(e.target.value)
      
    }
  }, [])

  return (
    <select className={`${className} _select`} value={selected} id="" onChange={Change}>
      <option disabled={disabled} value={defaultValue}>{defaultValue}</option>
      {
        arrOptions.map(item => {
          return <option value={item} key={item}>{item}</option>
        })
      }
    </select>
  )
}

export {Search, Sort};
