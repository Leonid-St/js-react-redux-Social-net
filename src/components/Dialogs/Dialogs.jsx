import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';
import Message from './Message/Message'
import DialogItem from "./DialogsItem/DialogItem";
import {
    SEND_MESSAGEActionCreator,
    UPDATE_NEW_MESSAGE_BODYActionCreator
} from "../../redux/reducer/dialogsReducer";



const Dialogs = (props) => {


    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name} />)

    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} />)

   



    function MessageClick() {

        props.sendMessage();
        // props.store.dispatch(SEND_MESSAGEActionCreator());

    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        //props.store.dispatch(UPDATE_NEW_MESSAGE_BODYActionCreator(body))
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}


            </div>
            <div>
                <div className={s.messages}>
                    {messagesElements}

                </div>
                <div>
                    <div>
                        <textarea onChange={onMessageChange}
                            placeholder='message'
                            value={state.newMessageBody}
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={MessageClick}>123</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Dialogs;