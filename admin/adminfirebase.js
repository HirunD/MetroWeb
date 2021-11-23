const form_1 = document.querySelector('#formcontext_1');
const form_2 = document.querySelector('#formcontext_2');
const form_3 = document.querySelector('#formcontext_3');
const form_4 = document.querySelector('#formcontext_4');
const body = document.querySelector('#body');
// const form_1 = "article_1";
const date = document.querySelector('#date');
const massage = document.getElementById('responserec');
const back = document.getElementById('backdrop');
// Create a reference to the cities collection


function renderform_1(doc){
  
    form_1.name.setAttribute('value', doc.data().article_1.name);
    form_2.name.setAttribute('value', doc.data().article_2.name);
    form_3.name.setAttribute('value', doc.data().article_3.name);
    form_4.name.setAttribute('value', doc.data().article_4.name);
    form_1.context.setAttribute('value', doc.data().article_1.link);
    form_2.context.setAttribute('value', doc.data().article_2.link);
    form_3.context.setAttribute('value', doc.data().article_3.link);
    form_4.context.setAttribute('value', doc.data().article_4.link);
    // date.setAttribute('data-id', doc.id);
  
  
    // form_1.textContent = doc.data().category.article.a_name;
    // byname.textContent = doc.data().category.article.a_posted_by;
    // para.textContent = doc.data().category.article.a_content;
    // tag.textContent = doc.data().category.article.a_tags;
    // byname.textContent = doc.data().category.article.a_posted_by;
  }

 
//   const logout = document.querySelector('#logout');

//   logout.addEventListener('click', (e) =>{
//     auth.signOut();}
//   );






//getting data
db.collection('MetroWeb').doc("Top_Articles")
.get()
.then(function(doc) {
  if (doc.exists) {
    console.log("Document data:", doc.data());
    renderform_1(doc);
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}).catch(function(error) {
  console.log("Error getting document:", error);
});

form_4.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('MetroWeb').doc("Top_Articles").set({
        article_1 :{
            name: form_1.name.value,
            link: form_1.context.value,
          },
        article_2 :{
            name: form_2.name.value,
            link: form_2.context.value,
          },
        article_3 :{
            name: form_3.name.value,
            link: form_4.context.value,
          },
        article_4 :{
            name: form_4.name.value,
            link: form_4.context.value,
          },
    });
  });

  // function submitdata(){
  //   let a_name = document.getElementById("name").value;
  //   db.collection('MetroWeb').doc(form.form_1.value).set({
  //     category :{
  //       article:{
  //       a_name: form.form_1.value,
  //       a_posted_by: form.name.value,
  //       a_content: form.context.value,
  //       a_tags: form.tag.value,
  //       a_date: form.date.value
  //       },
  //       c_name : form.category.value
  //     },
  //   });
  // }