import React from "react";
import Dialogs from './Dialogs';
import {  SEND_MESSAGEActionCreator,
     UPDATE_NEW_MESSAGE_BODYActionCreator } from "../../redux/reducer/dialogsReducer";



     
     const DialogsContainer = (props) => {
    let state =props.store.getState().dialogsPage;
  //  let messageTextRef=React.createRef();

     function MessageClick(){
        
        
        props.store.dispatch(SEND_MESSAGEActionCreator());
  
    }
   
    let onMessageChange=(body)=>{
        //let text =messageTextRef.current.value;
        props.store.dispatch(UPDATE_NEW_MESSAGE_BODYActionCreator(body))
        
    }
    return (
        <Dialogs updateNewMessageBody={onMessageChange} 
        sendMessage={MessageClick}
        dialogsPage={state}/>
    )
}
export default DialogsContainer;