'use client';

import { useEffect } from 'react';

const Toast = ({ type = 'success', message = '', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // auto-hide in 3s

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed top-4 right-4 z-50 px-4 py-5 rounded-md shadow-lg bg-white text-sm transition-all duration-300
      ${type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
      {message}
    </div>
  );
};

export default Toast;
