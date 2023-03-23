import React from 'react';
import "./Container.css";
import Article from '../Blog/Blog';
import BlogItem from '../BlogItem/BlogItem';
import ToDo from '../To-do/ToDo';
// import Blog from './components/Blog/Blog';
// import BlogItem from './components/BlogItem/BlogItem';

const Container = () => {
    return (
        <div className='containerArticle'>
            <Article></Article>
            <Article></Article>
            <Article></Article>
            <BlogItem heading="Don't die with poor" author="jon Sutradhor"></BlogItem>
            <BlogItem heading="Life is beautiful" author="joy Sutradhor"></BlogItem>
            <BlogItem heading="Run for Dream" author="joy Sutradhor"></BlogItem>
            
        </div>
    );
};

export default Container;