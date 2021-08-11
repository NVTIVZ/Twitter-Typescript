import firebase from 'firebase';

const {
  REACT_APP_APIKEY,
  REACT_APP_authDomain,
  REACT_APP_projectId,
  REACT_APP_storageBucket,
  REACT_APP_messagingSenderId,
  REACT_APP_appId,
  REACT_APP_measurementId,
} = process.env;
const firebaseConfig = {
  apiKey: REACT_APP_APIKEY,
  authDomain: REACT_APP_authDomain,
  projectId: REACT_APP_projectId,
  storageBucket: REACT_APP_storageBucket,
  messagingSenderId: REACT_APP_messagingSenderId,
  appId: REACT_APP_appId,
  measurementId: REACT_APP_measurementId,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export async function doesUsernameExists(username: string) {
  const result = await db
    .collection('users')
    .where('username', '==', username)
    .get();
  return result.docs.map((user) => user.data().length > 0);
}

export { auth, provider, storage };
export default db;
