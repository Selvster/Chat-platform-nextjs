'use client';

import React, { useState, useCallback } from 'react';

import { authenticateUser, signupUser } from '../actions';
import SubmitButton from '@/components/common/Button';
import Input from '@/components/common/Input';
import Error from '@/components/common/Error';
import ModeSwitcher from '@/components/auth/ModeSwitcher';
import { useSubmit } from '@/hooks/useSubmit';
export default function App() {
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [username, setUsername] = useState<string>('');


    const resetState = () => {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setUsername('');
    }
    const { handleSubmit, isLoading, error } = useSubmit(
        isLogin ? authenticateUser : signupUser
    );

    const handleModeSwitch = useCallback((newIsLoginMode: boolean) => {
        setIsLogin(newIsLoginMode);
        resetState();
    }, [resetState]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4 font-sans">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
                    {isLogin ? 'Welcome Back!' : 'Join Us!'}
                </h2>

                <ModeSwitcher
                    isLogin={isLogin}
                    isLoading={isLoading}
                    onSwitchMode={handleModeSwitch} />

                {error && (
                    <Error message={error} />
                )}


                <form onSubmit={handleSubmit} className="space-y-5">

                    {!isLogin && (
                        <Input
                            label='Username'
                            id='username'
                            name='username'
                            type='text'
                            placeholder='Enter your username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required={!isLogin}
                            disabled={isLoading}
                        />
                    )}

                    <Input
                        label="Email Address"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isLoading}
                    />

                    <Input
                        label="Password"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={isLoading}
                    />

                    {!isLogin && (
                        <Input
                            label="Confirm Password"
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="••••••••"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required={!isLogin}
                            disabled={isLoading}
                        />
                    )}

                    <SubmitButton
                        isLoading={isLoading}
                        buttonText={isLogin ? 'Login' : 'Register'}
                        loadingText={isLogin ? 'Logging In...' : 'Registering...'}
                    />
                </form>

                <p className="text-center text-gray-600 text-sm mt-6">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button
                        onClick={() => {
                            setIsLogin(!isLogin);
                        }}
                        className="text-blue-600 hover:text-blue-800 font-semibold focus:outline-none cursor-pointer"
                    >
                        {isLogin ? 'Register here' : 'Login here'}
                    </button>
                </p>
            </div>
        </div>
    );
}
