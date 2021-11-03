document.addEventListener('mousemove'
, function(e){
    var x = e.pageX;
    var y = e.pageY;
    document.getElementById("cursor").style.left = x + "px";
    document.getElementById("cursor").style.top =  y + "px";
}
)



// api url
const api_url = 
      "https://sheetdb.io/api/v1/meavkqmohxs7d";

      async function getapi(url) {
    
        // Storing response
        const response = await fetch(url);
        
        // Storing data in form of JSON
        var data = await response.json();
        console.log(data);
        var categorise = data.results;  
        return categorise.map(function(author) {
            let ct = categorise.Category;
        })

        document.getElementById("bannert").title = ct;
}
    
    // Calling that async function
    getapi(api_url);
