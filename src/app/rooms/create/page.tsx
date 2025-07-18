'use client';

import React, { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import TextArea from '@/components/common/TextArea';
import { createRoom } from '@/app/actions/rooms';
import { useSubmit } from '@/hooks/useSubmit';
import Error from '@/components/common/Error';
import Success from '@/components/common/Success';

export default function App() {
  const router = useRouter();
  const [roomName, setRoomName] = useState<string>('');
  const [roomDescription, setRoomDescription] = useState<string>('');
  const [success,setSuccess] = useState<boolean>(false);

  const { handleSubmit, isLoading , error} = useSubmit(createRoom, ()=> {
    setSuccess(true);
    setRoomName('');
    setRoomDescription('');
  });

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


        {success && (
          <Success message="Room created successfully! You can now see it in your rooms list." />
        )}

        {error && (
          <Error message={error} />
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            id="roomName"
            type="text"
            label="Room Name"
            name="name"
            placeholder="Enter room name"
            value={roomName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setRoomName(e.target.value)}
            required
            disabled={isLoading}
          />
          <TextArea
            id="roomDescription"
            label="Room Description"
            name="description"
            placeholder="A brief description of the room's purpose."
            value={roomDescription}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setRoomDescription(e.target.value)}
            required
            disabled={isLoading}
          />
          <Button
            buttonText='Create Room'
            loadingText='Creating...'
            isLoading={isLoading}
          />
        </form>
      </div>
    </div>
  );
}
