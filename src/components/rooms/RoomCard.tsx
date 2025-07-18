

'use client';
import React from 'react';
import { Room } from '@/types';
import { useRouter } from 'next/navigation';

export default function RoomCard({ room }: { room: Room }) {
    const router = useRouter();
    return (
        <div
            className="bg-white rounded-xl shadow-lg p-6 border border-blue-200 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            onClick={() => router.push(`/rooms/${room._id}/chat`)}
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
    )
}