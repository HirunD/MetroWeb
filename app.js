document.addEventListener('mousemove'
, function(e){
    var x = e.pageX;
    var y = e.pageY;
    document.getElementById("cursor").style.left = 70 + x + "px";
    document.getElementById("cursor").style.top =  y + "px";
}
)