import React from 'react';
import classes from './Profile.module.css';
import MyPost from './MyPost/MyPost';
import Profileinfo from './Profileinfo/Profileinfo';
import MyPostContainer from './MyPost/MyPostContainer';
const Profile = (props) => {
  
  return (
    <div className={classes.content}>
      <Profileinfo />
      <MyPostContainer store ={props.store}
    
      />
    </div>



  )
}
export default Profile;