import React from 'react'
import './home.css';
import backgroundPicture from "../image/BackgroundPicture.jpg";
import Product from './Product';

const Home = () => {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='backgroundPicture' src={backgroundPicture} alt=''/>
            
            <div className='home__row'>
                <Product id="1" title='Ram' price={299} rating={4} image="https://images-eu.ssl-images-amazon.com/images/I/319YSGWHW0S._AC_SR400,600_.jpg"/>
                <Product id="3" title='Ram' price={299} rating={4} image="https://images-eu.ssl-images-amazon.com/images/I/319YSGWHW0S._AC_SR400,600_.jpg"/>
                <Product id="4" title='Ram' price={299} rating={4} image="https://images-eu.ssl-images-amazon.com/images/I/319YSGWHW0S._AC_SR400,600_.jpg"/>
            </div>

            <div className='home__row'>
            <Product id="2" title='Ram' price={299} rating={4} image="https://images-eu.ssl-images-amazon.com/images/I/319YSGWHW0S._AC_SR400,600_.jpg"/>
            <Product id="33" title='Ram' price={299} rating={4} image="https://images-eu.ssl-images-amazon.com/images/I/319YSGWHW0S._AC_SR400,600_.jpg"/>
            <Product id="42" title='Ram' price={299} rating={4} image="https://images-eu.ssl-images-amazon.com/images/I/319YSGWHW0S._AC_SR400,600_.jpg"/>
            <Product id="423" title='Ram' price={299} rating={4} image="https://images-eu.ssl-images-amazon.com/images/I/319YSGWHW0S._AC_SR400,600_.jpg"/>
            </div>

            <div className='home__row'>
            <Product id="4123" title='Ram' price={299} rating={4} image="https://images-eu.ssl-images-amazon.com/images/I/319YSGWHW0S._AC_SR400,600_.jpg"/>
            <Product id="4332" title='Ram' price={299} rating={4} image="https://images-eu.ssl-images-amazon.com/images/I/319YSGWHW0S._AC_SR400,600_.jpg"/>
            </div>
        </div>
    </div>
  )
}

export default Home