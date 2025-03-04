import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const Notification = () => {
    return (
        <>
        <div className='mb-16'>
        <Header/>
        <Sidebar/>
        </div>
            <div className="bg-gray-50 min-h-screen p-2">
            <div className="notification-container max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">Notifications</h2>

                <div className='flex flex-col gap-2'>
                    <div className="notification-list space-y-4 ">
                        <div className="notification-item flex items-center p-4 hover:bg-gray-50 rounded-lg border border-gray-100 transition duration-300">
                            <div className="relative">
                                <img src="https://img.icons8.com/?size=100&id=1cYVFPowIgtd&format=png&color=000000" className="rounded-full w-12 h-12 border-2 border-blue-500" alt="user" />
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
                            </div>
                            <div className="ml-4 flex-grow">
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold text-gray-800">john_doe</span>
                                    <span className="text-gray-400 text-sm">2h ago</span>
                                </div>
                                <p className="text-gray-600">liked your post</p>
                            </div>
                        </div>
                    </div>

                    <div className="notification-item flex items-center p-4 hover:bg-gray-50 rounded-lg border border-gray-100 transition duration-300">
                        <div className="relative">
                            <img src="https://img.icons8.com/?size=100&id=1cYVFPowIgtd&format=png&color=000000" className="rounded-full w-12 h-12 border-2 border-pink-500" alt="user" />
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="ml-4 flex-grow">
                            <div className="flex items-center justify-between">
                                <span className="font-semibold text-gray-800">jane_smith</span>
                                <span className="text-gray-400 text-sm">5h ago</span>
                            </div>
                            <p className="text-gray-600">started following you</p>
                        </div>
                    </div>

                    <div className="notification-item flex items-center p-4 hover:bg-gray-50 rounded-lg border border-gray-100 transition duration-300">
                        <div className="relative">
                            <img src="https://img.icons8.com/?size=100&id=1cYVFPowIgtd&format=png&color=000000" className="rounded-full w-12 h-12 border-2 border-green-500" alt="user" />
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="ml-4 flex-grow">
                            <div className="flex items-center justify-between">
                                <span className="font-semibold text-gray-800">alex_green</span>
                                <span className="text-gray-400 text-sm">1d ago</span>
                            </div>
                            <p className="text-gray-600">commented on your photo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Notification