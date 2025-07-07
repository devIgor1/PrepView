import { initializeApp, getApp, getApps } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCXLVvM89GXKFIKku1K345vcWDxAosQk3Y",
  authDomain: "prepview-e4801.firebaseapp.com",
  projectId: "prepview-e4801",
  storageBucket: "prepview-e4801.firebasestorage.app",
  messagingSenderId: "860384463813",
  appId: "1:860384463813:web:80a9fef7ad1bbe063119ac",
  measurementId: "G-ZZMYNKZZ6X",
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth(app)
export const db = getFirestore(app)
