const tile1 = document.querySelector('#ac1txt');
const tile2 = document.querySelector('#ac2txt');
const tile3 = document.querySelector('#ac3txt');
const tile4 = document.querySelector('#ac4txt');
// const tile5 = document.querySelector('#ac5txt');
const page = document.title;


console.log(page);

function renderTitle(doc){
  const Article_1_name = doc.data().Article_1.name;
  const Article_1_link = doc.data().Article_1.content;
  let tile1 = document.getElementById('ac1txt');


  tile1.setAttribute('data-id', doc.id);
    tile1.setAttribute('href' , "article.html?" + doc.data().Article_1.content);
  tile2.setAttribute('data-id', doc.id);
    tile2.setAttribute('href' , "article.html?" + doc.data().Article_1.content);
  tile3.setAttribute('data-id', doc.id);
    tile3.setAttribute('href' , "article.html?" + doc.data().Article_1.content);
  tile4.setAttribute('data-id', doc.id);
    tile4.setAttribute('href' , "article.html?" + doc.data().Article_1.content);
  // tile5.setAttribute('data-id', doc.id);
  //   tile5.setAttribute('href' , "article.html?" + doc.data().Article_1.content);
  // tile1.setAttribute("href",  "article.html?" + page);


  tile1.textContent = doc.data().Article_1.name;
  tile2.textContent = doc.data().Article_1.name;
  tile3.textContent = doc.data().Article_1.name;
  tile4.textContent = doc.data().Article_1.name;
  // tile5.textContent = doc.data().Article_1.name;
  
  tile1.onclick = setInterval(function() {
  const tile1 = doc.data().content;
});


}

//getting data
db.collection('MetroWeb').doc(page)
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