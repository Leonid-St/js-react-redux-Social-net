


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
  let stateCopy ={...state};
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
         return{
           ...state,
           newMessageBody:action.body
         }
          //stateCopy.newMessageBody = action.body;
        //this._callSubscriber(state);
      
        case SEND_MESSAGE:
          let body = state.newMessageBody;
          return{
            ...state,
            newMessageBody :'',
            messages:[
              ...state.messages,{
              id: 3,
              message: body
            }
          ]};
          
            // let body = state.newMessageBody;

            // //this.updateNewMessageText('');
            // //let stateCopy ={...state};
            // stateCopy.newMessageBody = '';
            // stateCopy.messages.push({
            //     id: 3,
            //     message: body
            // })
        // this._callSubscriber(state);
        
       
        default:
          return state
            break
        
    }

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