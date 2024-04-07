// add event listener to the show more button
// when clicked, show the hidden content
document.getElementById("show_more").addEventListener("click", function() {
    document.querySelector(".site3").style.display = "block";
    document.getElementById("show_more").style.display = "none";
});