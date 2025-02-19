document.addEventListener("DOMContentLoaded", function () {
    let accountBtn = document.getElementById("account-btn");
    let loggedInUser = sessionStorage.getItem("loggedInUser");

    if (loggedInUser) {
        accountBtn.textContent = "Logout";
        accountBtn.href = "#"; // Prevent navigation
        accountBtn.addEventListener("click", function () {
            sessionStorage.removeItem("loggedInUser");
            window.location.reload();
        });
    }
});