import React, { useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import DashboardScreen from './screens/DashboardScreen';
import SubmitBillScreen from './screens/SubmitBillScreen';
import ApproveScreen from './screens/ApproveScreen';
import ProfileScreen from './screens/ProfileScreen';
import BillDetailScreen from './screens/BillDetailScreen';
import HistoryScreen from './screens/HistoryScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedBill, setSelectedBill] = useState(null);

  const handleNavigate = (screen, data = null) => {
    setCurrentScreen(screen);
    if (data) {
      setSelectedBill(data);
    }
    if (screen === 'dashboard') {
      setActiveTab('dashboard');
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    switch(tab) {
      case 'dashboard':
        setCurrentScreen('dashboard');
        break;
      case 'approve':
        setCurrentScreen('approve');
        break;
      case 'history':
        setCurrentScreen('history');
        break;
      case 'profile':
        setCurrentScreen('profile');
        break;
      default:
        setCurrentScreen('dashboard');
    }
  };

  const renderScreen = () => {
    switch(currentScreen) {
      case 'login':
        return <LoginScreen onNavigate={handleNavigate} />;
      case 'register':
        return <RegisterScreen onNavigate={handleNavigate} />;
      case 'forgot-password':
        return <ForgotPasswordScreen onNavigate={handleNavigate} />;
      case 'dashboard':
        return <DashboardScreen activeTab={activeTab} onTabChange={handleTabChange} onNavigate={handleNavigate} />;
      case 'submit-bill':
        return <SubmitBillScreen onNavigate={handleNavigate} />;
      case 'approve':
        return <ApproveScreen activeTab={activeTab} onTabChange={handleTabChange} onNavigate={handleNavigate} />;
      case 'profile':
        return <ProfileScreen activeTab={activeTab} onTabChange={handleTabChange} onNavigate={handleNavigate} />;
      case 'bill-detail':
        return <BillDetailScreen bill={selectedBill} onNavigate={handleNavigate} />;
      case 'history':
        return <HistoryScreen activeTab={activeTab} onTabChange={handleTabChange} onNavigate={handleNavigate} />;
      default:
        return <LoginScreen onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-w-mobile max-w-mobile mx-auto bg-white min-h-screen">
      {renderScreen()}
    </div>
  );
}

export default App;
