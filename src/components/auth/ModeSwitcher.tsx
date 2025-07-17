interface ModeSwitcherProps {
  isLogin: boolean; 
  isLoading: boolean; 
  onSwitchMode: (isLoginMode: boolean) => void; 
}


export default function ModeSwitcher({
  isLogin,
  isLoading,
  onSwitchMode,
}: ModeSwitcherProps){

  const handleLoginClick = () => {
    if (!isLoading) {
      onSwitchMode(true); 
    }
  };

  const handleRegisterClick = () => {
    if (!isLoading) {
      onSwitchMode(false); 
    }
  };

  return (
    <div className="flex justify-center mb-6">
      <button
        onClick={handleLoginClick}
        disabled={isLoading} 
        className={`px-6 py-2 rounded-l-full text-lg font-semibold transition-all duration-300 cursor-pointer
          ${isLogin ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-blue-100'}
          ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        Login
      </button>
      <button
        onClick={handleRegisterClick}
        disabled={isLoading} 
        className={`px-6 py-2 rounded-r-full text-lg font-semibold transition-all duration-300 cursor-pointer
          ${!isLogin ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-blue-100'}
          ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        Register
      </button>
    </div>
  );
}
