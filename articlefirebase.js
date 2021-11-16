const title = document.querySelector('#bannert');
const byname = document.querySelector('#byname');
const para = document.querySelector('#articlepara');
const tag = document.querySelector('#tag');
const list = document.querySelector('#li');
const form = document.querySelector('#formcontext');
const date = document.querySelector('#date');
// const page = document.title;
let url = window.location.href;
let page = url.split("?")[1].split('%20').join(' ');


window.document.title = page;

console.log(page);

// function myFunction() {
//         }
// window.onload = myFunction;



function renderTitle(doc){
  let title = document.getElementById('bannert');
  let byname = document.getElementById('byname');
  let para = document.getElementById('articlepara');
  let li = document.createElement('li');
  let tag = document.createElement('li');
  let date = document.createElement('p');


  title.setAttribute('data-id', doc.id);
  byname.setAttribute('data-id', doc.id);
  para.setAttribute('data-id', doc.id);
  tag.setAttribute('data-id', doc.id);
  date.setAttribute('data-id', doc.id);


  title.textContent = doc.data().category.article.a_name;
  byname.textContent = doc.data().category.article.a_posted_by;
  para.textContent = doc.data().category.article.a_content;
  tag.textContent = doc.data().category.article.a_tags;
  byname.textContent = doc.data().category.article.a_posted_by;
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

