import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import "./chat.css";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { sendRequestChat } from '../../services/chatbotServerCalls';
import ReactMarkdown from 'react-markdown';
import { GradientCircularProgress } from './gradientCircularProgress';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  window.onload = scrollToBottom;

  const handleSend = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
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
        console.log({res})

        const {
          model_response,
          is_search,
          relational_success_cases
        } = res

        if (model_response) {
          const botResponse = { text: model_response, sender: 'model' };
          if (is_search && relational_success_cases) {
            const successCases = relational_success_cases.map((successCase) => {
              const { title, link } = successCase;
              return {
                title,
                link,
              }
            });
            botResponse.text += '\n\n### Casos de éxito relacionados\n\n';
            successCases.forEach((successCase) => {
              botResponse.text += `* ${successCase.title} - *[Link](${successCase.link})* \n\n`;
            });
          }
          setMessages((prevMessages) => [...prevMessages, botResponse]);

          setIsLoading(false);
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
            disabled={isLoading}
            sx={{ ml: 1, flex: 1, height: 48 }}
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
          {
            isLoading ? (
              <GradientCircularProgress />
            ) : (
              <IconButton
                type="button"
                sx={{ p: '10px' }}
                aria-label="search"
                onClick={handleSend}
              >
                <SearchIcon />
              </IconButton>
            )
          }
        </Paper>
      </div>
    </Box >
  );
}


export default Chat; 
