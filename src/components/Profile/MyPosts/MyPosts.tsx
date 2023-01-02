import React, {useRef} from 'react';
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/store-redux";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store-redux";
import {addPostAC} from "../../../redux/profilePageReducer";

type MyPostsPropsType = {
    // posts: PostsType[]
    // dispatch: (action: GeneralACType) => void
}


export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const profilePage = useSelector<AppRootStateType, ProfilePageType>(state => state.profilePage)
    const dispatch = useDispatch()

    const newPostElement = useRef<HTMLTextAreaElement>(null)

    const addPostHandler = () => {
        if (newPostElement && newPostElement.current) {
            let text = newPostElement.current.value
            dispatch(addPostAC(text))
            newPostElement.current.value = ''
            console.log(profilePage.posts)
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
            {profilePage.posts?.map((el, index) => {
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
};
