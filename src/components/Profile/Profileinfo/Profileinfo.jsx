

import React from 'react';
import s from './Profileinfo.module.css';
const Profileinfo = (proprs) => {
    return (<div>
        <div className={s.image}>
            <img  src='https://pbs.twimg.com/profile_banners/180741633/1589457874/1500x500' />
        </div>
        <div className={s.desctiptionBlock}>
            ava + discription
        </div>
    </div>
    )
}
export default Profileinfo;