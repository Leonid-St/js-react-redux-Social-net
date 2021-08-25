import React from 'react';
import classes from './Profile.module.css';
import MyPost from './MyPost/MyPost';
import Profileinfo from './Profileinfo/Profileinfo';
const Profile = (props) => {
  
  return (
    <div className={classes.content}>
      <Profileinfo />
      <MyPost posts={props.profilePage.posts}
      newPostText={props.profilePage.newPostText}
      dispatch={props.dispatch}
       
      
      />
    </div>



  )
}
export default Profile;