const tile1 = document.querySelector('#ac1txt');
const page = document.title;

console.log(page);

function renderTitle(doc){
  let tile1 = document.getElementById('ac1txt');


  tile1.setAttribute('data-id', doc.id);
  // tile1.setAttribute("href",  "article.html?" + page);


  tile1.textContent = doc.data().content;
  
  tile1.onclick = setInterval(function() {
  const tile1 = doc.data().content;
});


}

//getting data
db.collection('MetroWeb').doc("Technology")
.get()
.then(function(doc) {
  if (doc.exists) {
    console.log("Document data:", doc.data());
    renderTitle(doc);
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}).catch(function(error) {
  console.log("Error getting document:", error);
});