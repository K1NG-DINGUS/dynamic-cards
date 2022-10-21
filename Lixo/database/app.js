  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAqSZSyRz4VrZuz_DlUi-LtPQ2VsEDE6-A",
    authDomain: "prevwiki.firebaseapp.com",
    projectId: "prevwiki",
    storageBucket: "prevwiki.appspot.com",
    messagingSenderId: "696046065747",
    appId: "1:696046065747:web:443d92089b982aec740ea6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default app;
