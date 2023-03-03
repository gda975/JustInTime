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
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
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
