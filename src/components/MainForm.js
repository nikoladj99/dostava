import Login from './Login/Login'
import Register from './Register.js';
//import './components/styles/App.css';
import useToken from './Login/useToken';
import { useState } from 'react';
import { useHistory, Switch, Route } from 'react-router-dom';
import axios from 'axios';

function MainForm() {
  const { token, setToken } = useToken();
  const [user, setUser] = useState([]);
  let history = useHistory();
  const LoginForm = () => <Login setToken={setToken} setUser={setUser} />;

  if(token != null){
    console.log(token);
    return (
        <div onClick={() => {setToken(null)}}>User:{user.username} sa id-em: {user.id} je logovan!</div>
    );
  }
  else{
    history.push("/");
    return (
      <Switch>
        <Route path="/Register" exact component={Register} />
        <Route path="/" component={LoginForm} />
      </Switch>
    );
  }
  
}

export default MainForm;