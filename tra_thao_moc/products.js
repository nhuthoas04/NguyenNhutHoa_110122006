// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    // Function to open the modal
    function openModal(title, imageSrc, description) {
        const modal = document.getElementById("productModal");
        document.getElementById("modalTitle").innerText = title;
        document.getElementById("modalImage").src = imageSrc;
        document.getElementById("modalDescription").innerText = description;
        modal.style.display = "block";
        setTimeout(() => {
            modal.classList.add("show");
        }, 10); // Timeout to allow transition to take effect
    }

    // Function to close the modal
    function closeModal() {
        const modal = document.getElementById("productModal");
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
        }, 300); // Match the transition duration
    }

    // Attach the close function to the close button
    document.querySelector(".close").addEventListener("click", closeModal);

    // Close the modal when clicking outside of it
    window.addEventListener("click", function(event) {
        const modal = document.getElementById("productModal");
        if (event.target === modal) {
            closeModal();
        }
    });

    // Expose the openModal function to global scope for inline onclick attributes
    window.openModal = openModal;
});
