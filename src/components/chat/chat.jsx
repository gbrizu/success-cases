import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import "./chat.css";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  window.onload = scrollToBottom;

  const handleSend = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      setMessages([...messages, userMessage]);


      const botResponse = { text: input, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botResponse]);

      setInput('');
    }
    await sleep(100);
    scrollToBottom();
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
              primary={message.text}
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
            onenter
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    </Box>
  );
}

export default Chat; 
