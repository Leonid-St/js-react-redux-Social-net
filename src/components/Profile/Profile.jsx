import React from 'react';
import classes from './Profile.module.css';
import MyPost from './MyPost/MyPost';
import Profileinfo from './Profileinfo/Profileinfo';
const Profile = (props) => {
  
  return (
    <div className={classes.content}>
      <Profileinfo />
      <MyPost posts={props.profilePage.posts}
       addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
      
      />
    </div>



  )
}
export default Profile;