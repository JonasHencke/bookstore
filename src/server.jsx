import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore"
import API_KEY from "../config";


const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "bookstore-d7fa4.firebaseapp.com",
    projectId: "bookstore-d7fa4",
    storageBucket: "bookstore-d7fa4.appspot.com",
    messagingSenderId: "285427020487",
    appId: "1:285427020487:web:f2ccf6f565603c0e3c04e2",
    measurementId: "G-309NT664LF"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const booksCollectionRef = collection(db, "books")

export async function getBooks() {
    const snapshot = await getDocs(booksCollectionRef)
    const books = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return books
}