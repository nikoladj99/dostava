import React,{useState, useContext} from 'react';
import axios from "axios";
import {url} from '../constants/constants.js';
import {Link} from 'react-router-dom';


function Register(){

    const [role, setRole] = useState('customer');

    return(
        <div>
                <form id="test" class="ui form" method="POST" action="">
                    <h4 class="ui center aligned top attached header">Please enter your credentials</h4>
                    <div id="form-segment" class="ui center aligned attached segment">
                        <div class="field">
                            <label for="username">Username:</label>
                            <input type="text" id="username" name="username" placeholder="Enter username..."/>
                        </div>
                        <div class="field">
                            <label for="email">E-mail:</label>
                            <input type="email" id="email" name="email" placeholder="Enter email..."/>
                        </div>
                        <div class="field">
                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" placeholder="••••••••"/>
                        </div>
                        <div class="ui form">
                            <div class="inline fields">
                                <label>Register as</label>
                                <div class="field">
                                <div class="ui radio checkbox">
                                    <input type="radio" name="radio" checked="checked"/>
                                    <label>a customer</label>
                                </div>
                                </div>
                                <div class="field">
                                <div class="ui radio checkbox">
                                    <input type="radio" name="radio" checked="checked"/>
                                    <label>a carrier</label>
                                </div>
                                </div>
                                <div class="field">
                                <div class="ui radio checkbox">
                                    <input type="radio" name="radio" checked="checked"/>
                                    <label>a restaurant</label>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div id="form-message" class="ui attached message">
                        <i class="icon help"></i>
                        Already registered? Please login 
                        <Link to="/">
                        <a href="#"> here</a>.
					    </Link>
                    </div>
                    <button class="ui bottom attached fluid button" type="submit">Register</button>
                </form>
        </div>     
    );
}

export default Register;