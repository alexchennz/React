import React from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import {useSelector} from 'react-redux';


function App() {
  const auth = useSelector(state => state.auth.isAuthenticated);
  

  return (
    <React.Fragment>
      <Header />
      {!auth && <Auth />}
      {auth && <UserProfile />}
      <Counter />
    </React.Fragment>
  );
}

export default App;
