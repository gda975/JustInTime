import { initializeApp } from 'firebase/app';
import {
    getDatabase, ref, get, child, set, onValue, push, update, remove, query, orderByChild, equalTo, off
} from 'firebase/database';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: 'AIzaSyA41mHLaNc1C9Cw-B07AYVuI_rh8f3Cx7g',
    authDomain: 'just-in-time-5698c.firebaseapp.com',
    databaseURL: 'https://just-in-time-5698c-default-rtdb.firebaseio.com',
    projectId: 'just-in-time-5698c',
    storageBucket: 'just-in-time-5698c.appspot.com',
    messagingSenderId: '162813204267',
    appId: '1:162813204267:web:0234c4cc89dbfe1a61976e',
    measurementId: 'G-QQ6S8Z137D',
    databaseURL: 'https://just-in-time-5698c-default-rtdb.firebaseio.com',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const dbRef = ref(getDatabase());


//testing login 
// Initialize Firebase Authentication and get a reference to the service
function logIn(callback) {
    /* const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
            callback(true);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        }); */
}

// GET APIs
function testData(cb) {
    let dbBool = false;
    // get method for read data once
    /* get(child(dbRef, 'test')).then((snapshot) => {
    if (snapshot.exists()) {
      dbBool = true;
      console.log(snapshot.val());
    } else {
      dbBool = false;
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  }); */

    const valueRef = ref(db, 'Posts');
    onValue(valueRef, (snapshot) => {
        if (snapshot.exists()) {
            dbBool = true;
            cb(dbBool + '');
            console.log(snapshot.val());
        } else {
            dbBool = false;
            cb(dbBool + '');
            console.log('No data');
        }
    });
}

function getData(callback) {
    try {
        const pathRef = ref(db, 'Posts');
        let entries = [];
        onValue(pathRef, (snapshot) => {
            if (snapshot.exists()) {
                entries = [];
                snapshot.forEach((child) => {
                    const data = [child.key, child.val()];
                    entries.push(data);
                })
                callback(entries);
            } else {
                callback(entries);
            }
        });
    } catch (e) {
        console.log(e);
    }
}

/* let valueRef;
    if (category == "ALL") valueRef = query(pathRef, orderByChild('time'));
    else valueRef = query(pathRef, orderByChild('category'), equalTo(category));
*/


function getPostNumber(category) {
    return new Promise(function (resolve, reject) {
        try {
            const pathRef = ref(db, 'Posts_number' + '/' + category);
            let value;

            onValue(pathRef, (snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                    value = snapshot.val();
                    resolve(value);
                } else {
                    resolve(null);
                }
            })
        }
        catch (e) {
            reject(e);
        }
    })

}

// POST APIs
function writeData(author, content, resource, time, type, category, title) {
    const db = getDatabase();

    //text post entry
    const text_post = {
        author: author,
        title: title,
        content: content,
        resource: false,
        time: time,
        type: type,
        category: category
    };

    //retrieve key
    const newKey = push(child(ref(db, 'Posts'), 'Post')).key;

    const updates = {};
    updates['/Post' + newKey] = text_post;
    return update(ref(db, 'Posts'), updates).catch((error) => { alert("Unathorized Access!") });
}

// PUT APIS
function updateData(content, key, date, category) {
    const db = getDatabase();

    //retrieve post
    const path = 'Posts/' + key;
    const post = ref(db, path);


    const updates = {};
    updates['/content'] = content;
    updates['/time'] = date;
    updates['/category'] = category;
    update(ref(db, path), updates).catch(error => { alert("Unathorized Access!") });
    return "";
}

function updatePostNumber(category, number) {
    const db = getDatabase();

    //retrieve post
    const path = 'Posts_number';
    const post = ref(db, path);

    const updates = {};
    updates['/' + category] = number;
    return update(ref(db, path), updates);
}

// DELETE APIS
function deleteData(key) {
    const db = getDatabase();

    //get path
    const path = 'Posts/' + key;

    return remove(ref(db, path)).catch(error => { alert("Unathorized Access!") });
}

export { writeData, testData, getData, updateData, deleteData, getPostNumber, updatePostNumber, logIn };
