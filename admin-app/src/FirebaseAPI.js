import { initializeApp } from 'firebase/app';
import {
    getDatabase, ref, get, child, set, onValue, push, update, remove, query, orderByChild
} from 'firebase/database';

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

function getData(cb) {
    const pathRef = ref(db, 'Posts');
    const valueRef = query(pathRef, orderByChild('time'));

    let entries = [];
    console.log(valueRef)
    onValue(valueRef, (snapshot) => {
        if (snapshot.exists()) {
            entries = [];
            //console.log(Object.entries(snapshot.val())  )
            snapshot.forEach((child) => {
                const data = [child.key, child.val()];
                entries.push(data);
            })
            cb(entries.reverse());
        } else {
            cb(null);
            console.log('No data');
        }
    });
}

// POST APIs
function writeData(author, content, resource, time, type, cagetory) {
    const db = getDatabase();

    //text post entry
    const text_post = {
        author: author,
        content: content,
        resource: false,
        time: time,
        type: type,
        cagetory: cagetory
    };

    //retrieve key
    const newKey = push(child(ref(db, 'Posts'), 'Post')).key;

    const updates = {};
    updates['/Post' + newKey] = text_post;
    return update(ref(db, 'Posts'), updates);
}

// PUT APIS
function updateData(content, key, date) {
    const db = getDatabase();

    //retrieve post
    const path = 'Posts/Post-' + key;
    const post = ref(db, path);


    const updates = {};
    updates['/content'] = content;
    updates['/time'] = date;
    return update(ref(db, path), updates);
}

// DELETE APIS
function deleteData(key) {
    const db = getDatabase();

    //get path
    const path = 'Posts/' + key;

    return remove(ref(db, path));
}

export { writeData, testData, getData, updateData, deleteData };
