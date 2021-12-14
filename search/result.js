let url = window.location.href;
const searchitem = url.split("=")[1].split('%20').join(' ').toLocaleLowerCase();

const form = document.getElementById('get_search');

form.addEventListener('submit', (e) => {
  // e.window.location.href = "../../search.html?", form.search.value;
  console.log("../../search.html?", form.search.value)
})

const button = document.getElementById("click");

  db.collection('MetroWeb').get().then(snapshot => {
      snapshot.docs.forEach(async(doc) => {
          try{
              const d = await doc.data();
              if(d.category.article.a_content.toLowerCase().includes(searchitem)){
                  console.log(d);
                  tableCreate(d);
              }else{
                  console.error("D failed")
              }
          }catch(err){
              console.error(err);
          }
  }).catch(err => {
      console.error(err)
  })
});

var table = [];

  function tableCreate(d) {
    table.push(d.category.article.a_name);
    console.log(table);  
    createTable(table);

    // createTable(array);
  }

  const productContainer = document.getElementById("productContainer");

  var array = Object.keys(table);

  // createTable(array);

  function createTable(data) {
    if (data) {
      productContainer.innerHTML = "";
      console.log(data);
      Object.values(data).map(item => {
        productContainer.innerHTML += 
        data;
      }
      )
    }
  }