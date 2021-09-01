

import React from 'react';
import s from './Profileinfo.module.css';
const Profileinfo = (proprs) => {
    return (<div>
        <div className={s.image}>
            <img  src='https://w-dog.ru/wallpapers/9/13/438469529917926/pirs-kaunti-shtat-vashington-ssha.jpg' />
        </div>
        <div className={s.desctiptionBlock}>
            ava + discription
        </div>
    </div>
    )
}
export default Profileinfo;