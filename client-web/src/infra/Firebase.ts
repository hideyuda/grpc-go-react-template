import * as firebase from "firebase/app";
import * as firebaseAuth from "firebase/auth";
import * as firebaseStorage from "firebase/storage";
import * as firebaseFirestore from "firebase/firestore";

export default class Firebase {
  private static _instance: Firebase;
  private _auth: firebaseAuth.Auth;
  private _storage: firebaseStorage.FirebaseStorage;
  private _firestore: firebaseFirestore.Firestore;

  private constructor() {
    if (!firebase.getApps().length) {
      firebase.initializeApp({
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
        projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID,
      });
    }
    this._auth = firebaseAuth.getAuth();
    this._storage = firebaseStorage.getStorage();
    this._firestore = firebaseFirestore.getFirestore();
  }

  public static get instance(): Firebase {
    if (!this._instance) {
      this._instance = new Firebase();
    }
    return this._instance;
  }

  public get auth(): firebaseAuth.Auth {
    if (this._auth) {
      return this._auth;
    } else {
      this._auth = firebaseAuth.getAuth();
      return this._auth;
    }
  }

  public get storage(): firebaseStorage.FirebaseStorage {
    if (this._storage) {
      return this._storage;
    } else {
      this._storage = firebaseStorage.getStorage();
      return this._storage;
    }
  }

  public get firestore(): firebaseFirestore.Firestore {
    if (this._firestore) {
      return this._firestore;
    } else {
      this._firestore = firebaseFirestore.getFirestore();
      return this._firestore;
    }
  }
}

// const auth = firebase.auth();
// export default auth

// export const auth = Firebase.instance.auth;
