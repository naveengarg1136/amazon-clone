import React from 'react'
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";
import { useStateValue } from '../contextAPI/StateProvider';

const Header = () => {
  const [{basket},dispatch]= useStateValue();

  return (
    <div className='header'>
      <Link to='/'>
      <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
      </Link>
      
      <div className='header_search'>
        <input className='header_search_input' type='text'/>
        <SearchIcon className='header_search_icon'/>
      </div>
      <div className='header_nav'>

        <Link to="/login">
        <div className='header_option'>
          <span className='header_option_line_1'>Hello</span>
          <span className='header_option_line_2'>Sign In</span>
        </div>
        </Link>

        <div className='header_option'>
          <span className='header_option_line_1'>Return</span>
          <span className='header_option_line_2'> Orders</span>
        </div>
        <div className='header_option'>
          <span className='header_option_line_1'>Your</span>
          <span className='header_option_line_2'>Prime</span>
        </div>

        <Link to="/checkout">
        <div className='header_option_cart'>
          <ShoppingCartIcon/>
          <span className='header_option_line_2 header_cartCount'>{basket?.length}</span>
        </div>
        </Link>
        

      </div>
        
    </div>
  )
}

export default Header