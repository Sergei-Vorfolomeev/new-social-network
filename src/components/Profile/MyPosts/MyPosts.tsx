import React from 'react';
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea placeholder={'Write new post'}/>
                <button>Add Post</button>
            </div>
            <Post text={'Why is everyone silent?'} likesCount={0}/>
            <Post text={'It\'s my first post!'} likesCount={8}/>
            <Post text={'Hello!'} likesCount={15}/>
        </div>
    );
};
