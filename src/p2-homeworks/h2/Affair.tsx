import React from 'react'
import {AffairType} from './HW2';
import style from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={style.affair}>
            {props.affair.name}
            <div>
                <button className={style.button} onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
