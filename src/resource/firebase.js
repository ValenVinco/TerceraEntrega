import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDAt-aQlvQu-bfMloS8LJDg6JJ8xPwJqGQ",
    authDomain: "e-commerce-5b0ba.firebaseapp.com",
    projectId: "e-commerce-5b0ba",
    storageBucket: "e-commerce-5b0ba.appspot.com",
    messagingSenderId: "1052804615417",
    appId: "1:1052804615417:web:cad2fb37d59a6cfa4da628",
    measurementId: "G-5ZTCBYGZXK"
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);