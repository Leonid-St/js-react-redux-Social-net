const UPDATE_NEW_MESSAGE_BODY='NEW-MESSAGE-BODY';
const SEND_MESSAGE="SEND-MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'hi', countLike: 12 },
        { id: 2, message: 'message2', countLike: 5 },
        { id: 3, message: 'message3', countLike: 125 }
      ],
      newPostText: 'leo-app'
    },
    dialogsPage: {
      dialogs: [{ id: 1, name: 'Fedor' },
       { id: 2, name: "Marina" }],
      messages: [{ id: 1, message: 'first message' },
       { id: 2, message: 'second message' }],
       newMessageBody:''
    },
    
  },
  dispatch(action){
    if(action.type==='ADD-POST'){
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        countLike: 0
      };
  
      this._state.profilePage.posts.push(newPost);
      this.updateNewPostText('');
      this._callSubscriber(this._state);
  }
   else if(action.type==='UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    
  }else if(action.type===UPDATE_NEW_MESSAGE_BODY){
    this._state.dialogsPage.newMessageBody=action.body;
    this._callSubscriber(this._state);
   
  }else if(action.type===SEND_MESSAGE){
    let body =this._state.dialogsPage.newMessageBody;
    this.updateNewMessageText('');
    this._state.dialogsPage.messages.push({
      id:3,
      message:body
    })
    this._callSubscriber(this._state);

  }
},
  getState(){
    return this._state;
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newText){
    this._state.dialogsPage.newMessageBody = newText;
    this._callSubscriber(this._state);
  },
  addPost() {
    let newPost = {
      id: 4,
      message: this._state.profilePage.newPostText,
      countLike: 0
    };

    this._state.profilePage.posts.push(newPost);
    this.updateNewPostText('');
    this._callSubscriber(this._state);

  },
   _callSubscriber  ()  {
    console.log('zaglushka');
  },
  
  subscribe(observer) {
    this._callSubscriber = observer;
  }


}
window.store=store;
export const SEND_MESSAGEActionCreator =()=>{
  return(
    {
      type:SEND_MESSAGE
    }
  )
};
export const UPDATE_NEW_MESSAGE_BODYActionCreator =(body)=>{
  return(
    {
      type:UPDATE_NEW_MESSAGE_BODY,
      body:body
    
    }
  )
};
export default store;