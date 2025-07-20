"use client";

import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Error from "@/components/common/Error";
import Success from "@/components/common/Success";
import { joinRoom } from "@/app/actions/rooms";
import { useSubmit } from "@/hooks/useSubmit";

export default function App() {
    const [roomCode, setRoomCode] = useState<string>("");
    const [success, setSuccess] = useState<boolean>(false);
    const router = useRouter();

  const { handleSubmit, isLoading , error} = useSubmit(
    async (formData: FormData) => {
      const roomCode = formData.get("roomCode") as string;
      return joinRoom(roomCode);
    },
    () => {
      setSuccess(true);
      setRoomCode("");
    }
  );

    const handleBackToRooms = () => {
        router.push("/rooms");
    };

    return (
        <div className="flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
                <button
                    className="mb-4 text-blue-600 hover:underline flex items-center cursor-pointer"
                    onClick={handleBackToRooms}
                >
                    Back to Rooms
                </button>
                <h2 className="text-3xl font-extrabold text-gray-800 text-center flex-grow mb-6">
                    Join a Room
                </h2>

                {success && (
                    <Success message="Successfully joined the room! You can now see it in your rooms list." />
                )}

                {error && (
                    <Error message={error} />
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <Input
                        id="roomCode"
                        type="text"
                        label="Room Code"
                        name="roomCode"
                        placeholder="Enter room code"
                        value={roomCode}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setRoomCode(e.target.value)}
                        required
                        disabled={isLoading}
                    />
                    <Button
                        buttonText="Join Room"
                        loadingText="Joining..."
                        isLoading={isLoading}
                    />
                </form>
            </div>
        </div>
    );
}
