import React from 'react'
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import DuoSharpIcon from '@material-ui/icons/DuoSharp';
import './Header.css';
import Logo from './Logo.png'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory();
  
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
        <input placeholder="  How to..." type="text" />
        <Button onClick={search}>
        <SearchSharpIcon className="header__inputBtn" />
        </Button>
      </div>
      <div className="header__right">
        <div className="header__rightIcon">
          <Button>
          <DuoSharpIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header
