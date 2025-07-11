// Firebase configuration for login and signup
const loginFirebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "loginform-81d1a",
    storageBucket: "loginform-81d1a.appspot.com",
    messagingSenderId: "1017809985435",
    appId: "1:1017809985435:web:6f4406d1f7819dbcae0b3e"
};

const signupFirebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "signupform-e99f4",
    storageBucket: "signupform-e99f4.appspot.com",
    messagingSenderId: "732176707214",
    appId: "1:732176707214:web:4e0120f96044a08fde23df"
};

// Initialize Firebase for login
const loginFirebaseApp = firebase.initializeApp(loginFirebaseConfig, 'login');

// Initialize Firebase for signup
const signupFirebaseApp = firebase.initializeApp(signupFirebaseConfig, 'signup');

// Reference for database
const loginDatabase = loginFirebaseApp.database().ref('LoginForm');
const signupDatabase = signupFirebaseApp.database().ref('SignupForm');

// Function to save messages for login
const saveLoginMessages = (name, password) => {
    var newLoginForm = loginDatabase.push();
    newLoginForm.set({
        name: name,
        password: password,
    });
};

// Function to save messages for signup
const saveSignupMessages = (name, emailid, password) => {
    var newSignupForm = signupDatabase.push();
    newSignupForm.set({
        name: name,
        emailid: emailid,
        password: password,
    });
};

// Function to get element value by id
const getElementVal = (id) => {
    return document.getElementById(id).value;
};
