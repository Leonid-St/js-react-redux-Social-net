import dialogsReducer from "./reducer/dialogsReducer";
import profileReducer from "./reducer/profileReducer";
import sidebarReducer from "./reducer/sidebarReducer";
const UPDATE_NEW_MESSAGE_BODY = 'NEW-MESSAGE-BODY';
const SEND_MESSAGE = "SEND-MESSAGE";

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
      newMessageBody: ''
    },
    sidebar: {},

  },
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);//afigeno
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebarPage, action);
    this._callSubscriber(this._state);


  },
  getState() {
    return this._state;
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newText) {
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
  _callSubscriber() {
    console.log('zaglushka');
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  }


}
window.store = store;

export default store;