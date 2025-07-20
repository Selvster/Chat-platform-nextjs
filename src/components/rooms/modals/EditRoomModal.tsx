import React, { useState, useEffect } from 'react';
import Input from '../../common/Input';
import TextArea from '../../common/TextArea';
import { showToastAlert } from '@/libs/utils';
import { editRoom } from '@/app/actions';

interface EditRoomModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialName: string;
    initialDescription: string;
    roomId: string;
}

export default function EditRoomModal({
    isOpen,
    onClose,
    initialName,
    initialDescription,
    roomId,
}: EditRoomModalProps) {
    const [name, setName] = useState(initialName);
    const [description, setDescription] = useState(initialDescription);


    useEffect(() => {
        setName(initialName);
        setDescription(initialDescription);
    }, [initialName, initialDescription]);

    if (!isOpen) {
        return null;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !description.trim()) {
            showToastAlert('error', 'Error!', 'Name and description cannot be empty.');
            return;
        }

        const res = await editRoom(roomId, name, description);
        if (res.status === 'success') {
            showToastAlert('success', 'Success!', 'Room details updated successfully.');
            onClose();
        }else{
            showToastAlert('error', 'Error!', res.message || 'Failed to update room details.');
            return;
        }
    };

    return (
        // Overlay
        <div
            className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg shadow-2xl p-6 md:p-8 w-full max-w-md mx-auto
                   transform transition-all duration-300 ease-out scale-95 opacity-0
                   data-[state=open]:scale-100 data-[state=open]:opacity-100"
                onClick={(e) => e.stopPropagation()}
                data-state={isOpen ? 'open' : 'closed'}
            >
                <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b pb-2">
                    Edit Room Details
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <Input
                            id="roomName"
                            label="Room Name:"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Enter room name...'
                            name="roomName"
                            required
                        />
                    </div>


                    <TextArea
                        id="roomDescription"
                        label="Description:"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Enter room description...'
                        name="roomDescription"
                        required
                    />

                    <div className="flex justify-end space-x-3 mt-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2 rounded-lg text-gray-700 border border-gray-300
                         hover:bg-gray-100 transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-75 cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold
                         hover:bg-blue-700 transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 cursor-pointer"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}