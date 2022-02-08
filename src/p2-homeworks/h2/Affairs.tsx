import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import style from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div className={style.affairs}>
            {mappedAffairs}
            <button className={`${style.button} ${style.button_1}`} onClick={setAll}>All</button>
            <button className={`${style.button} ${style.button_2}`} onClick={setHigh}>High</button>
            <button className={`${style.button} ${style.button_3}`} onClick={setMiddle}>Middle</button>
            <button className={`${style.button} ${style.button_4}`} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
