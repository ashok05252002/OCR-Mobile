import React from 'react';
import { Bell } from 'lucide-react';

const TopBar = ({ title = 'Dashboard', showNotifications = true }) => {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <img 
          src="https://www.iproat.com/wp-content/uploads/2025/01/cropped-iProAT-Solutions-Black-180x60.png" 
          alt="iProAT Solutions" 
          className="h-8 w-auto"
        />
      </div>
      <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
      {showNotifications && (
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
        </button>
      )}
    </div>
  );
};

export default TopBar;
