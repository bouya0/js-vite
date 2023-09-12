import "./styles/main.scss";
// Splide
import "@splidejs/splide/css";
import "@splidejs/splide/css/skyblue";
import "@splidejs/splide/css/sea-green";
import "@splidejs/splide/css/core";

import Splide from "@splidejs/splide";
import ActiveNav from './activeNav';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5aI2Yfohw8YTurPjOgCVBGOzqrS4yPwA",
  authDomain: "my-vite-project-e94e2.firebaseapp.com",
  projectId: "my-vite-project-e94e2",
  storageBucket: "my-vite-project-e94e2.appspot.com",
  messagingSenderId: "124177531472",
  appId: "1:124177531472:web:8927c5c32d3f25e4b40755",
  measurementId: "G-Y5PNQB1FHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//Firestoreの初期化
const db = getFirestore(app);


//もしjs-navがDOMにあればActiveNavインスタンスを作成
//コンストラクタにnavElementキーの値であるjs-nav（ID）を渡す
if(document.getElementById('js-nav') !== null) {
  new ActiveNav({
    navElement: 'js-nav'
  })
}

if(document.getElementsByClassName('splide')[0]){
	new Splide( '.splide' ).mount();
}

console.log(app);
console.log(analytics);
console.log(db);