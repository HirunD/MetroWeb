
const password = document.querySelector('#pass');
const visibility = document.querySelector('#invisible');
const admindiv = document.querySelector('#admin');
const fail = document.querySelector('#changetxt');
const load = document.querySelector('#loading');

visibility.style.display = "none";
load.style.display = "none";


password.addEventListener('submit', async(e) => {
    e.preventDefault();
    // await console.log(password.passw.value);
    if (password.passw.value == "8456") {
        console.log("sucess");
        visibility.style.display = "inline";
        admindiv.style.display = "none";
    }else{
        console.log("wrong");
        password.passw.value = '';
        fail.textContent = "Failed try again";
        fail.style.color = 'rgb(150, 0, 0)';
    }
  });
