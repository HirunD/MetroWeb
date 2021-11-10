document.addEventListener('mousemove'
, function(e){
    var x = e.pageX;
    var y = e.pageY;
    document.getElementById("cursor").style.left = x + "px";
    document.getElementById("cursor").style.top =  y + "px";
}
)



const searchPara = document.querySelector('form');

searchPara.addEventListener('submit', (e) =>{
    e.preventDefault();
    const searchword = searchPara.search.value;

    window.location.href = "/search/results.html?" + searchword;
})



