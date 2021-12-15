let url = window.location.href;
const searchitem = url.split("=")[1].split('%20').join(' ').toLocaleLowerCase();

  db.collection('MetroWeb').get().then(snapshot => {
      snapshot.docs.forEach(async(doc) => {
          try{
              const d = await doc.data();
              if(d.category.article.a_content.toLowerCase().includes(searchitem)){
                  console.log("match found ",d);
                  tableCreate(d);
              }else{
                  console.log("D failed")
              }
          }catch(err){
          }
  })
});


  var names = [];
  var contents = [];

  function tableCreate(d) {
    console.log("recived");
    names.push(d.category.article.a_name);
    console.log(d);
    console.log(contents);
    contents.push(d.category.article.a_content);
    createTable(names);
  }

  const productContainer1 = document.getElementById("productContainer1");
  const productContainer2 = document.getElementById("productContainer2");
  const productContainer3 = document.getElementById("productContainer3");
  const productContainer4 = document.getElementById("productContainer4");
  const productContainer5 = document.getElementById("productContainer5");
  const productContainer6 = document.getElementById("productContainer6");

  const context1 = document.getElementById("context1");
  const context2 = document.getElementById("context2");
  const context3 = document.getElementById("context3");
  const context4 = document.getElementById("context4");
  const context5 = document.getElementById("context5");
  const context6 = document.getElementById("context6");


  function createTable(names) {
    console.log("here");
    if (names) {
      console.log("contain", names);
      productContainer1.textContent = names[0];
      productContainer2.textContent = names[1];
      productContainer3.textContent = names[2];
      productContainer4.textContent = names[3];
      productContainer5.textContent = names[4];
      
      context1.textContent = contents[0];
      context2.textContent = contents[1];
      // context3.textContent = contents[2];
      // context4.textContent = contents[3];
      // context5.textContent = contents[4];
    }
  }