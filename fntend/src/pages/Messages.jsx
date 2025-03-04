import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Messages = () => {
    return (
        <>
            <div className='mb-18'>
                <Header />
            </div>
            {/* <div className='z-100'>
                <Sidebar />
            </div> */}
            <div className="bg-gray-50">
                <div className="flex flex-col md:flex-row h-screen">
                    {/* Left sidebar - Conversations list */}
                    <div className="w-full md:w-[350px] bg-white border-r border-gray-200 h-[300px] md:h-auto">
                        <div className="p-4 border-b border-gray-200">
                            <h2 className="text-xl font-semibold">Messages</h2>
                        </div>
                        <div className="overflow-y-auto h-full">
                            {/* Search bar */}
                            <div className="p-3">
                                <input
                                    type="text"
                                    placeholder="Search messages"
                                    className="w-full bg-gray-100 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            {/* Conversation items */}
                            <div className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-l-4 border-transparent hover:border-blue-500">
                                <img src="https://img.icons8.com/?size=100&id=1cYVFPowIgtd&format=png&color=000000" className="rounded-full w-12 h-12 border border-gray-200" alt="Profile" />
                                <div className="ml-3 flex-1">
                                    <div className="flex justify-between items-center">
                                        <p className="font-semibold">John Doe</p>
                                        <span className="text-xs text-gray-400">2m</span>
                                    </div>
                                    <p className="text-gray-500 text-sm truncate">Last message...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Chat area */}
                    <div className="hidden md:flex flex-1 flex-col bg-white">
                        <div className="p-4 border-b border-gray-200">
                            <div className="flex items-center">
                                <img src="https://img.icons8.com/?size=100&id=1cYVFPowIgtd&format=png&color=000000" className="rounded-full w-10 h-10 border border-gray-200" alt="Profile" />
                                <div className="ml-3">
                                    <span className="font-semibold">John Doe</span>
                                    <p className="text-xs text-gray-500">Active now</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                            {/* Messages */}
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-end">
                                    <div className="bg-blue-500 text-white rounded-2xl py-2 px-4 max-w-[80%] md:max-w-md shadow-sm">
                                        Hey, how are you?
                                    </div>
                                </div>
                                <div className="flex justify-start">
                                    <img src="https://img.icons8.com/?size=100&id=1cYVFPowIgtd&format=png&color=000000" className="rounded-full w-6 h-6 mt-1 mr-2" alt="Profile" />
                                    <div className="bg-white rounded-2xl py-2 px-4 max-w-[80%] md:max-w-md shadow-sm border border-gray-100">
                                        I'm good, thanks! How about you?
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t border-gray-200 bg-white">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Message..."
                                    className="flex-1 border border-gray-200 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-6 py-3 rounded-full text-sm font-medium">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </>

    )
}

export default Messages