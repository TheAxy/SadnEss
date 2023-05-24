import React, { FC, memo } from 'react'

interface IMyButton {
  className: string,
  type: "button" | "submit" | "reset",
  children: React.ReactNode,
  disabled?: boolean,
  onClick?: any,
}

const MyButton: FC<IMyButton> = memo(({type, className, children, disabled, onClick}) => {
  return (
    <button disabled={disabled} type={type} className={`${className} btn`} onClick={onClick}>{children}</button>
  )
})

export default MyButton