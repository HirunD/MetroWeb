
// // const tile5 = document.querySelector('#ac5txt');
var page = document.title.toLocaleLowerCase();

if (page == "technology") {
  console.log("tech");  
  page = "tech"
}if (page == "entertainment") {
  console.log("ent");
  page = "entertainment";
} if (page == "space exploration") {
  console.log("none");
  page = "space-expo";
} 
console.log(page);


// console.log(page);

// function renderTitle(doc){
//   // const Article_1_name = doc.data().Article_1.name;
//   // const Article_1_link = doc.data().Article_1.content;
//   let tile1 = document.getElementById('ac1txt');


//   tile1.setAttribute('data-id', doc.id);
//     tile1.setAttribute('href' , "article.html?" + doc.data().Article_1.content);
//   tile2.setAttribute('data-id', doc.id);
//     tile2.setAttribute('href' , "article.html?" + doc.data().Article_1.content);
//   tile3.setAttribute('data-id', doc.id);
//     tile3.setAttribute('href' , "article.html?" + doc.data().Article_1.content);
//   tile4.setAttribute('data-id', doc.id);
//     tile4.setAttribute('href' , "article.html?" + doc.data().Article_1.content);
//   // tile5.setAttribute('data-id', doc.id);
//   //   tile5.setAttribute('href' , "article.html?" + doc.data().Article_1.content);
//   // tile1.setAttribute("href",  "article.html?" + page);


//   tile1.textContent = doc.data().Article_1.name;
//   tile2.textContent = doc.data().Article_1.name;
//   tile3.textContent = doc.data().Article_1.name;
//   tile4.textContent = doc.data().Article_1.name;
//   // tile5.textContent = doc.data().Article_1.name;
  
//   tile1.onclick = setInterval(function() {
//   const tile1 = doc.data().content;
// });


// }

// //getting data
// db.collection('MetroWeb').doc(page)
// .get()
// .then(function(doc) {
//   if (doc.exists) {
//     console.log("Document data:", doc.data());
//     renderTitle(doc);
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// }).catch(function(error) {
//   console.log("Error getting document:", error);
// });


db.collection('MetroWeb').get().then(snapshot => {
  snapshot.docs.forEach(async(doc) => {
      try{
          const d = await doc.data();
          if(d.category.c_name.toLowerCase().includes(page)){
              console.log("match found ",d);
              tableCreate(d);
          }else{
              console.log("D failed")
          }
      }catch(err){
        console.log(err);
      }
})
});




var names = [];
// var contents = [];

function tableCreate(d) {
  console.log("recived");
  names.push(d.category.article.a_name);
  console.log(d);
  console.log(names);
  // contents.push(d.category.article.a_content);
  createTable(names);
}

const tile1 = document.querySelector('#ac1txt');
const tile2 = document.querySelector('#ac2txt');
const tile3 = document.querySelector('#ac3txt');
const tile4 = document.querySelector('#ac4txt');

function createTable(names) {
  console.log("here");
  console.log(names);
  if (names) {
    console.log("contain", names);
    tile1.textContent = names[0];
    tile2.textContent = names[1];
    // tile3.textContent = names[2];
    // tile4.textContent = names[3];
    console.log("done one")
    // productContainer5.textContent = names[4];
    
    // context1.textContent = contents[0];
    // context2.textContent = contents[1];
    // context3.textContent = contents[2];
    // context4.textContent = contents[3];
    // context5.textContent = contents[4];

    tile1.setAttribute("href",  "article.html?" + names[0]);
    tile2.setAttribute("href",  "article.html?" + names[1]);
    // tile1.setAttribute("href",  "article.html?" + names[2])
    // tile1.setAttribute("href",  "article.html?" + names[3])

    console.log("done last");
    // links[0].setAttribute('href', "../article.html?" + names[0]);
    // links[1].setAttribute('href', "../article.html?" + names[1]);
    // links[2].setAttribute('href', "../article.html?" + names[2]);
  }
}