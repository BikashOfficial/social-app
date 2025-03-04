import React from 'react'

const Posts = () => {
    const [posts, setPosts] = React.useState([
        {
            id: 1,
            username: 'johndoe',
            imageUrl: 'https://imgs.search.brave.com/2RENnsQlbhD7koFRi3Egqo5wvpUINZOGLwuLo5bPQB0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/aWZ1bm55LmNvL2lt/YWdlcy9iMDBjOWUy/OTllNzRhZDI5Njg1/ZWY1MGUxNDdlZWE2/ZTFkYWIxNTMyMDFk/ZGI5M2NiMGU5MGYw/YjkyMDQ0MWRkXzEu/anBn',
            caption: 'This is a post caption',
            likes: 0
        },
        {
            id: 1,
            username: 'johndoe',
            imageUrl: 'https://i.redd.it/eq2j3ynkehfe1.jpeg',
            caption: 'This is a post caption',
            likes: 0
        },
        {
            id: 1,
            username: 'johndoe',
            imageUrl: 'https://b.thumbs.redditmedia.com/IH1Bk9foRxWMHFtr3CWeOizMEZI1atENoRmFzKUcEAg.jpg',
            caption: 'This is a post caption',
            likes: 0
        }

    ]);

    return (
        <div>
            <div className="max-w-[470px] mx-auto space-y-6 p-4 bg-white">
                {posts.map(post => (
                    <article key={post.id} className="border rounded-lg mb-8 shadow-xl bg-white">
                        {/* Header */}
                        <div className="p-3 flex items-center">
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                                <img 
                                    src="https://img.icons8.com/?size=100&id=1cYVFPowIgtd&format=png&color=000000" 
                                    alt="" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="ml-3 font-semibold text-sm">{post.username}</span>
                        </div>

                        {/* Image Container */}
                        <div className="aspect-square w-full relative">
                            <img 
                                src={post.imageUrl} 
                                alt="Post" 
                                className="absolute w-full h-full object-cover"
                            />
                        </div>

                        {/* Actions and Caption */}
                        <div className="p-3">
                            <div className="flex space-x-4 mb-2">
                                <button 
                                    onClick={() => setPosts(posts.map(p =>
                                        p.id === post.id ? { ...p, likes: p.likes + 1 } : p
                                    ))}
                                    className="text-2xl hover:opacity-60 transition-opacity"
                                >
                                    ❤️ {post.likes}
                                </button>
                                <button className="text-2xl hover:opacity-60 transition-opacity">💬</button>
                                <button className="text-2xl hover:opacity-60 transition-opacity">📤</button>
                            </div>
                            <p className="text-sm">
                                <span className="font-semibold mr-2">{post.username}</span>
                                {post.caption}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default Posts

{/* <div>
            <div className="max-w-xl mx-auto space-y-6 p-4 bg-white">
                {posts.map(post => (
                    <article key={post.id} className="border rounded-lg mb-8 shadow-xl">
                        <div className="p-4 flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-200"><img src="https://img.icons8.com/?size=100&id=1cYVFPowIgtd&format=png&color=000000" alt="" /></div>
                            <span className="ml-3 font-semibold">{post.username}</span>
                        </div>
                        <img src={post.imageUrl} alt="Post" className="w-full" />
                        <div className="p-4">
                            <div className="flex space-x-4 mb-4">
                                <button onClick={() => setPosts(posts.map(p =>
                                    p.id === post.id ? { ...p, likes: p.likes + 1 } : p
                                ))}>
                                    ❤️ {post.likes}
                                </button>
                                <button>💬</button>
                                <button>📤</button>
                            </div>
                            <p>
                                <span className="font-semibold">{post.username}</span> {post.caption}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </div> */}