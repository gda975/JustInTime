import { initializeApp } from 'firebase/app';
import {
    getDatabase,
    ref,
    child,
    onValue,
    push,
    update,
    remove,
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
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// GET APIs
function testData(cb) {
    let dbBool = false;

    const valueRef = ref(db, 'Posts');
    onValue(valueRef, (snapshot) => {
        if (snapshot.exists()) {
            dbBool = true;
            cb(dbBool + '');
        } else {
            dbBool = false;
            cb(dbBool + '');
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
                });
                callback(entries);
            } else {
                callback(entries);
            }
        });
    } catch (e) {
        console.log(e);
    }
}

function getPostNumber(category) {
    return new Promise(function (resolve, reject) {
        try {
            const pathRef = ref(db, 'Posts_number/' + category);
            let value;

            onValue(pathRef, (snapshot) => {
                if (snapshot.exists()) {
                    value = snapshot.val();
                    resolve(value);
                } else {
                    resolve(null);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
}

// POST APIs
async function writeData(
    author,
    content,
    resource,
    time,
    type,
    category,
    title
) {
    const db = getDatabase();

    //text post entry
    const text_post = {
        author: author,
        title: title,
        content: content,
        resource: false,
        time: time,
        type: type,
        category: category,
    };

    //retrieve key
    const newKey = push(child(ref(db, 'Posts'), 'Post')).key;

    const updates = {};
    updates['/Post' + newKey] = text_post;
    try {
        return await update(ref(db, 'Posts'), updates);
    } catch (error) {
        alert('Unauthorized Access!');
    }
}

// PUT APIS
function updateData(content, key, date, category) {
    const db = getDatabase();

    //retrieve post
    const path = 'Posts/' + key;

    const updates = {};
    updates['/content'] = content;
    updates['/time'] = date;
    updates['/category'] = category;
    update(ref(db, path), updates).catch((error) => {
        alert('Unauthorized Access!');
    });
    return '';
}

function updatePostNumber(category, number) {
    const db = getDatabase();

    //retrieve post
    const path = 'Posts_number';

    const updates = {};
    updates['/' + category] = number;
    return update(ref(db, path), updates);
}

// DELETE APIS
async function deleteData(key) {
    const db = getDatabase();

    //get path
    const path = 'Posts/' + key;

    try {
        return await remove(ref(db, path));
    } catch (error) {
        alert('Unauthorized Access!');
    }
}

export {
    writeData,
    testData,
    getData,
    updateData,
    deleteData,
    getPostNumber,
    updatePostNumber,
};
