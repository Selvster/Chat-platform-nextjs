'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Room {
  id: string;
  name: string;
  description: string;
  onlineUsers: number;
}


export default function App() {
  const router = useRouter(); 

  const [rooms, setRooms] = useState<Room[]>([
    { id: '1', name: 'General Chat', description: 'Discuss anything and everything!', onlineUsers: 15 },
    { id: '2', name: 'Frontend Devs', description: 'For all things React, Next.js, and CSS.', onlineUsers: 8 },
    { id: '3', name: 'Backend Devs', description: 'Node.js, databases, and API discussions.', onlineUsers: 5 },
    { id: '4', name: 'Gaming Zone', description: 'Talk about your favorite games!', onlineUsers: 22 },
    { id: '5', name: 'Music Lovers', description: 'Share your favorite tunes and artists.', onlineUsers: 10 },
    { id: '6', name: 'Random Thoughts', description: 'A place for spontaneous conversations.', onlineUsers: 3 },
    { id: '7', name: 'Tech News', description: 'Latest updates in the tech world.', onlineUsers: 12 },
    { id: '8', name: 'Movie Buffs', description: 'Discuss movies, reviews, and recommendations.', onlineUsers: 7 },
    { id: '9', name: 'Travel Enthusiasts', description: 'Share your travel stories and tips.', onlineUsers: 4 },
    { id: '10', name: 'Foodies', description: 'Talk about food, recipes, and restaurants.', onlineUsers: 6 },
    { id: '11', name: 'Fitness Fanatics', description: 'Share workout tips and health advice.', onlineUsers: 9 },
    { id: '12', name: 'Book Club', description: 'Discuss your favorite books and authors.', onlineUsers: 2 },
    { id: '13', name: 'Photography', description: 'Share your photos and photography tips.', onlineUsers: 11 },
    { id: '14', name: 'Art and Design', description: 'For artists and designers to share their work.', onlineUsers: 13 },
    { id: '15', name: 'Science and Tech', description: 'Discuss the latest in science and technology.', onlineUsers: 14 },
    { id: '16', name: 'Health and Wellness', description: 'Talk about health, wellness, and self-care.', onlineUsers: 1 },
    { id: '17', name: 'Education and Learning', description: 'Share resources and tips for learning.', onlineUsers: 16 },
    { id: '18', name: 'Environment and Nature', description: 'Discuss environmental issues and nature.', onlineUsers: 2 },
    { id: '19', name: 'History Buffs', description: 'Talk about historical events and figures.', onlineUsers: 3 },
    { id: '20', name: 'Coding Challenges', description: 'Share and solve coding challenges together.', onlineUsers: 18 },
    { id: '21', name: 'AI and Machine Learning', description: 'Discuss AI technologies and applications.', onlineUsers: 19 },
    { id: '22', name: 'Web Development', description: 'For web developers to share tips and resources.', onlineUsers: 20 },
    { id: '23', name: 'Mobile Development', description: 'Discuss mobile app development.', onlineUsers: 21 },
    { id: '24', name: 'DevOps and Cloud', description: 'Talk about DevOps practices and cloud technologies.', onlineUsers: 17 },
    { id: '25', name: 'Cybersecurity', description: 'Discuss cybersecurity threats and solutions.', onlineUsers: 23 },
  ]);

  const handleCreateRoomClick = () => {
    router.push('/rooms/create'); 
  };

  const handleJoinRoom = () => {
    router.push('/rooms/join');
  };

  const handleLogout = () => {
    
    router.push('/auth'); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4 sm:p-6 lg:p-8 font-sans">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-white leading-tight drop-shadow-md mb-4 sm:mb-0">
          My Rooms
        </h1>
        <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={handleCreateRoomClick}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-blue-500 flex items-center w-full sm:w-auto justify-center cursor-pointer"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Create Room
          </button>
          <button
            onClick={handleJoinRoom}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-blue-500 flex items-center w-full sm:w-auto justify-center cursor-pointer"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            Join Room
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-blue-500 flex items-center w-full sm:w-auto justify-center cursor-pointer"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 8a2 2 0 11-4 0 2 2 0 014 0zm-6-8a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            Logout
          </button>
        </div>
      </div>

      {/* Rooms Grid */}
      {rooms.length === 0 ? (
        <div className="text-center text-white text-lg py-10 bg-white bg-opacity-20 rounded-xl p-8 shadow-inner">
          No rooms available. Be the first to create one!
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-xl shadow-lg p-6 border border-blue-200 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
              onClick={() => router.push(`/rooms/${room.id}/chat`)}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">
                  {room.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {room.description}
                </p>
              </div>
              <div className="flex items-center text-gray-500 text-sm mt-auto">
                <svg
                  className="w-4 h-4 mr-1 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{room.onlineUsers} online</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
