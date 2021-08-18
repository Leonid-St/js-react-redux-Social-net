import React from 'react';
import s from './Post.module.css';
const Post = (props) => {
  return (<div>
    <div className={s.item}>
      <img src='https://oir.mobi/uploads/posts/2021-03/thumbs/1616374820_24-p-anime-art-devushka-na-avu-31.jpg' />
      {props.message}
    </div>
    <span  className={s.span} >Like:{props.count}</span>
  </div>

  )
}
export default Post;