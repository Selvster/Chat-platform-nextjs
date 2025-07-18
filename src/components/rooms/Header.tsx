
'use client';
import Link from 'next/link';
import { logoutUser } from '../../app/actions';
import Create from '../icons/Create';
import Join from '../icons/Join';
import LogoutIcon from '../icons/Logout';

export default function Header() {

    const handleLogout = async () => {
        await logoutUser();
    };

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h1 className="text-4xl font-extrabold text-white leading-tight drop-shadow-md mb-4 sm:mb-0">
                My Rooms
            </h1>
            <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-4 w-full sm:w-auto">
                <Link href='/rooms/create'
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-blue-500 flex items-center w-full sm:w-auto justify-center cursor-pointer"
                >
                    <Create />
                    Create Room
                </Link>
                <Link
                    href="/rooms/join"
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-blue-500 flex items-center w-full sm:w-auto justify-center cursor-pointer"
                >
                    <Join />
                    Join Room
                </Link>
                <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-blue-500 flex items-center w-full sm:w-auto justify-center cursor-pointer"
                >
                    <LogoutIcon />
                    Logout
                </button>
            </div>
        </div>

    )
}