import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    // const cardArray = robots.map( (user, i) => 
    // <Card key={i} id={user.id} name={user.name} email={user.email} /> );
    return (
        <div>
            {robots.map( (user, i) => <Card key={i} id={user.id} name={user.name} email={user.email} /> )}
        </div>
    );
}

export default CardList;