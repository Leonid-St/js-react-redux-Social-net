

import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';
import MyPost from './MyPost';
import {connect}from 'react-redux';
// const MyPostContainer = (props) => {
  
//   // let state = props.store.getState();
 
//   let addPost = () => {


//     // posts={props.profilePage.posts}
//     // newPostText={props.profilePage.newPostText}
//     // dispatch={props.dispatch}

//     let text = newPostElement.current.value;
//     alert(text);
//    props.addPost();
//     props.store.dispatch({
//       type:'ADD-POST'
//     })
//   }

//   let onPostChange=(text)=>{
//     let text = newPostElement.current.value;
//     props.store.dispatch({
//       type: 'UPDATE-NEW-POST-TEXT',
//       newText:text
//     })
//     updateNewPostText(text);
//     console.log(text);
//   }

//   return ( 
//    <MyPost
//    updateNewPostText={onPostChange}
//    addPost={addPost}
//    posts={state.profilePage.posts}
//    newPostText={state.profilePage.newPostText}
//    />

//   )
// }
const mapStateToProps = (state) => {
  return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText:(text)=>{
     dispatch({
        type: 'UPDATE-NEW-POST-TEXT',
        newText:text
    })},

    addPost:()=>{
      //let text = newPostElement.current.value;
    //  alert(text);
    //addPost();
      dispatch({
        
        type:'ADD-POST'
      })
    }
    
 
}};
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;