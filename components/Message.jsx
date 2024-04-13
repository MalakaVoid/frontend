import React from 'react'
import styles from '@/styles/Message.module.scss'

export default function Message({ text, title, onClick }) {
    return (
        <div className={styles.message} onClick={onClick}>
            <div className={styles.message__title}>{title}</div>
            <div className={styles.message__text}>
                {text}
            </div>
        </div>
    )
}
