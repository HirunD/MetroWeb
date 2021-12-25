const tile1 = document.querySelectorAll('#ac1txt');
const tile2 = document.querySelectorAll('#ac2txt');
const tile3 = document.querySelectorAll('#ac3txt');
const tile4 = document.querySelectorAll('#ac4txt');
// const tile5 = document.querySelector('#ac5txt');
const page = document.title;


console.log(page);

function renderTitle(doc){
  // const Article_1_name = doc.data().Article_1.name;
  // const Article_1_link = doc.data().Article_1.content;
  // let tile1 = document.getElementById('ac1txt');
  const tile1 = document.querySelectorAll('.ac1txt');
  const tile2 = document.querySelectorAll('.ac2txt');
  const tile3 = document.querySelectorAll('.ac3txt');
  const tile4 = document.querySelectorAll('.ac4txt');


  // tile1.setAttribute('data-id', doc.id);
  //   tile1.setAttribute('href' , "article.html?" + doc.data().article_1.link);
  // tile2.setAttribute('data-id', doc.id);
  //   tile2.setAttribute('href' , "article.html?" + doc.data().article_2.link);
  // tile3.setAttribute('data-id', doc.id);
  //   tile3.setAttribute('href' , "article.html?" + doc.data().article_3.link);
  // tile4.setAttribute('data-id', doc.id);
  //   tile4.setAttribute('href' , "article.html?" + doc.data().article_4.link);
  // tile5.setAttribute('data-id', doc.id);
  //   tile5.setAttribute('href' , "article.html?" + doc.data().Article_1.content);
  // tile1.setAttribute("href",  "article.html?" + page);


  tile1.textContent = doc.data().article_1.name;
  tile2.textContent = doc.data().article_2.name;
  tile3.textContent = doc.data().article_3.name;
  tile4.textContent = doc.data().article_4.name;
  // tile5.textContent = doc.data().Article_1.name;
  
  tile1.onclick = setInterval(function() {
  const tile1 = doc.data().content;
});


}

//getting data
db.collection('MetroWeb').doc('Top_Articles')
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