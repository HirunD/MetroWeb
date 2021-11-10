let url = window.location.href;
let page = url.split("?")[1].split('%20').join(' ');

//getting data
db.collection('MetroWeb')
.doc("flLummWIxnLysRZjk9hy")
.where("c_name", "==", "Tech")
.get()
.then(function(doc) {
  if (doc.exists) {
    console.log("Document data:", doc.data());
    // renderTitle(doc);
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}).catch(function(error) {
  console.log("Error getting document:", error);
});

