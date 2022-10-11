import { Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import "../Styles/Register.css";

const SignUpForm = () => {
    return (
        <div className="loginBox">
            <h1>Sign Up</h1>


            <form className="form" >
                <div className="form-group">
                <div className="input">

                    <TextField
                      className="form-control"
                      name="name"
                      placeholder="name"
                      
                      />
                </div>
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

                <div className="input">
                    <TextField
                    className="form-control"
                    
                    name="cpassword"
                    placeholder="confirm password"
                    />
                </div>

                <br />
                <div className="button">
                <Button style={{color: "white"}}   className="signUpSubmit"   label="submit">Submit</Button>
                    </div>
               
                    </div>
            </form>
            <p>
                Aleady have an account? <br />
                <Link to="/login">Log in here</Link>
            </p>
        </div>
    );
};

export default SignUpForm;
