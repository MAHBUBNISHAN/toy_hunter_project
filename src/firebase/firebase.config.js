// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK7bRUfkT29gWDPdRR1HAuTOUzHWRVGts",
  authDomain: "toy-hunter-project.firebaseapp.com",
  projectId: "toy-hunter-project",
  storageBucket: "toy-hunter-project.appspot.com",
  messagingSenderId: "564539085934",
  appId: "1:564539085934:web:457d9861b6fca69cd7827f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;