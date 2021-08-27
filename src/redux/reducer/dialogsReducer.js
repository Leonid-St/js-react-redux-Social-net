

const UPDATE_NEW_MESSAGE_BODY = 'NEW-MESSAGE-BODY';
const SEND_MESSAGE = "SEND-MESSAGE";
let initial_state ={
     
        dialogs: [{ id: 1, name: 'Fedor' },
        { id: 2, name: "Marina" }],
        messages: [{ id: 1, message: 'first message' },
        { id: 2, message: 'second message' }],
        newMessageBody: ''
      }

export const dialogsReducer = (state=initial_state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
        //this._callSubscriber(state);
        break;
        case SEND_MESSAGE:
            let body = state.newMessageBody;

            //this.updateNewMessageText('');
            state.newMessageBody = '';
            state.messages.push({
                id: 3,
                message: body
            })
        // this._callSubscriber(state);
        
        break;
        default:
            
            break
        
    }
    return state

}
export const SEND_MESSAGEActionCreator = () => {
    return (
      {
        type: SEND_MESSAGE
      }
    )
  };
  export const UPDATE_NEW_MESSAGE_BODYActionCreator = (body) => {
    return (
      {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
  
      }
    )
  };
export default dialogsReducer;