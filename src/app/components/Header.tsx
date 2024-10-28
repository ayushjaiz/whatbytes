import { FaRegUser } from "react-icons/fa";

export const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 border-b ">
            <h1 className="text-2xl font-bold">WhatBytes</h1>
            <div className="flex items-center space-x-4 p-2 rounded-lg shadow">
                <FaRegUser />
                <span className="text-gray-600">Ayush Jaiswal</span>
            </div>
        </header>
    )
}
