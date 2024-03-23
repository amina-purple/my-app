import React from 'react';
import Posts from './Posts';
import data from './data'; // Import your data

const Main = () => {
    return (
        <div className='container'>
            <Posts posts={data.PostPage.posts}/> {/* Pass the 'posts' array from data */}
        </div>
    )
};

export default Main;
