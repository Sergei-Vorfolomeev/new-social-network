import React, {useRef} from 'react';
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostsType[]
    addPost: (textPost:string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const newPostElement = useRef<HTMLTextAreaElement>(null)

    const addPostHandler = () => {
        if (newPostElement && newPostElement.current) {
            let text = newPostElement.current.value
            props.addPost(text)
        }
    }

    return (
        <div className={styles.myPosts}>
            My posts
            <div>
                <textarea
                    ref={newPostElement}
                    placeholder={'Write new post'}/>
                <button onClick={addPostHandler}>Add Post</button>
            </div>
            {props.posts.map(el => {
                return (
                    <Post key={el.id} id={el.id} text={el.text} likesCount={el.likesCount}/>
                )
            })}
        </div>
    );
};
