import React from "react";
import './style.css';



function SignUp() {

    const handleChange = (event : any) => {}
    const handleSubmit = (event : any) => {}

    
        return (
            <div className='wrapper'>
                <div className='form-wrapper'>
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit} noValidate >
                        <div className='fullName'>
                            <label htmlFor="fullName">Name</label>
                            <input type='text' name='fullName' onChange={handleChange} />
                        </div>
                        <div className='email'>
                            <label htmlFor="email">Email</label>
                            <input type='email' name='email' onChange={handleChange} />
                        </div>
                        <div className="username">
                            <label htmlFor="username">Username</label>
                            <input type='username' name='username' onChange={handleChange} />
                        </div>
                        <div className='password'>
                            <label htmlFor="password">Password</label>
                            <input type='password' name='password' onChange={handleChange} />
                        </div>
                        <div className='submit'>
                            <button>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        
        );
        
    
}

export default SignUp;

