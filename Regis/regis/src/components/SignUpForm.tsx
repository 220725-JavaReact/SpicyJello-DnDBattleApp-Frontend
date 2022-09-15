import React from "react";
import './style.css';



export class SignUp extends React.Component {

    handleChange = (event : any) => {}
    handleSubmit = (event : any) => {}

    render() {
        return (
            <div className='wrapper'>
                <div className='form-wrapper'>
                    <h2>Sign Up</h2>
                    <form onSubmit={this.handleSubmit} noValidate >
                        <div className='fullName'>
                            <label htmlFor="fullName">Name</label>
                            <input type='text' name='fullName' onChange={this.handleChange} />
                        </div>
                        <div className='email'>
                            <label htmlFor="email">Email</label>
                            <input type='email' name='email' onChange={this.handleChange} />
                        </div>
                        <div className="username">
                            <label htmlFor="username">Username</label>
                            <input type='username' name='username' onChange={this.handleChange} />
                        </div>
                        <div className='password'>
                            <label htmlFor="password">Password</label>
                            <input type='password' name='password' onChange={this.handleChange} />
                        </div>
                        <div className='submit'>
                            <button>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

