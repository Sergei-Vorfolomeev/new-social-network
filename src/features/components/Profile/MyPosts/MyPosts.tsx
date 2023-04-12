import React, {memo, useRef} from 'react';
import s from 'features/components/Profile/MyPosts/MyPosts.module.scss'
import {Post} from "features/components/Profile/MyPosts/Post/Post";
import {MyPostsPropsType} from "features/components/Profile/MyPosts/MyPostsContainer";
import {AppRootStateType, PostType} from "app/store";
import {useSelector} from "react-redux";

export const MyPosts: React.FC<MyPostsPropsType> = memo((props) => {

        const posts: PostType[] = useSelector((state: AppRootStateType) => state.profilePage.posts)
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
            <>
                <div className={s.myPosts}>
                    My posts
                    <div>
                        <textarea
                            ref={newPostElement}
                            placeholder={'Write new post'}/>
                        <button onClick={addPostHandler}>Add Post</button>
                    </div>
                    {posts.map((el, index) => {
                        return (
                            <Post key={el.id}
                                  post={el}
                            />
                        )
                    })}
                </div>
            </>
        );
    })
;
