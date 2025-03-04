import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const Content_view = () => {
const contentViewStyle = {
    maxWidth: '600px',
    margin: '20px auto',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif'
};

const headerStyle = {
    padding: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #efefef'
};

const avatarStyle = {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    marginRight: '10px'
};

const actionStyle = {
    padding: '10px 15px',
    display: 'flex',
    gap: '15px'
};

const buttonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '24px',
    color: '#262626'
};

const imageStyle = {
    width: '100%',
    height: 'auto',
    display: 'block'
};

const detailsStyle = {
    padding: '15px'
};

const commentStyle = {
    margin: '10px 0',
    fontSize: '14px'
};

const inputStyle = {
    width: '100%',
    padding: '15px',
    border: 'none',
    borderTop: '1px solid #efefef',
    outline: 'none'
};

return (
    <>
    <div className='mb-16'>
    <Header />
    <Sidebar/>
    </div>
    <div style={contentViewStyle} className='p-2' >
        <div className="content-view-container">
            <div style={headerStyle}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="https://img.icons8.com/?size=100&id=1cYVFPowIgtd&format=png&color=000000" alt="User avatar" style={avatarStyle} />
                    <span style={{ fontWeight: 'bold' }}>Username</span>
                </div>
                <button style={buttonStyle}>•••</button>
            </div>
            
            <div className="content-main">
                <img src="https://dynamic.design.com/template/preview/design/a6495bb6-40d7-45e1-9c58-2a9a0f4015d0?v=4&designTemplateVersion=1&size=design-preview-tall-1x" alt="Post content" style={imageStyle} />
            </div>
            
            <div style={actionStyle}>
                <button style={buttonStyle}><i className="far fa-heart"></i></button>
                <button style={buttonStyle}><i className="far fa-comment"></i></button>
                <button style={buttonStyle}><i className="far fa-paper-plane"></i></button>
                <button style={{ ...buttonStyle, marginLeft: 'auto' }}><i className="far fa-bookmark"></i></button>
            </div>
            
            <div style={detailsStyle}>
                <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>❤️ 1,234 likes</div>
                <div style={commentStyle}>
                    <span style={{ fontWeight: 'bold', marginRight: '8px' }}>Username</span>
                    <span>This is the post caption...</span>
                </div>
                <div style={{ color: '#8e8e8e', fontSize: '14px', marginTop: '5px' }}>
                    <div style={commentStyle}>
                        <span style={{ fontWeight: 'bold', marginRight: '8px' }}>commenter1</span>
                        <span>Great post!</span>
                    </div>
                    <div style={{ color: '#8e8e8e', marginTop: '5px' }}>View all 123 comments</div>
                </div>
                <div style={{ color: '#8e8e8e', fontSize: '12px', marginTop: '10px' }}>2 HOURS AGO</div>
            </div>
            
            <div style={{ display: 'flex', borderTop: '1px solid #efefef' }}>
                <input type="text" placeholder="Add a comment..." style={inputStyle} />
                <button style={{ ...buttonStyle, color: '#0095f6', padding: '15px' }}>Post</button>
            </div>
        </div>
    </div>
    <Footer />
    </>
)
}

export default Content_view