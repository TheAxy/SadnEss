import { observer } from 'mobx-react'
import React, { FC } from 'react'

interface IInput {
    className: string,
    type?: string,
    value: string,
    onChange: any,
    placeholder?: string,
    accept?: string
}

const Input: FC<IInput> = observer(({className, type='text', value, onChange, placeholder, accept}) => {
  return (
    <input className={className} type={type} accept={accept} placeholder={placeholder} value={value} onChange={onChange} />
  )
})


const TextArea: FC<IInput> = observer(({className, value, onChange, placeholder}) => {
  return (
    <textarea className={className} placeholder={placeholder} value={value} onChange={onChange}/>
  )
})
export {Input, TextArea}