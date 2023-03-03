import { useState } from 'react';
import handleLogin from './LoginFirebase';

export default function LoginPage(props) {
    let [newUser, setNewUser] = useState(false);
    let [invalidText, setText] = useState('');

    function getSubmit(e) {
        e.preventDefault();
        if (!newUser) {
            handleLogin(
                newUser,
                e.target[0].value,
                e.target[1].value,
                props.callback,
                setText
            );
        } else {
            if (e.target[1].value !== e.target[2].value) {
                alert('Unmatched passwords!');
                return;
            }
            handleLogin(
                newUser,
                e.target[0].value,
                e.target[1].value,
                props.callback,
                setText
            );
        }
        return false;
    }

    function handleNew(e) {
        setNewUser(!newUser);
    }
    return (
        <div className="login-flex-container">
            <div className="login-container">
                <h1 className="login">UNC Center for Nursing Excellence</h1>
                <div id="firebaseui-auth-container"></div>
                <h2 id="loader" className="login">
                    Just In Time Application
                </h2>

                {newUser ? <h2>Create Account</h2> : <h2>Sign In</h2>}
                <form onSubmit={getSubmit}>
                    <div className="login-input-container">
                        <label>Email</label>
                        <input
                            className="login-input"
                            type="text"
                            minLength="10"
                            required
                        />
                    </div>
                    <div className="login-input-container">
                        <label>Password</label>
                        <input
                            className="login-input"
                            type="password"
                            minLength="7"
                            required
                        />
                    </div>
                    {newUser ? (
                        <div className="login-input-container">
                            <label>Confirm Password</label>
                            <input
                                className="login-input"
                                type="password"
                                minLength="7"
                                required
                            />
                        </div>
                    ) : null}
                    <br></br>
                    <button type="button" onClick={handleNew}>
                        {newUser ? 'Cancel' : 'Create Account'}
                    </button>
                    <button type="submit">
                        {newUser ? 'Sign Up' : 'Login'}
                    </button>
                </form>
                <h2>{invalidText}</h2>
            </div>
        </div>
    );
}
