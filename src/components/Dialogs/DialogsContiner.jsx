import React from "react";
import Dialogs from './Dialogs';
import { connect } from "react-redux";
import {
    SEND_MESSAGEActionCreator,
    UPDATE_NEW_MESSAGE_BODYActionCreator
} from "../../redux/reducer/dialogsReducer";
// const DialogsContainer = (props) => {
//     let state = props.store.getState().dialogsPage;
//     //  let messageTextRef=React.createRef();

//     function MessageClick() {


//         props.store.dispatch(SEND_MESSAGEActionCreator());

//     }

//     let onMessageChange = (body) => {
//         //let text =messageTextRef.current.value;
//         props.store.dispatch(UPDATE_NEW_MESSAGE_BODYActionCreator(body))

//     }
//     return (
//         <Dialogs updateNewMessageBody={onMessageChange}
//             sendMessage={MessageClick}
//             dialogsPage={state} />
//     )
// }
const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(UPDATE_NEW_MESSAGE_BODYActionCreator(body))
        },
        sendMessage:() => {
            dispatch(SEND_MESSAGEActionCreator());
        },

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;