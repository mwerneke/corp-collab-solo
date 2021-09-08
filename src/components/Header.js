import React from 'react'
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import DuoSharpIcon from '@material-ui/icons/DuoSharp';
import './Header.css';
import Logo from './Logo.png'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux';
import {useState} from 'react';

function Header(props) {
  const [inputSearch, setInputSearch] =useState();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  
  const search=()=>{
    history.push('/library')
}
// set up a function that when input is changed search the library directory reference Pizza Parlor
  return (
    <div className="header">
      <div className="header__left">
        {/* <MenuSharpIcon /> */}
        <img
          className="header__logo"
          src={Logo} alt="" />
      </div>
      <div className="header__input">
        <input onChange ={e => setInputSearch(e.target.value)} value ={inputSearch} placeholder="  How to..." type="text" />
        <Button onClick={search}>
        <SearchSharpIcon className="header__inputBtn" />
        </Button>
      </div>
      <div className="header__right">
        <div className="header__rightIcon">
          {/* <Button>
          <DuoSharpIcon />
          </Button> */}
          <div className="stack">
            {
              user ?
          <h2> {user.username}</h2>
          :
          <h3>No user logged-in</h3>
            }
          <Button className={props.className}
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >Log Out</Button>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Header
