import { initializeApp } from 'firebase/app';
import {
    getDatabase,
    ref,
    onValue,
    query,
    orderByChild,
    equalTo,
} from 'firebase/database';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyA41mHLaNc1C9Cw-B07AYVuI_rh8f3Cx7g',
    authDomain: 'just-in-time-5698c.firebaseapp.com',
    databaseURL: 'https://just-in-time-5698c-default-rtdb.firebaseio.com',
    projectId: 'just-in-time-5698c',
    storageBucket: 'just-in-time-5698c.appspot.com',
    messagingSenderId: '162813204267',
    appId: '1:162813204267:web:9bc68e1ed496044261976e',
    measurementId: 'G-W8WNCJN1F6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const dbRef = ref(getDatabase());

function getData(category) {
    const pathRef = ref(db, 'Posts');

    let valueRef;
    if (category == 'ALL') valueRef = query(pathRef, orderByChild('time'));
    else valueRef = query(pathRef, orderByChild('category'), equalTo(category));

    let entries = [];
    // console.log(valueRef);
    onValue(valueRef, (snapshot) => {
        // console.log(category);
        if (snapshot.exists()) {
            snapshot.forEach((child) => {
                const data = child.val();
                entries.push(data);
            });
            // cb(entries.reverse());
        } else {
            // cb(null);
            // console.log('No data');
        }
    });
    return entries;
}

export { getData };
