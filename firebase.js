const title = document.querySelector('#bannert');
const byname = document.querySelector('#byname');
const para = document.querySelector('#articlepara')
const list = document.querySelector('#toparticles')

function renderTitle(doc){
  let title = document.getElementById('bannert');
  let byname = document.getElementById('byname');
  let para = document.getElementById('articlepara');
  let li = document.createElement('li');
  let name = document.createElement('span')


  title.setAttribute('data-id', doc.id);
  byname.setAttribute('data-id', doc.id);
  para.setAttribute('data-id', doc.id);
  li.setAttribute('data-id', doc.id);


  title.textContent = doc.data().category.article.a_name;
  byname.textContent = doc.data().category.article.a_posted_by;
  para.textContent = doc.data().category.article.a_content;
  name.textContent = doc.data().1st.a_name;

}


db.collection('MetroWeb').get().then((snapshot)=>{
  console.log(snapshot.docs);
  snapshot.docs.forEach(doc => {
    renderTitle(doc);
    console.log(doc.data());    
  });
})