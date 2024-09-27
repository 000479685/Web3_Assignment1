import React from 'react'
import './CardList.css'
import Card from '../Card/Card'

const CardList = ({userData}) =>{
    return (
        <div className='card-list-container'>
            {
                userData.map((user, index) =>
                {
                    return <Card user={user} key={index}/>
                })
            }
        </div>
    )
}

export default CardList