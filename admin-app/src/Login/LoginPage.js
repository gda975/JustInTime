import { useState } from "react";
import handleLogin from "./LoginFirebase";

export default function LoginPage(props) {
    let [newUser, setNewUser] = useState(false);


    function getSubmit(e) {
        e.preventDefault();
        console.log(e.target[0].value)
        console.log(e.target[1].value)
        handleLogin(newUser, e.target[0].value, e.target[1].value, props.callback);
        return false;
    }

    function handleNew(e) {
        setNewUser(!newUser);
    }
    return (
        <div>
            <h1>Welcome to Center for Nursing Excellence App</h1>
            <div id="firebaseui-auth-container"></div>
            <div id="loader">Sign in to continue Admin!</div>

            <form onSubmit={getSubmit}>
                <label>User Name </label>
                <input type="text" minlength="3" required></input><br></br>
                <label>Password </label>
                <input type="password" minlength="3" required></input><br></br>
                <button type="submit">Login</button>
                <button type="button" onClick={handleNew}>Sign in</button>
            </form>

            <h1>{newUser + ""}</h1>
        </div>
    )
}