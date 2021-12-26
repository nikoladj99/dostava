import React,{useState, useContext} from 'react';
import axios from "axios";
import '../styles/Login.css';
import { UserContext } from "../../context/userContext.js";
import {url} from '../../constants/constants.js';
import {Link} from 'react-router-dom';

async function loginUser(user) {
    return axios.post(url + "/users/login", user ).catch((error) => {
      if (error.response) alert(error.response.data.error);
      else alert(error);
    });
  }

function Login({ setToken, setUser }){

    //const [user, setUser] = useContext(UserContext);
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);

    const submitLogin = async (e) => {
        e.preventDefault();
        const userToken = await loginUser({
          "username": userName, 
          "password": password 
        });
            if (userToken) {
                /*setUser({
                  token: userToken.data.token,
                  email: userToken.data.user.email,
                  username: userToken.data.user.username,
                  notificationNumber: userToken.data.notificationNumber,
                  avatar: user.avatar,
                  avatarSrc: user.avatarSrc,
                  id: userToken.data.user.id,
                });*/  
          setToken(userToken.data.token);
          setUser(userToken.data.user);
        }
      };
    

    return (
        <div class="LoginCont">
            <div class="page-login">
                <div class="ui centered grid container">
                <div class="nine wide column">
                    <div class="ui fluid card">
                    <div class="content">
                    <form class="ui form">
                        <div class="field">
                        <label>User</label>
                        <input type="text" name="user" placeholder="User"
                        onChange={(e) => setUserName(e.target.value)}
                        />
                        </div>
                        <div class="field">
                        <label>Password</label>
                        <input type="password" name="pass" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        </div>
                        <div className='buttons'>
                          <button class="ui primary labeled icon button" 
                          onClick={submitLogin} >
                          <i class="unlock alternate icon"></i>
                          Login
                          </button>
                          <Link to="/Register">
                            <button type="button" class="orange ui button">
                              Register
                            </button>
                          </Link>
                        </div>
                        
                      
                    </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
    );
}

export default Login;