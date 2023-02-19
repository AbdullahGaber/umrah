
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyDrEwcuqfOt_NoojmiIX0ioqqSmXA9XAMA",
    authDomain: "umrah-elbadal.firebaseapp.com",
    projectId: "umrah-elbadal",
    storageBucket: "umrah-elbadal.appspot.com",
    messagingSenderId: "180045691226",
    appId: "1:180045691226:web:0d6091ae40443089001b63",
    measurementId: "G-7FP2L49TRC"

});

const messaging = firebase.messaging();



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getMessaging } from 'firebase/messaging/sw';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDrEwcuqfOt_NoojmiIX0ioqqSmXA9XAMA",
//     authDomain: "umrah-elbadal.firebaseapp.com",
//     projectId: "umrah-elbadal",
//     storageBucket: "umrah-elbadal.appspot.com",
//     messagingSenderId: "180045691226",
//     appId: "1:180045691226:web:0d6091ae40443089001b63",
//     measurementId: "G-7FP2L49TRC"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const messaging = getMessaging(app);