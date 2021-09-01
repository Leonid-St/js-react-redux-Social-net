import { combineReducers, createStore } from "redux";
import profileReducer from "./reducer/profileReducer";
import dialogsReducer from "./reducer/dialogsReducer";
import sidebarReducer from "./reducer/sidebarReducer";
import UsersReducer from "./reducer/UsersReducer";


let reducers=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:UsersReducer
});

let store =createStore(reducers);

export default store;