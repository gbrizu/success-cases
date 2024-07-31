import React from 'react'
import Chat from '../components/chat/chat'
import BasicTitle from '../components/basicTitle/basicTitle'

export default function chatbotScreen() {
    return (
        <div className='container-chatbot'>
            <div id='TITLE' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <BasicTitle basictitle={"Chatbot IA"} />
                <div style={{ marginTop: '1rem', marginRight: '1rem' }}>
                    <img src='/globant_logo.png' alt='' width='190' height='60' />
                </div>
            </div>
            <hr />
            <Chat />
        </div>
    )
}
