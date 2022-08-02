import React from 'react';
import Footer from '../Shared/Footer';
import Blog from './Blog';
import Categories from './Categories';
import Post from './Post';
import Slider from './Slider';
import Subscribe from './Subscribe';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Categories></Categories>
            <Post></Post>
            <Blog></Blog>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;