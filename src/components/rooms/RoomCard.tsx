'use client';
import React, { useState } from 'react';
import { RoomWithIsOwner } from '@/types';
import { useRouter } from 'next/navigation';
import Edit from '../icons/Edit';
import Delete from '../icons/Delete';
import Leave from '../icons/Leave';
import DeleteRoomModal from './DeleteRoomModal';
import LeaveRoomModal from './LeaveRoomModal';
export default function RoomCard({ room }: { room: RoomWithIsOwner }) {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
    const router = useRouter();
    const isOwner = room.isOwner;

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsDeleteModalOpen(true);
    };
    const handleConfirmDelete = () => {
        console.log(`CONFIRMING DELETION for room: ${room.name} (${room._id})`);
        setIsDeleteModalOpen(false);
    };

    const handleEdit = (e: React.MouseEvent) => {
        e.stopPropagation();
        console.log(`Editing room: ${room.name} (${room._id})`);
    };

    const handleLeave = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsLeaveModalOpen(true);
    };
    const handleConfirmLeave = () => {
        console.log(`CONFIRMING LEAVE for room: ${room.name} (${room._id})`);
        setIsLeaveModalOpen(false);
    }
    return (
        <>
            <div
                className="relative bg-white rounded-xl shadow-lg p-6 border border-blue-200 
                       hover:shadow-xl transition-shadow duration-300 transform 
                       hover:-translate-y-1 cursor-pointer flex flex-col justify-between
                       group"
                onClick={() => router.push(`/rooms/${room._id}/chat`)}
            >
                <div
                    className="absolute top-4 right-4 flex space-x-2 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300
                           pointer-events-none group-hover:pointer-events-auto"
                >
                    {isOwner ? (
                        <>
                            <button
                                onClick={handleEdit}
                                className="cursor-pointer p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
                                aria-label="Edit room"
                            >
                                <Edit />
                            </button>
                            <button
                                onClick={handleDelete}
                                className="cursor-pointer p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-200"
                                aria-label="Delete room"
                            >
                                <Delete />
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={handleLeave}
                                className="cursor-pointer p-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 transition-colors duration-200"
                                aria-label="Leave room"
                            >
                                <Leave />
                            </button>
                        </>
                    )}
                </div>

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
            <DeleteRoomModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleConfirmDelete}
                roomName={room.name}
            />
            <LeaveRoomModal
                isOpen={isLeaveModalOpen}
                onClose={() => setIsLeaveModalOpen(false)}
                onConfirm={handleConfirmLeave}
                roomName={room.name}
            />
        </>
    );
}