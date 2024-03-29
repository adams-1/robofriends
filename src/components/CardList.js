import React from 'react';
import Card from './Card';

function CardList({robots}) {

    const cardsArray = robots.map((robot, i) => {

    return (
        <Card 
            key = {i}
            id = {robots[i].id}
            name = {robots[i].name}
            email = {robots[i].email}
        />
    )})

    return (
        <div>
           { cardsArray }
        </div>
    )
}

export default CardList;