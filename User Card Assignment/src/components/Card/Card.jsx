import React from 'react'
import './Card.css'


const Card = ({user})=>
{
    return (
        <div className='card-container'>
            <div className='card-icon'>
                <img src={user.avatar} alt='user photo'/>
            </div>

            <div className='card-text'>
                <div className='card-name'>
                    {user.first_name} {user.last_name}
                </div>

                <div className='card-email'>
                    {user.email}
                </div>
            </div>
        </div>
    )
}

export default Card