import React, { useContext, useState } from 'react'
import { UserDataContext } from '../../context/UserContext';
import P_edit from './P_edit';

const P_header = () => {
    const { user } = useContext(UserDataContext);
    const [isOpen, setIsOpen] = useState(false);
    // const [formData, setFormData] = useState({
    //     name: user.name,
    //     bio: user.bio || '',
    //     email: user.email
    // });

    return (
        <div>
            <div className="profile-header mt-18">
                <div className="profile-avatar-section">
                    <img src="https://img.icons8.com/?size=100&id=1cYVFPowIgtd&format=png&color=000000" alt="Profile" className="profile-avatar" />
                    <div className="profile-stats">
                        <div className="stat-item">
                            <span className="stat-number">254</span>
                            <span className="stat-label">Posts</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">2k</span>
                            <span className="stat-label">Friends</span>
                        </div>
                    </div>
                </div>
                <div className="profile-info">
                    <h2 className='font-bold text-2xl'>{user.name}</h2>
                    {/* <p className="username">@johndoe</p> */}
                    <p className="username">@{user.username}</p>
                    <p className="min-w-70 bio max-w-100">{user.bio}</p>
                    {/* <button className="edit-profile-btn">Edit Profile</button> */}
                    <button
                        className="edit-profile-btn"
                        onClick={() => setIsOpen(true)}
                    >
                        Edit Profile
                    </button>
                </div>
            </div>
            {/* Edit Profile Modal */}
            <P_edit isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    )
}

export default P_header