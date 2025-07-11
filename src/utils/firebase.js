// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAMUuN08zxKw4BAdRXreMHe-agTaEtQ54s',
  authDomain: 'netflixgpt-43681.firebaseapp.com',
  projectId: 'netflixgpt-43681',
  storageBucket: 'netflixgpt-43681.firebasestorage.app',
  messagingSenderId: '317224273451',
  appId: '1:317224273451:web:8729ecfb121ea40bf2cc6e',
  measurementId: 'G-BFJDVGJQQC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
