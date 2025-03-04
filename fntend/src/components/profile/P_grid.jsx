import React from 'react'
import { Link } from 'react-router-dom'

const P_grid = () => {
    return (
        <div>
            <div className="profile-grid">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="grid-item">
                        {/* <img src={`/photo${item}.jpg`} alt={`Post ${item}`} /> */}
                        <Link to='/content' >
                            <img src="https://dynamic.design.com/template/preview/design/a6495bb6-40d7-45e1-9c58-2a9a0f4015d0?v=4&designTemplateVersion=1&size=design-preview-tall-1x" alt={`Post ${item}`} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default P_grid