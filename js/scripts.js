
//nav scripts and listeners
window.addEventListener('resize', function() {
    var x = document.getElementById("myLinks")
    if (window.innerWidth > 768) 
        x.style.display = "flex"; 
    else
        x.style.display = "none";
      
});

function Toggle_Nav() {
    var x = document.getElementById("myLinks");
    
    if (x.style.display === "block")
        x.style.display = "none";
    else 
        x.style.display = "block";
}
