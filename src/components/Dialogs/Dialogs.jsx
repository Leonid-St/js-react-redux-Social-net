import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';
import Message from './Message/Message'
import DialogItem from "./DialogsItem/DialogItem";
import { addPost, SEND_MESSAGEActionCreator, UPDATE_NEW_MESSAGE_BODYActionCreator } from "../../redux/state";



const Dialogs = (props) => {

    let dialogsElements=props.dialogs.map(d=><DialogItem id={d.id} name={d.name} />)
    let messagesElements=props.messages.map(m=><Message message={m.message} id={m.id}/>)
    let messageTextRef=React.createRef();
     function MessageClick(){
        
        
        props.dispatch(SEND_MESSAGEActionCreator());
  
    }
   
    let onMessageChange=()=>{
        let text =messageTextRef.current.value;
        props.dispatch(UPDATE_NEW_MESSAGE_BODYActionCreator(text))
        
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
                <textarea onChange={onMessageChange} 
                ref={messageTextRef}
                value={props.newMessageBody}
                ></textarea>
                </div>
                <div>
               <button onClick={MessageClick}>123</button>
                </div>
                
            </div>
        </div>
    )
}
export default Dialogs;