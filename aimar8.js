function togglelayanan(event, id) {
    event.preventDefault();
    const element = document.getElementById(id);

    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block"; // Show the element
    } else {
        element.style.display = "none"; // Hide the element
    }
}