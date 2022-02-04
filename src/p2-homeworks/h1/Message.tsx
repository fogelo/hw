import React from 'react'
import style from './Message.module.css'

type MessagesPropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagesPropsType) {
    return (
        <div className={style.wrapper}>

            <div>
                <img className={style.ava} src={props.avatar} alt="ava"/>
            </div>
            <div className={style.message}>
                <div>
                    <div className={style.name}>{props.name}</div>
                    <div>{props.message}</div>
                </div>
                <div>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
