import React, {memo, useRef} from 'react';
import styles from 'features/components/Profile/MyPosts/MyPosts.module.scss'
import {Post} from "features/components/Profile/MyPosts/Post/Post";
import {MyPostsPropsType} from "features/components/Profile/MyPosts/MyPostsContainer";

export const MyPosts: React.FC<MyPostsPropsType> = memo((props) => {

    const newPostElement = useRef<HTMLTextAreaElement>(null)

    const addPostHandler = () => {
        if (newPostElement && newPostElement.current) {
            let text = newPostElement.current.value
            props.addPost(text)
            newPostElement.current.value = ''
        }
    }
    console.log('render')
    return (
        <div className={styles.myPosts}>
            My posts
            <div>
                <textarea
                    ref={newPostElement}
                    placeholder={'Write new post'}/>
                <button onClick={addPostHandler}>Add Post</button>
            </div>
            {props.profilePage.posts.map((el, index) => {
                return (
                    <Post key={el.id}
                          id={el.id}
                          text={el.text}
                          likesCount={el.likesCount}
                          index={index}/>
                )
            })}
        </div>
    );
});
