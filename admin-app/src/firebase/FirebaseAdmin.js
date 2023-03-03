import * as firebaseAdmin from 'firebase-admin';

const serviceAccount = require('./service-account.json');
if (firebaseAdmin.apps.length == 0) {
    firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(serviceAccount),
    });
}

export { firebaseAdmin };
