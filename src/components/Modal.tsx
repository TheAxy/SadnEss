import { observer } from 'mobx-react'
import React, { useCallback, useEffect, useState } from 'react'
import '../style/Modal.css'

interface IModal {
    children: React.ReactNode,
    onClick?: any,
}

const Modal:React.FC<IModal> = observer(({children, onClick}) => {

    const [active, setActive] = useState('modal')

    const Click = useCallback(() => {
        if (active === 'modal') setActive('modal modal-active')
        else if (active === 'modal modal-active') setActive('modal')
    },[active])
    

  return (
    <div className={active}>
        <div className="modal__container">
            <div className="modal__body">
                <div className="modal__btn">
                    <button data-close="" type="button" className="modal__close burger_active" onClick={Click}></button>
                </div>
                {children}
            </div>

        </div>
    </div>
  )
})

export default Modal