const form = document.getElementById("loginForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    if (username === "" || password === "") {
        alert("⚠️ Please fill in all fields!"); return;
    }
    if (username === "user" && password === "1234") {
        alert("✅ Login Successful!");

        // Save username to localStorage
        localStorage.setItem("loggedInUser", username);

        // Redirect to dashboard
        window.location.href = "dashboard.html";
    }

    else {
        alert("❌ Invalid Credentials. Use Username: user & Password: 1234 for demo.");
    }
});