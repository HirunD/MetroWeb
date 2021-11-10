//listen for auth status changes

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('logged_in');
    console.log(user.email);
  } else {
    console.log('logged_out');
    console.log("no data");
  }
});


const logout = document.querySelector('#logout');

logout.addEventListener('click', (e) =>{
  auth.signOut();}
);



//sign up

const log_in = document.querySelector('#log_in');



log_in.addEventListener('submit',(e) =>{
        e.preventDefault();
    
        const email = log_in['email'].value;
        const pasword = log_in['password'].value;
    
        //sign up user
        auth.signInWithEmailAndPassword(email, pasword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(userCredential);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
});