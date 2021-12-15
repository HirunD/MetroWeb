const form = document.getElementById("get_search");
let url = window.location.href;
const searchitem = url.split("=")[1].split('+').join(' ');

form.addEventListener("submit", (e) => {
  // e.window.location.href = "../../search.html?", form.search.value;
  console.log("../../search.html?", form.search.value);
});

const button = document.getElementById("click");

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    console.log(uid);
    gettingArray(uid);
    // ...
  } else {
    // User is signed out
    console.log("nothing");
    // ...
  }
});

function gettingArray(user) {
  db.collection("users")
    .doc(user)
    .get()
    .then(function (doc) {
      if (doc.exists) {
        console.log(doc.data().lateSearch);
        settingData(doc, user);
      } else {
        console.log("No such document!");
      }
    });
}
function settingData(doc, user) {
db.collection("users")
.doc(user)
.update({
    lateSearch: firebase.firestore.FieldValue.arrayUnion(searchitem)
});
}