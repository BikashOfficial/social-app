import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const Explore = () => {
    return (
        <>
            <div className='mb-16'>
                <Header />
            </div>
            <div className='z-100'>
                <Sidebar />
            </div>
            <div className='z-0'>
                <div className="explore-container" style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '30px'
                }}>
                    <div className="search-box" style={{
                        marginBottom: '30px',
                        textAlign: 'center'
                    }}>
                        <input
                            type="text"
                            placeholder="🔍 Search amazing content..."
                            className="search-input transition-all duration-300 hover:shadow-lg"
                            style={{
                                width: '80%',
                                maxWidth: '400px',
                                padding: '12px 20px',
                                border: '1px solid #dbdbdb',
                                borderRadius: '25px',
                                fontSize: '16px',
                                outline: 'none',
                                backgroundColor: '#f8f8f8'
                            }}
                        />
                    </div>
                    <div className="explore-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: '15px',
                        padding: '0 10px'
                    }}>
                        {[...Array(9)].map((_, index) => (
                            <div key={index} className="explore-item" style={{
                                // position: 'relative',
                                aspectRatio: '1',
                                overflow: 'hidden',
                                borderRadius: '3px',
                                cursor: 'pointer'
                            }}>
                                <img
                                    src={`https://picsum.photos/id/${index+500}/300/300`}
                                    alt="Explore content"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                                {/* <div className="hover-overlay" style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'rgba(0, 0, 0, 0.3)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '20px',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    ':hover': {
                                        opacity: 1
                                    }
                                }}>
                                    <span style={{ color: 'white', fontSize: '16px' }}>❤️ 0</span>
                                    <span style={{ color: 'white', fontSize: '16px' }}>💬 0</span>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Explore