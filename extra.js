import { io } from 'socket.io-client';
import { useEffect, useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

const socket = io('http://localhost:5000'); 

function App() {

  const [roomId, setRoomId] = useState('');
  const [userId, setUserId] = useState('');
  const [roomUsers, setRoomUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Listen for updated room users and messages
    socket.on('roomUsers', (users) => {
      console.log(users);
      setRoomUsers(users);
    });
    //Broadcast new message to everyone
    socket.on('newMessage', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });
    //Get compleate room data
    socket.on('roomData', (roomData) => {
      // Receive room data when the user joins the room
      console.log(roomData);
      setRoomUsers(roomData.users);
      setMessages(roomData.messages);
    });
    
    socket.on('userDisconnected', (disconnectedUserId) => {
      console.log(`${disconnectedUserId} has disconnected`);
    });

    return () => {
      socket.off('roomUsers');
      socket.off('newMessage');
      socket.off('roomData');
      socket.off('userDisconnected');
    };
  }, []);
    
  //Join room 
  const joinRoom = () => {
    if (roomId && userId) {
      // Emit joinRoom event to the server
      socket.emit('joinRoom', { roomId, userId });
    }
  };
  //To Send Message
  const sendMessage = () => {
    if (message) {
      // Emit sendMessage event to the server
      socket.emit('sendMessage', { roomId, userId, message });
      //To clear input field
      setMessage('');
    }
  };

  return (
    <div>
      <h1>Chat App</h1>

      {/ Room ID Input /}
      <input
        type="text"
        placeholder="Enter Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />

      {/ User ID Input /}
      <input
        type="text"
        placeholder="Enter Your User ID (e.g., User1)"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <button onClick={joinRoom}>Join Room</button>

      {/ Display Room Users /}
      <h2>Users in Room:</h2>
      <ul>
        {roomUsers.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>

      {/ Display Chat Messages /}
      <h2>Chat:</h2>
      <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.userId}:</strong> {msg.message}
            <span style={{ fontSize: '0.8em', color: 'gray' }}> ({msg.timestamp})</span>
          </div>
        ))}
      </div>

      {/ Message Input /}
      <input
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
