
import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';
const MyPost = (props) => {
  let messageElements = props.posts.map(p => <Post message={p.message} countLike={p.countLike} />);
  let newPostElement = React.createRef();
  let addPost = () => {
    //let text = newPostElement.current.value;
    // alert(text);
   // props.addPost();
    props.dispatch({
      type:'ADD-POST'
    })
  }
  let onPostChange=()=>{
    let text = newPostElement.current.value;
    props.dispatch({
      type: 'UPDATE-NEW-POST-TEXT',
      newText:text
    })
    //updateNewPostText(text);
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
          ref={newPostElement}
          value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {messageElements}
      </div>
    </div >


  )
}
export default MyPost;