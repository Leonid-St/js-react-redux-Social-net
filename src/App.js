
import './App.css';
import React, { Profiler } from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContiner';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
  //console.log(props);
  return (


    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path="/dialogs" render={() =>
          <DialogsContainer store={props.store}
          />} />
        <Route path="/profile" render={() =>
          <Profile
            store={props.store}

          />
        }
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
        <Route path="/users" render={() => 
          <UsersContainer />
        } />


      </div>


    </div>



  )
}


export default App;
