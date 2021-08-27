
import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
  let messageElements = props.posts.map(p => <Post message={p.message} countLike={p.countLike} />);
 
  let onAddPost = () => {
    //let text = newPostElement.current.value;
    // alert(text);
    props.addPost();
    // props.dispatch({
    //   type:'ADD-POST'
    // })
  }

  let onPostChange=(e)=>{
    
    let text = e.target.value;
    // props.dispatch({
    //   type: 'UPDATE-NEW-POST-TEXT',
    //   newText:text
    // })
    props.updateNewPostText(text);
    console.log(text);
  }

  return ( 
    <div className={s.content}>
      <div >
        <div className={s.postsLogo} >
          <h3>Posts</h3>
        </div>
        <div>
          <textarea onChange={onPostChange}
          
          value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {messageElements}
      </div>
    </div >


  )
}
export default MyPost;