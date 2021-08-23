
let  rerenderEntireTree =()=>{
  console.log('zaglushka');
}
  let state ={
    profilePage:{
      posts:[
        {id:1,message:'hi',countLike:12},
        {id:2,message:'message2',countLike:5},
        {id:3,message:'message3',countLike:125}
      ],
      newPostText:'leo-app'
    },
    dialogsPage:{
      dialogs:[{id:1,name:'Fedor'},{id:2,name:"Marina"}],
      messages:[{id:1,message:'first message'},{id:2,message:'second message'}]
    }
  }

   export const addPost =()=>{
     let newPost={
       id:4,
       message:state.profilePage.newPostText,
       countLike:0};
     
     state.profilePage.posts.push(newPost);
     updateNewPostText('');
     rerenderEntireTree(state);
     
   }
 
   export const updateNewPostText=(newText)=>{
     state.profilePage.newPostText=newText;
     rerenderEntireTree(state);
   }
   export const subscribe =(observer)=>{
    rerenderEntireTree=observer;
   }

  export default state;