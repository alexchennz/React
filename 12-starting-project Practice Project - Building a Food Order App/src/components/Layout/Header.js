import React from 'react';
import classes from './Header.module.css';
import mealsImage from './meals.jpg';
import HeaderCartButton from './HeaderCartButton';


const Header = (props) => {

  return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>   
            <HeaderCartButton onClick={props.onCilckHandler}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="" />
        </div>
    </React.Fragment>
  )
}

export default Header