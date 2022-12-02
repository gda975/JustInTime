import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export default function handleLogin(boolean, email, password, callback, setState) {
    if (email == null || email == "") {
        throw "Invalid Login"
    }
    const auth = getAuth();
    if (boolean) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                callback(true);
                alert(user);
                // ...
            })
            .catch((error) => {
                console.log(error.code);
                try {
                    handleErrorCode(error.code, setState)
                } catch (e) {
                    alert(e);
                }
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    } else {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                callback(true);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                try {
                    handleErrorCode(error.code, setState)
                } catch (e) {
                    alert(e);
                }
                
            });
    }


}

function handleErrorCode(code, callback) {
    if (code == null || code == "") {
        throw "Invalid error code"
    }
    switch (code) {
        case "auth/email-already-in-use":
            callback("Email already registed, log in instead!");
            break;
        case "auth/invalid-email":
            callback("Invalid Email!");
            break;
        default:
            break;
    }
}