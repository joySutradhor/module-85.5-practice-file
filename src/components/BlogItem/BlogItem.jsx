import React from 'react';
import "./BlogItem.css";

const BlogItem = (props) => {
    return (
        <div className='bookContainer'>
            <div className='blogItem'>
            <h3>Book name is : {props.heading}</h3>
            <p>Book Author name is : {props.author}</p>
        </div>
        </div>
    );
};

export default BlogItem;