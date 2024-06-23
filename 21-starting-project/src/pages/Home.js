import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const clickHandler = () =>{
        navigate('products');
    }
    return (
        <><h1>Welcome to the Page</h1><Link to={'products'}>Go to Products</Link>
            <p>
                <button onClick={clickHandler}>Navigate</button>
            </p>
        </>
    )
}

export default HomePage