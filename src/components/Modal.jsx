// src/components/Modal.jsx
import React from 'react';
import { IoMdClose } from 'react-icons/io';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 relative p-6">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
          onClick={onClose}
        >
          <IoMdClose size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
