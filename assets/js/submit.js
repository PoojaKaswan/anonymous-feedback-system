// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // prevent actual submission

        // Get form values
        const category = document.getElementById("category").value;
        const description = document.getElementById("description").value;
        const suggestion = document.getElementById("suggestion").value;

        // Simple validation
        if (!category || !description) {
            alert("Please fill in the required fields.");
            return;
        }

        // Generate fake tracking ID
        const trackingID = "EV-" + Math.floor(1000 + Math.random() * 9000);

        // Show success message
        const successHTML = `
            <div class="success-popup">
                <h2>Feedback Submitted!</h2>
                <p>Your tracking ID: <strong>${trackingID}</strong></p>
                <p>Category: ${category}</p>
                <p>Description: ${description}</p>
                ${suggestion ? `<p>Suggestion: ${suggestion}</p>` : ""}
                <button id="closePopup">Close</button>
            </div>
        `;
        document.body.insertAdjacentHTML("beforeend", successHTML);

        // Add popup styling dynamically
        const popup = document.querySelector(".success-popup");
        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.background = "rgba(255,255,255,0.95)";
        popup.style.backdropFilter = "blur(6px)";
        popup.style.padding = "40px";
        popup.style.borderRadius = "24px";
        popup.style.boxShadow = "0 20px 45px rgba(0,0,0,0.15)";
        popup.style.textAlign = "center";
        popup.style.zIndex = 9999;

        // Close button
        document.getElementById("closePopup").addEventListener("click", function () {
            popup.remove();
            form.reset(); // reset form after closing popup
        });
    });
});
