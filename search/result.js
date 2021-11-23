let url = window.location.href;
let page = url.split("?")[1].split('%20').join(' ');

// //getting data
// db.collection('MetroWeb')
// // .includes (page)
// .get()
// .then(function(doc) {
//   if (doc.exists) {
//     console.log("Document data:", doc.data());
//     // renderTitle(doc);
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// }).catch(function(error) {
//   console.log("Error getting document:", error);
// });



// function getdata() {
  const BoardsArray = [];
  db.collection("MetroWeb")
        // .limit(10)
        .get()
        .then(docs => {
          var array = []
          docs.forEach((doc, index) => {
            BoardsArray.push(doc.data());
          });
        })


        console.log(BoardsArray)

        const results = BoardsArray.indexOf('ef');
        console.log(results)
          

          if (BoardsArray.indexOf('[0]')) {
            // console.log(array[0], index);
            console.log("sucess")
            
            const title = document.getElementById('results')

            title.textContent = BoardsArray.content;
          } else {
            console.log('no search results');
          }
// }
