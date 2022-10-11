import { Button, TextField } from "@mui/material";
import React from "react";

import "../Styles/Register.css";

const LoginForm = () => {
    return (
        <div className="loginBox">
            <h1>Login</h1>


            <form className="form" >
                <div className="form-group">
               
                <div className="input">
                    <TextField
                      className="form-control"
                      name="email"
                      placeholder="email"
                      
                      />
                </div>
                <div className="input">
                    <TextField
                      className="form-control"
                      
                      name="password"
                      placeholder="password"
                      
                      />
                </div>

          

                <br />
                <div className="button">
                <Button style={{color: "white"}}   className="signUpSubmit"   label="submit">Submit</Button>
                    </div>
               
                    </div>
            </form>
           
        </div>
    );
};

export default LoginForm;
