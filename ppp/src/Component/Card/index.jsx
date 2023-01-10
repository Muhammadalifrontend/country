import React from 'react';
import "./style.scss"
import { Link } from 'react-router-dom'

const index = ({ data: { flag, population, capital, region, name } }) => {

    return (
        <>
            <Link to={`/countries/${name}`}>
                <div className="card">
                    <img className='image' src={flag} alt={name} />
                    <div className="card-body">
                        <h2 className='card_title'>{name}</h2>
                        <ul>
                            <li>Population:<strong>{population}</strong></li>
                            <li>Region:<strong>{region}</strong></li>
                            <li>Capital:<strong>{capital}</strong></li>
                        </ul>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default index;