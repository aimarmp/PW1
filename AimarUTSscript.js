document.getElementById("sidebarToggle").addEventListener("click", function(event) {
    var sidebar = document.getElementById("mySidebar");
    sidebar.style.display = (sidebar.style.display === "none") ? "block" : "none";
    event.stopPropagation();
});

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

document.addEventListener("click", function(event) {
    var sidebar = document.getElementById("mySidebar");
    if (sidebar.style.display === "block" && event.target !== sidebar && !sidebar.contains(event.target)) {
        sidebar.style.display = "none";
    }
});

document.querySelectorAll('.anavbar').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});