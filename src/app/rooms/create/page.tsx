'use client';

import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function App() {
  const router = useRouter();
  const [roomName, setRoomName] = useState<string>('');
  const [roomDescription, setRoomDescription] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setMessage('');

    if (roomName.trim() === '' || roomDescription.trim() === '') {
      setMessage('Please fill in both room name and description.');
      return;
    }

    console.log('Creating room:', { name: roomName, description: roomDescription });
    setMessage('Room created successfully! (Simulated)');

    setRoomName('');
    setRoomDescription('');

    // Example: router.push('/rooms');
  };

  const handleBackToRooms = () => {
   router.push('/rooms');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4 font-sans">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        <button
          className="mb-4 text-blue-600 hover:underline flex items-center cursor-pointer"
          onClick={() => handleBackToRooms()}
        >
          Back to Rooms
        </button>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Create New Room</h2>


        {message && (
          <div className={`px-4 py-3 rounded-lg relative mb-4 
            ${message.includes('successfully') ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700'}`} role="alert">
            <span className="block sm:inline">{message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="roomName" className="block text-gray-700 text-sm font-medium mb-2">
              Room Name
            </label>
            <input
              type="text"
              id="roomName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-gray-800"
              placeholder="e.g., General Chat, Gaming Lounge"
              value={roomName}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setRoomName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="roomDescription" className="block text-gray-700 text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              id="roomDescription"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-gray-800 h-24 resize-none"
              placeholder="A brief description of the room's purpose."
              value={roomDescription}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setRoomDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105 cursor-pointer"
          >
            Create Room
          </button>
        </form>
      </div>
    </div>
  );
}
