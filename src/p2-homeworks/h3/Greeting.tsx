import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputError = s.error // need to fix with (?:)

    return (
        <div className={s.HW3}>
            <div className={s.inputWrapper}>
                <input value={name} onChange={setNameCallback}
                       className={`${s.input} ${error ? inputError : ''}`}/>
                <button className={s.addButton} onClick={addUser}>ADD</button>
                <span className={s.totalUsers}>{totalUsers}</span>
            </div>
            <span className={s.errorMessage}>{error ? error : ''}</span>
        </div>
    )
}

export default Greeting
