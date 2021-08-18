import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post'
const MyPost = () => {
  return (
    <div>
      <div className={s.content}>
        <div>
          My Post
        </div>
        <textarea></textarea>
        <button>add Post</button>
      </div>
      <div className={s.post}>
        <Post message='Hi,first post' count='15'/>
        <Post message='second post' count='20'/>
      </div>
    </div >


  )
}
export default MyPost;