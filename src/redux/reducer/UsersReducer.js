
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS='SET-USERS'
let initial_state = {
  users: [
    { id: 1, photoUrl:'https://static.quizur.com/i/b/58e68900402343.7923302058e689003021e3.01375494.png',
     followed: false, fullName: 'anjelika', status: 'status1', location: { city: 'Minsk', country: 'Belarus' } },
    { id: 2,photoUrl:'https://static.quizur.com/i/b/58e68900402343.7923302058e689003021e3.01375494.png',
     followed: true, fullName: 'Aletta', status: 'status2', location: { city: 'Minsk', country: 'Belarus' } },
    { id: 3,photoUrl:'https://static.quizur.com/i/b/58e68900402343.7923302058e689003021e3.01375494.png',
     followed: false, fullName: 'Kate', status: 'status3', location: { city: 'Murom', country: 'Russia' } },
    { id: 4,photoUrl:'https://static.quizur.com/i/b/58e68900402343.7923302058e689003021e3.01375494.png',
     followed: true, fullName: 'Liza', status: 'status4', location: { city: 'Saint-Peterburg', country: 'Russia' } }
  ]

}

export const UsersReducer = (state = initial_state, action) => {
 // let stateCopy = { ...state };
  switch (action.type) {
    case FOLLOW:
    return{
      ...state,
      // users:[...state.users]
      // users::state.users.map(u=>u) одно и то жн 
      users:state.users.map(u=>{
       if(u.id===action.userId){
         return {...u,followed:true}
       }
        return u;
      })
    }
    case UNFOLLOW:
      return{
        ...state,
        // users:[...state.users]
        // users::state.users.map(u=>u) одно и то жн 
        users:state.users.map(u=>{
         if(u.id===action.userId){
           return {...u,followed:false}
         }
          return u;
        })
      }
      case SET_USERS:
return{...state,users:[...state.users,...action.users]}

    default:
      return state
    

  }

}
// export const constfollowAC = () => {
//   return (
//     {
//       type: FOLLOW
//     }
//   )
// };
// export const unfollowAC = () => {
//   return (
//     {
//       type: UNFOLLOW
//     }
//   )
// };
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC=(userId)=>({type:SET_USERS,userId})
export default UsersReducer;