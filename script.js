// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABLVwJH3mYZO55eHmHmZyQsThENFUjJwc",
  authDomain: "super-52191.firebaseapp.com",
  projectId: "super-52191",
  storageBucket: "super-52191.appspot.com",
  messagingSenderId: "259209449149",
  appId: "1:2592094491 49:web:d6bcacd2dba3405446f1d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GithubAuthProvider();
const gitHUB = new GoogleAuthProvider();
const signInG = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      if (result) {
        sendEmailVerification(auth.currentUser).then(() => {
          console.log("verification sent");
        });
      }
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      console.log(user);
      window.location.href = "dashboard.html";

      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });
};

const signInF = () => {
  signInWithPopup(auth, gitHUB)
    .then((result) => {
      const user = result.user;
      console.log(user);

      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.log(error);
    });
};
window.signInF = signInF;

window.signInG = signInG;

const signinEmail = () => {
  let email = maily.value;
  let password = Passpap.value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.log(error);
    });
};

window.signinEmail = signinEmail;

const out = () => {
  window.location.href = "createAccount.html";
};
window.out = out;

const creaty = () => {
  let nam = yourName.value;
  let email = yourEmail.value;
  let password = yourPass.value;

  createUserWithEmailAndPassword(auth, email, password, nam)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.log(error);
    });
};

window.creaty = creaty;
