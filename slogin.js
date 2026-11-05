document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const studentName =
            document.getElementById("studentName").value.trim();

        const rollNumber =
            document.getElementById("rollNumber").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value.trim();

        const message =
            document.getElementById("message");
        if (
            studentName === "" ||
            rollNumber === "" ||
            email === "" ||
            password === ""
        ) {

            message.textContent = "Please fill all the details.";
            message.style.color = "#ff4d4d";

            return;
        }
        localStorage.setItem("studentName", studentName);
        localStorage.setItem("rollNumber", rollNumber);
        localStorage.setItem("studentEmail", email);
        localStorage.setItem("studentLoggedIn", "true");


        message.textContent =
            "Login successful! Redirecting...";

        message.style.color = "#00ff88";
        setTimeout(function () {

            window.location.href = "index.html";

        }, 1200);

    });

});