const loader = document.getElementById("loader");
loader.style.display = "block"

loading();

function loading() {
    setTimeout(function () {
        loader.style.display = "none"
     }, 1500)
}
// loader.