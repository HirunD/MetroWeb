//listen for auth status changes

const massage = document.getElementById('loged_in');
const text = document.getElementById('text');

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('logged_in');
    console.log(user.email);
    massage.style.display = "block";
    logout.style.display = "none";
    text.textContent = 'logged in to';
  } else {
    console.log('logged_out');
    console.log("no data");
    massage.style.display = "none";
    logout.style.display = "block";
  }
});


const logout = document.querySelector('#log_in');

logout.addEventListener('click', (e) =>{
  auth.signOut();}
);



//sign up

const log_in = document.querySelector('#log_in');



log_in.addEventListener('submit',(e) =>{
        e.preventDefault();
    
        const email = log_in['signup_email'].value;
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

 

  

auth.onAuthStateChanged((user) => {
  if (user) {
      setTimeout(function () {
          window.location.href = "../../index.html"; //will redirect to your blog page (an ex: blog.html)
       }, 5000) //will call the function after 2 secs.
  }
});