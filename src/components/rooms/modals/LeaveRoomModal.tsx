import React from 'react';
import { leaveRoom } from '@/app/actions';
import { showToastAlert } from '@/libs/utils';
interface LeaveRoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomName: string;
  roomId: string;
}

export default function LeaveRoomModal({
  isOpen,
  onClose,
  roomName,
  roomId
}: LeaveRoomModalProps) {
  if (!isOpen) {
    return null;
  }

  const onConfirm = async () => {
    const success = await leaveRoom(roomId);
    if (success) {
      showToastAlert('success', 'Success!', 'You have left the room.');
      onClose();
    } else {
      showToastAlert('error', 'Error!', 'Failed to leave the room. Please try again later.');
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl p-6 md:p-8 w-full max-w-md mx-auto
                   transform transition-all duration-300 ease-out scale-95 opacity-0
                   data-[state=open]:scale-100 data-[state=open]:opacity-100"
        onClick={(e) => e.stopPropagation()}
        data-state={isOpen ? 'open' : 'closed'}
      >
        <h2 className="text-2xl font-bold text-yellow-600 mb-4 border-b pb-2">
          Confirm Leaving Room
        </h2>

        <p className="text-gray-700 mb-4">
          Are you sure you want to leave the room{' '}
          <span className="font-semibold text-gray-900">"{roomName}"</span>?
        </p>

        <p className="text-gray-600 text-sm mb-6 font-medium">
          <span className="font-bold">Note:</span> Your messages will remain in the room, but you will no longer be a member and won't receive new messages. You can rejoin later.
        </p>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg text-gray-700 border border-gray-300
                       hover:bg-gray-100 transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-75 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-5 py-2 rounded-lg bg-yellow-600 text-white font-semibold
                       hover:bg-yellow-700 transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75 cursor-pointer"
          >
            Leave Room
          </button>
        </div>
      </div>
    </div>
  );
}