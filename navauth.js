const section = document.getElementById('not-logged');
const submit = document.getElementById('logged');


auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('logged_in');
      console.log(user.email);
      section.style.display = "none";
      submit.style.display = "inline";
    } else {
      console.log('logged_out');
      console.log("no data");
      section.style.display = "block";
      submit.style.display = "none";
    }
  });