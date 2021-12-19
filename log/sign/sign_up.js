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
     Userinfo : { 
       name: signupform['name'].value,
       Username : signupform['uname'].value,
      }
    })
    signupform.name.value = '';
    signupform.signup_email.value = '';
    signupform.signup_password.value = '';
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


auth.onAuthStateChanged((user) => {
  if (user) {
      setTimeout(function () {
          window.location.href = "../../index.html"; //will redirect to your blog page (an ex: blog.html)
       }, 5000) //will call the function after 2 secs.
  }
});