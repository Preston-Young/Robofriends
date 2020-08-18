import React from 'react';

const Card = ({ id, name, email }) => {
    return (
        <div className="bg-light-green grow ma2 pa3 br3 dib bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="sick"/>
            <div className="tc">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;