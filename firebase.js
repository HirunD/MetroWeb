const title = document.querySelector('#bannert');
const byname = document.querySelector('#byname');
const para = document.querySelector('#articlepara');
const tag = document.querySelector('#tag');
const list = document.querySelector('#li');
const form = document.querySelector('#formcontext');
const date = document.querySelector('#date');

function renderTitle(doc){
  let title = document.getElementById('bannert');
  let byname = document.getElementById('byname');
  let para = document.getElementById('articlepara');
  // let li = document.createElement('li');
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
  tag.textContent = doc.data().category.article.a_date;


  list.appendChild(li);
}

//getting data
db.collection('MetroWeb').get().then((snapshot)=>{
  console.log(snapshot.docs);
  snapshot.docs.forEach(doc => {
    renderTitle(doc);
    console.log(doc.data());    
  });
});


//saving data

form.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('MetroWeb').add({
    title: form.title.value,
    byname: form.name.value,
    para: form.context.value,
    tag: form.tag.value,
    date: form.date.value
  });
  form.title.value = '';
  form.name.value = '';
  form.context.value = '';
  form.tag.value = '';
  form.date.value = '';
});