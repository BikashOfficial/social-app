import React, { useContext, useState } from 'react'
import { UserDataContext } from '../../context/UserContext';
import axios from 'axios';

const P_edit = ({ isOpen, setIsOpen }) => {

    const { user,setUser } = useContext(UserDataContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const [formData, setFormData] = useState({
        name: user.name,
        bio: user.bio || '',
        // bio: "Photography | Travel | Food 📸✈️🍕",
        email: user.email,
        username: user.username,

    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         // const response = await fetch('http://localhost:8000/api/user/update', {
    //         // method: 'PUT',
    //         // headers: {
    //         //     'Content-Type': 'application/json',
    //         //     'Authorization': `Bearer ${localStorage.getItem('token')}`
    //         // },
    //         // body: JSON.stringify(formData)
    //         // });
    //         const response = await axios.put(
    //             `${import.meta.env.VITE_BASE_URL}/user/update-profile`,
    //             formData,
    //             {
    //                 withCredentials: true // This is important
    //             }
    //         );

    //         if (response.status !== 200) {
    //             throw new Error('Failed to update profile');
    //         }

    //         console.log('Profile updated successfully:', response.data);
    //     } catch (error) {
    //         console.error('Error updating profile:', error);
    //     }
    //     setIsOpen(false);
    // };


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.put(
    //             `${import.meta.env.VITE_BASE_URL}/user/update-profile`,
    //             formData,
    //             {
    //                 withCredentials: true
    //             }
    //         );

    //         if (response.status === 200) {
    //             // Update the user context with new data
    //             setUser(response.data.user);
    //             // Update localStorage
    //             localStorage.setItem('user', JSON.stringify(response.data.user));
    //             setIsOpen(false);
    //         }
    //     } catch (error) {
    //         console.error('Error updating profile:', error);
    //         alert('Failed to update profile');
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
    
        try {
            const response = await axios.put(
                `${import.meta.env.VITE_BASE_URL}/user/update-profile`,
                formData,
                { 
                    withCredentials: true,
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
    
            if (response.status === 200) {
                const updatedUser = response.data.user;
                setUser(updatedUser);
                localStorage.setItem('user', JSON.stringify(updatedUser));
                setIsOpen(false);
            }
        } catch (error) {
            console.error('Error details:', error.response?.data);
            setError(error.response?.data?.error || 'Failed to update profile');
        } finally {
            setLoading(false);
        }
    };

    console.log(user);

    return (
        <div>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setIsOpen(false);
                        }
                    }}
                >
                    <div className="bg-white rounded-2xl p-4 md:p-8 w-[95%] md:w-[600px] lg:w-[450px] shadow-2xl transform transition-all duration-300 hover:scale-[1.02]">
                        <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-gray-800 border-b pb-4">Edit Profile</h2>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <div className="flex flex-col items-center mb-4">
                                <div className="relative">
                                    <img
                                        src={'https://img.icons8.com/?size=100&id=1cYVFPowIgtd&format=png&color=000000'}
                                        alt="Profile"
                                        className="w-24 h-24 rounded-full object-cover"
                                    />
                                    <label className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer hover:bg-blue-600 transition-colors">
                                        <input
                                            type="file"
                                            className="hidden"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.target.files[0];
                                                if (file) {
                                                    setFormData({
                                                        ...formData,
                                                        photo: URL.createObjectURL(file)
                                                    });
                                                }
                                            }}
                                        />
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 20) {
                                            handleChange(e);
                                        }
                                    }}
                                    maxLength={20}
                                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:border-gray-300"
                                    placeholder="Enter your name"
                                />
                                <div className="text-sm text-gray-500 mt-1">
                                    {formData.name.length}/20 characters
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 15) {
                                            handleChange(e);
                                        }
                                    }}
                                    maxLength={15}
                                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:border-gray-300"
                                    placeholder="Enter your username"
                                />
                                <div className="text-sm text-gray-500 mt-1">
                                    {formData.username?.length || 0}/15 characters
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                    Bio
                                </label>
                                <textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 70) {
                                            handleChange(e);
                                        }
                                    }}
                                    maxLength={70}
                                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:border-gray-300 resize-none"
                                    rows="4"
                                    placeholder="Write something about yourself (max 70 characters)"
                                />
                                <div className="text-sm text-gray-500 mt-1">
                                    {formData.bio.length}/70 characters
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                    Account Privacy
                                </label>
                                <div className="flex items-center space-x-4">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="privacy"
                                            value="public"
                                            checked={formData.privacy === 'public'}
                                            onChange={handleChange}
                                            className="form-radio text-blue-500"
                                        />
                                        <span className="ml-2">Public</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="privacy"
                                            value="private"
                                            checked={formData.privacy === 'private'}
                                            onChange={handleChange}
                                            className="form-radio text-blue-500"
                                        />
                                        <span className="ml-2">Private</span>
                                    </label>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 pt-4 border-t">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 md:px-6 py-2 md:py-2.5 text-gray-600 hover:text-gray-800 font-medium rounded-xl bg-gray-100 transition-all duration-200"
                                >
                                    Cancel
                                </button>
                                {/* <button
                                    type="submit"
                                    className="px-4 md:px-6 py-2 md:py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-blue-700 transform transition-all duration-200 hover:shadow-lg"
                                >
                                    Save Changes
                                </button> */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-4 md:px-6 py-2 md:py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-blue-700 transform transition-all duration-200 hover:shadow-lg disabled:opacity-50"
                                >
                                    {loading ? 'Saving...' : 'Save Changes'}
                                </button>

                                {error && (
                                    <div className="text-red-500 text-sm mt-2">
                                        {error}
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default P_edit