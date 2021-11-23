
    // console.log(doc.data())
    auth.onAuthStateChanged((user) => {
        if (user) {
         const uid = user.uid;
         console.log(uid);
         if (![BoardsArray].includes(uid)) {
             console.log("he is a freaking admin")
         }
         else{
             console.log("no admin")
         }
        }
      });

const BoardsArray = [];
  db.collection("users")
        // .limit(10)
        .get()
        .then(docs => {
          var array = []
          docs.forEach((doc, index) => {
            BoardsArray.push(doc.data());
          });
        })

console.log(BoardsArray)
