'use client';

import React from 'react';

interface DeleteRoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  roomName: string;
}

export default function DeleteRoomModal({
  isOpen,
  onClose,
  onConfirm,
  roomName,
}: DeleteRoomModalProps) {
  if (!isOpen) {
    return null; 
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
        <h2 className="text-2xl font-bold text-red-600 mb-4 border-b pb-2">
          Confirm Deletion
        </h2>

        <p className="text-gray-700 mb-4">
          Are you sure you want to delete the room{' '}
          <span className="font-semibold text-gray-900">"{roomName}"</span>?
        </p>

        <p className="text-red-500 text-sm mb-6 font-medium">
          <span className="font-bold">Warning:</span> This action is irreversible. All associated members and messages will be permanently deleted.
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
            className="px-5 py-2 rounded-lg bg-red-600 text-white font-semibold
                       hover:bg-red-700 transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}