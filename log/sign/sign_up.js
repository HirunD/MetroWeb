//sign up

const signupform = document.querySelector('#signup');

signupform.addEventListener('submit',(e) =>{
        e.preventDefault();
    
        const email = signupform['signup_email'].value;
        const pasword = signupform['signup_password'].value;
    
        //sign up user
        auth.createUserWithEmailAndPassword(email, pasword)
  .then((cred) => {
    db.collection('users').doc(cred.user.uid).set({
      name: signupform['name'].value
    })
    // Signed in 
    const user = cred.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
});