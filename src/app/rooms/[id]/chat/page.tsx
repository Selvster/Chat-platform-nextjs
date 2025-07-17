'use client';

import React, { useState, FormEvent, ChangeEvent, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface Message {
  id: string;
  sender: string;
  text: string;
  timestamp: string;
}

interface OnlineUser {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'away';
}

export default function App() {
  const router = useRouter();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [roomName, setRoomName] = useState<string>('General Chat');
  const [onlineUsers, setOnlineUsers] = useState<OnlineUser[]>([
    { id: 'user1', name: 'Alice', status: 'online' },
    { id: 'user2', name: 'Bob', status: 'online' },
    { id: 'user3', name: 'Charlie', status: 'away' },
    { id: 'user4', name: 'David', status: 'online' },
    { id: 'user5', name: 'Eve', status: 'offline' },
  ]);

  const [messages, setMessages] = useState<Message[]>([
    { id: 'm1', sender: 'Alice', text: 'Hi everyone!', timestamp: '10:00 AM' },
    { id: 'm2', sender: 'Bob', text: 'Hello Alice!', timestamp: '10:01 AM' },
    { id: 'm3', sender: 'You', text: 'Welcome to the chat!', timestamp: '10:02 AM' },
    { id: 'm4', sender: 'Charlie', text: 'Good morning!', timestamp: '10:03 AM' },
    { id: 'm5', sender: 'Alice', text: 'How is everyone doing today?', timestamp: '10:05 AM' },
    { id: 'm6', sender: 'Bob', text: 'Doing great, thanks!', timestamp: '10:06 AM' },
    { id: 'm7', sender: 'You', text: 'I am doing well too!', timestamp: '10:07 AM' },
    { id: 'm8', sender: 'Alice', text: 'This is a longer message to test scrolling. We need to make sure that the chat area scrolls correctly when there are many messages, and that the input field and header remain fixed.', timestamp: '10:08 AM' },
    { id: 'm9', sender: 'Bob', text: 'Indeed, testing is crucial!', timestamp: '10:09 AM' },
    { id: 'm10', sender: 'You', text: 'Looks like it\'s working as expected!', timestamp: '10:10 AM' },
    { id: 'm11', sender: 'Charlie', text: 'Great job!', timestamp: '10:11 AM' },
    { id: 'm12', sender: 'Alice', text: 'Another message to fill up space.', timestamp: '10:12 AM' },
    { id: 'm13', sender: 'You', text: 'And another one from me!', timestamp: '10:13 AM' },
    { id: 'm14', sender: 'Bob', text: 'Keep them coming!', timestamp: '10:14 AM' },
    { id: 'm15', sender: 'You', text: 'Final message for scroll test.', timestamp: '10:15 AM' },
  ]);

  const [newMessage, setNewMessage] = useState<string>('');

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const newMsg: Message = {
      id: String(messages.length + 1),
      sender: 'You',
      text: newMessage.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prevMessages) => [...prevMessages, newMsg]);
    setNewMessage('');
  };

  const handleBackToRooms = () => {
    router.push('/rooms');
  };

  return (
    <div className="h-screen flex flex-col font-sans bg-gradient-to-br from-indigo-50 to-blue-100">
      <div className="flex-shrink-0 bg-blue-600 shadow-md p-4 flex items-center justify-between z-10">
        <div className="flex items-center">
          <button
            onClick={handleBackToRooms}
            className="text-blue-200 hover:text-white font-semibold flex items-center transition duration-200 mr-4 cursor-pointer"
          >
            Back
          </button>
          <h1 className="text-2xl font-bold text-white">{roomName}</h1>
        </div>
        <div className="text-blue-200 text-sm">
          {onlineUsers.filter(u => u.status === 'online').length} online
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 flex flex-col bg-white p-4">
          <div className="flex-1 overflow-y-auto space-y-4 pr-2 pb-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-3 rounded-lg shadow-sm 
                    ${msg.sender === 'You'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-blue-50 text-gray-800 rounded-bl-none'
                    }`}
                >
                  {msg.sender !== 'You' && (
                    <div className="font-semibold text-sm mb-1">
                      {msg.sender}
                    </div>
                  )}
                  <p className="text-sm break-words">{msg.text}</p>
                  <div className={`text-xs mt-1 ${msg.sender === 'You' ? 'text-blue-200' : 'text-gray-500'} text-right`}>
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="flex-shrink-0 mt-4 flex items-center p-2 bg-white rounded-lg shadow-md border border-gray-200">
            <input
              type="text"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setNewMessage(e.target.value)}
              required
            />
            <button
              type="submit"
              className="ml-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </form>
        </div>

        <div className="w-64 bg-indigo-50 p-4 border-l border-gray-300 hidden md:block overflow-y-auto flex-shrink-0">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Online Users</h3>
          <ul className="space-y-2">
            {onlineUsers.map((user) => (
              <li key={user.id} className="flex items-center">
                <span
                  className={`w-3 h-3 rounded-full mr-2 ${
                    user.status === 'online' ? 'bg-green-500' : user.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                  }`}
                ></span>
                <span className="text-gray-700">{user.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
