import React from 'react'
import ReactEmoji from 'react-emoji'
import './Message.css'

export const Message = ({message:{user,text},name}) => {
    let isSendByCurrentuser = false

    const trimmedName = name.trim().toLowerCase()

    if(user === trimmedName){
        isSendByCurrentuser = true
    }


    return (
        isSendByCurrentuser
            ? (
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">{trimmedName}</p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                    </div>
                </div>
            )
            : (
                <div className="messageContainer justifyStart">
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                    </div>
                    <p className="sentText pl-10">{user}</p>
                </div>
            )
    )
}