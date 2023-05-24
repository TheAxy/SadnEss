import React, { FC, memo } from 'react'
import '.././style/EmptyETC.css'

interface IEmpty {
    className: string,
    children?: React.ReactNode,
}

const EmptyETC: FC<IEmpty> = memo(({className, children}) => {
  return (
    <main className={`${className} _empty` }>{children}</main>
  )
})

export default EmptyETC