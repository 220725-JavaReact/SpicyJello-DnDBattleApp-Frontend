import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

    const handleChange = (event: any) => { }
    const handleSubmit = (event: any) => { }



    // JSX code for login form
    return (
        <div className="wrapper">
            <div className='form-wrapper'>
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="fullName">
                        <label htmlFor="username">Username </label>
                        <input type="text" name="username" onChange={handleChange} />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password </label>
                        <input type="password" name="pass" onChange={handleChange} />
                    </div>
                    <div className="submit">
                        <button>Log in</button>
                        <Link to="/signup"><button>Sign Up</button></Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;