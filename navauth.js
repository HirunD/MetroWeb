const section = document.getElementById('not-logged');
const submit = document.getElementById('logged');
const logoutbutton = document.getElementById('logout');


auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('logged_in');
      console.log(user.email);
      section.style.display = "none";
      submit.style.display = "inline";
      logoutbutton.style.display = "inline";
    } else {
      console.log('logged_out');
      console.log("no data");
      section.style.display = "inline-block";
      submit.style.display = "none";
      logoutbutton.style.display = "none";
    }
  });

  const logout = document.querySelector('#logout');

  logout.addEventListener('click', (e) =>{
    auth.signOut();}
  );
