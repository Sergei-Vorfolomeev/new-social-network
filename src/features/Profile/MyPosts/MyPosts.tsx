import React, {ChangeEvent, memo, useState, KeyboardEvent} from 'react';
import s from 'features/Profile/MyPosts/MyPosts.module.scss'
import {Post} from "features/Profile/MyPosts/Post/Post";
import {MyPostsPropsType} from "features/Profile/MyPosts/MyPostsContainer";
import {AppRootStateType, PostType} from "app/store";
import {useSelector} from "react-redux";
import SendIcon from '@mui/icons-material/Send';

export const MyPosts: React.FC<MyPostsPropsType> = memo((props) => {

        const posts: PostType[] = useSelector((state: AppRootStateType) => state.profilePage.posts)

        const [textPost, setTextPost] = useState('')

        const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            setTextPost(e.currentTarget.value)
        }

        const addPostHandler = () => {
            if (textPost !== '') {
                props.addPost(textPost.trim())
                setTextPost('')
            }
        }

        const onEnterHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === 'Enter') addPostHandler()
        }

        return (
            <>
                <div className={s.myPostsContainer}>
                    <div className={s.textareaBlock}>
                        <textarea onChange={onChangeHandler}
                                  value={textPost}
                                  className={s.textarea}
                                  placeholder={'Try to create a post'}
                                  onKeyDown={onEnterHandler}
                        />
                        <button onClick={addPostHandler}
                                className={s.button}
                        >
                            <SendIcon/>
                        </button>
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
