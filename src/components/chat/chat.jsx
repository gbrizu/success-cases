import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import "./chat.css";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { sendRequestChat } from '../../services/chatbotServerCalls';
import ReactMarkdown from 'react-markdown';
// {
//     "text": "CONTENIDO DEL MENSAJE" -> REQUERIDO,
//     "history": [
//         {
//             "role": "model",
//             "parts": [
//                 "Please provide me with more context! What do you want me to do with \"a\"?  \n\nFor example, you could ask:\n\n* \"What is 'a'?\"\n* \"What does 'a' stand for?\" \n* \"Can you tell me a story about 'a'?\"\n\nLet me know what you have in mind! \n",
//             ],
//         },
//         {
//             "role": "user",
//             "parts": [
//                 ".......",
//             ],
//         },
//     ]
// }

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  window.onload = scrollToBottom;

  const handleSend = async (e) => {
    e.preventDefault();

    if (input.trim()) {
      try {
        const userMessage = { text: input, sender: 'user' };
        setMessages([...messages, userMessage]);
        setInput('');
        const res = await sendRequestChat({
          text: input,
          history: messages.map((message) => ({
            role: message.sender,
            parts: [message.text]
          }))
        })

        const {
          response
        } = res

        if (response) {
          const botResponse = { text: response, sender: 'model' };
          setMessages((prevMessages) => [...prevMessages, botResponse]);

          await sleep(100);
          scrollToBottom();
        }
      } catch (error) {
        alert('Error al enviar el mensaje');
        console.log(error);
      }
    }
  };

  function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  return (
    <Box>
      <List className="message-list">
        {messages.map((message, index) => (
          <ListItem key={index} className={`message-item ${message.sender}`}>
            <ListItemText
              primary={<ReactMarkdown>{message.text}</ReactMarkdown>}
              secondary={message.sender === 'user' ? 'Tú' : 'Chatbot'}
            />
          </ListItem>
        ))}
      </List>

      <div className='container-input'>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Escribe un mensaje"
            inputProps={{ 'aria-label': 'search google maps' }}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSend(e);
              }
            }}
          />
          <IconButton
            type="button"
            sx={{ p: '10px' }}
            aria-label="search"
            onClick={handleSend}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    </Box >
  );
}

export default Chat; 
