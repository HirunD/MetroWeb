const loading = document.getElementById('loading');

window.onload(setTimeout(() => {
        loading.style.display = "none";
        loading.style.zIndex = "100";
        },
    5000)
    .then(
        loading.style.display = "inline",
        // loading.style.position = "fixed"
    )
    );

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


// window.onload = function(){ document.getElementById("loading").style.display = "none" }





