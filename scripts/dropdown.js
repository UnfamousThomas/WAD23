document.addEventListener("DOMContentLoaded", function() {
    
    var dropdownContent = document.createElement("div");
    dropdownContent.className = "dropdown";
    dropdownContent.innerHTML = "<p>John Doe</p><p>john.doe@ut.ee</p><p id='logout'>Logout</p>";

    var profileImage = document.getElementById("profileImage");

    profileImage.parentNode.appendChild(dropdownContent);

    profileImage.addEventListener("click", function(event) {
        var dropdown = document.querySelector(".dropdown");
        dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
        
        event.stopPropagation();
    });

    document.addEventListener("click", function() {
        var dropdown = document.querySelector(".dropdown");
        dropdown.style.display = "none";
    });

    document.getElementById("logout").addEventListener("click", function() {
        // Lisame hiljem
        alert("Logout clicked!");
    });
});