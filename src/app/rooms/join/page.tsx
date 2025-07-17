'use client';

import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function App() {
    const [roomCode, setRoomCode] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const router = useRouter();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setMessage('');

        if (roomCode.trim() === '') {
            setMessage('Please enter a room code.');
            return;
        }

        console.log('Attempting to join room with code:', roomCode);


        if (roomCode === '12345') {
            setMessage('Successfully joined room! (Simulated)');
            // router.push(`/chat/${roomCode}`); 
            setRoomCode('');
        } else {
            setMessage('Invalid room code. Please try again.');
        }
    };

    const handleBackToRooms = () => {
        router.push('/rooms');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4 font-sans">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
                <button
                    className="mb-4 text-blue-600 hover:underline flex items-center cursor-pointer"
                    onClick={handleBackToRooms}
                >
                    Back to Rooms
                </button>
                <h2 className="text-3xl font-extrabold text-gray-800 text-center flex-grow">Join a Room</h2>


                {message && (
                    <div className={`px-4 py-3 rounded-lg relative mb-4 
            ${message.includes('successfully') ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700'}`} role="alert">
                        <span className="block sm:inline">{message}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="roomCode" className="block text-gray-700 text-sm font-medium mb-2">
                            Room Code
                        </label>
                        <input
                            type="text"
                            id="roomCode"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-gray-800"
                            placeholder="Enter room code (e.g., 12345)"
                            value={roomCode}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setRoomCode(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105 cursor-pointer"
                    >
                        Join Room
                    </button>
                </form>
            </div>
        </div>
    );
}
