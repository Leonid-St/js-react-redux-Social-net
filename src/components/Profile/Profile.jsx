import React from 'react';
import classes from './Profile.module.css';
import MyPost from './MyPost/MyPost';
const Profile = () => {
  return (
    <div className={classes.content}>
      <img src='https://pbs.twimg.com/profile_banners/180741633/1589457874/1500x500' />
    <div>
      <MyPost/>
    </div>
    </div>


  )
}
export default Profile;