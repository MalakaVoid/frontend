import React from 'react'

export default function Message({ text, title, onClick }) {
    return (
        <div className='message' onClick={onClick}>
            <div className="message__title">{title}</div>
            <div className="message__text">
                {text}
            </div>
        </div>
    )
}
