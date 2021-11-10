const form = document.querySelector('#submitform');

const setupIU = (user) => {
  if (user) {
    form.style.display = 'block';
  } else{
    form.style.display = 'none';
  }
}


//listen for auth status changes

auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('logged_in');
      setupIU(user);
    } else {
      console.log('logged_out');
      setupIU();
    }
  });
  
  
const logout = document.querySelector('#logout');

logout.addEventListener('click', (e) =>{
  auth.signOut();}
);
