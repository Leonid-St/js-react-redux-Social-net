import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';
import Message from './Message/Message'
import DialogItem from "./DialogsItem/DialogItem";
import { addPost } from "../../redux/state";
import { render } from "@testing-library/react";


const Dialogs = (props) => {

    let dialogsElements=props.dialogs.map(d=><DialogItem id={d.id} name={d.name} />)
    let messagesElements=props.messages.map(m=><Message message={m.message} id={m.id}/>)
    let messageTextRef=React.createRef();
     function MessageClick(){
        let text =messageTextRef.current.value;
         alert(text);
        
        
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
              {dialogsElements}


            </div>
            <div className={s.messages}>
               {messagesElements}
                
            </div>
            <div>
                <div>
                <textarea ref={messageTextRef}></textarea>
                </div>
                <div>
               <button onClick={MessageClick}>123</button>
                </div>
                
            </div>
        </div>
    )
}
export default Dialogs;