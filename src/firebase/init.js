import firebaseConfig from './config'
import { initializeApp } from 'firebase/app';
import { getFirestore} from "firebase/firestore"


// initialisation de firebase
export const instanceFirebase = initializeApp(firebaseConfig);

// initialisation de firestore
export const bdFirestore = getFirestore();
