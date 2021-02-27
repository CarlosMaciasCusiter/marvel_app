import React from 'react';

function Card({ title, description }) {
    
    if (description == null) {
        return (null);
    }

    return (
        <div>
            <h2>{title}</h2>
            <p dangerouslySetInnerHTML={{ __html:description }}></p>
        </div>
    )
}

export default Card;