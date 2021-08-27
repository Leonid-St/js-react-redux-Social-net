const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initial_state = {
  posts: [
    { id: 1, message: 'hi', countLike: 12 },
    { id: 2, message: 'message2', countLike: 5 },
    { id: 3, message: 'message3', countLike: 125 }
  ],
  newPostText: 'leo-app'
}

export const profileReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        message: state.newPostText,
        countLike: 0
      };
      state.posts.push(newPost);
      //this.updateNewPostText(''); 
      state.newPostText = '';
      //  this._callSubscriber(this._state);
      break;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      //  this._callSubscriber(this._state);
      break;
    default:
      break;
  }
  return state;
}
export default profileReducer;