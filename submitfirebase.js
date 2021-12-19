const title = document.querySelector('#bannert');
const byname = document.querySelector('#byname');
const para = document.querySelector('#articlepara');
const tag = document.querySelector('#tag');
const list = document.querySelector('#li');
const form = document.querySelector('#formcontext');
const date = document.querySelector('#date');
const massage = document.getElementById('responserec');
const container = document.getElementById('submitform');
const back = document.getElementById('backdrop');



container.style.height = "100%";
form.style.display = "block";
massage.style.display = "none";



firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    console.log(uid);
    getDetails(uid);
    // ...
  } else {
    // User is signed out
    console.log("nothing");
    // ...
  }
});

var creator = "";

function getDetails(user) {
  db.collection('users').doc(user)
.get()
.then(function(doc) {
  if (doc.exists) {
    console.log("Document data:", doc.data());
    creator = doc.data().Userinfo.Username;
    console.log(creator);
    // renderTitle(doc);
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}).catch(function(error) {
  console.log("Error getting document:", error);
});
}



form.addEventListener('submit', async(e) => {
    e.preventDefault();
    // window.location('index.html');
    await db.collection('MetroWeb').doc(form.title.value).set({
      category :{
        article:{
        a_name: form.title.value,
        a_posted_by: creator,
        a_content: form.context.value,
        a_tags: form.tag.value,
        a_date: form.date.value
        },
        c_name : form.category.value
      },
    });
    form.title.value = '';
    form.name.value = '';
    form.context.value = '';
    form.tag.value = '';
    form.date.value = ''
    form.category.value = '';
    form.style.display = "none";
    back.style.height = "300px";
    massage.style.display = "block";
    // window.location.href = "/index.html"; 
    setTimeout(function () {
      window.location.href = "../../index.html"; //will redirect to your blog page (an ex: blog.html)
   }, 5000) //will call the function after 2 secs.
  });

  // function submitdata(){
  //   let a_name = document.getElementById("form_a_name").value;
  //   db.collection('MetroWeb').doc(form.title.value).set({
  //     category :{
  //       article:{
  //       a_name: form.title.value,
  //       a_posted_by: form.name.value,
  //       a_content: form.context.value,
  //       a_tags: form.tag.value,
  //       a_date: form.date.value
  //       },
  //       c_name : form.category.value
  //     },
  //   });
  // }