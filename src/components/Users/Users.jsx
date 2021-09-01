import React from 'react';
import Styles from './users.module.css';
const Users = (props) => {
 
    return (
        <div>{
            props.users.map(u => <div key={u.id} >
                <span>
                    <div>
                        <img className={Styles.photoUrl} src={u.photoUrl} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>UnFollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>u.fullName</div>
                        <div>u.Status</div>
                    </span>
                    <span>
                        <div>u.location.county</div>
                        <div>u.lication.city</div>
                    </span>
                </span>



            </div>)

        }
        </div>
    )
}
export default Users;