import React from 'react'
import './ChatMessage.scss'
import { Avatar } from '@mui/material'

const ChatMessage = () => {
  return (
    <div className='message'>
      <Avatar />
      <div className='messageInfo'>
        <h4>Shin Code</h4>
        <span className='messageTimestamp'></span>

        <p>メッセージ本文</p>
      </div>
    </div>
  )
}

export default ChatMessage