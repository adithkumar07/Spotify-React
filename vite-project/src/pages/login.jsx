import React from 'react'
import './login.css'
const login = () => {
    return (

        <div class="container1">
            <h2 class="text-center">Login</h2>
            <form>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter email" required />
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter password" required />
                </div>
                <div class="form-group">
                    <label>
                        <input type="checkbox" name="show_password" value="true" /> Show Password
                    </label>
                </div>
                <div class="form-group">
                    <input type="submit" value="Sign In" />
                </div>
            </form>
            <p class="text-center">
                <a href="#">Forgot <span>Username / Password</span>? </a> <br /><a href="#">Don't have an account?<span> Sign up</span> </a>
            </p>
        </div>
    )
}

export default login