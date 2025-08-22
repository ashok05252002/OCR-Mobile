import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, CheckCircle, User, History } from 'lucide-react';

const TabBar = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart },
    { id: 'approve', label: 'Approve', icon: CheckCircle },
    { id: 'history', label: 'History', icon: History },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 max-w-mobile mx-auto">
      <div className="flex justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <motion.button
              key={tab.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors w-20 ${
                isActive ? 'text-primary' : 'text-gray-500'
              }`}
            >
              <Icon size={20} />
              <span className="text-xs mt-1">{tab.label}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default TabBar;
