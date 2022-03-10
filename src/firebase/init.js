import firebaseConfig from './config'
import { initializeApp } from 'firebase/app';
import { getFirestore} from "firebase/firestore"
import { GoogleAuthProvider } from '@firebase/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// initialisation de firebase *important d'avoir ça en 1er*
export const instanceFirebase = initializeApp(firebaseConfig);

// Initialiser Firebase Authentication
export const authFirebase = getAuth();

// Initialiser l'authentification fédérée Google
export const authGoogle = new GoogleAuthProvider();

// initialisation de firestore
export const bdFirestore = getFirestore();
