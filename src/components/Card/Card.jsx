import React from 'react';
import './Card.styles.css';

function Card({ title, description, image }) {
    
    if (description == null || image == null) {
        return (null);
    }

    return (
        <div className='card'>
            <img src={image.path.concat('/detail.jpg')} alt={title}/>
            <h2>{title}</h2>
            <h3 dangerouslySetInnerHTML={{ __html:description }}></h3>
        </div>
    )
}

export default Card;