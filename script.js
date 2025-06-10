document.addEventListener("DOMContentLoaded", () => {
    const serviceBtn = document.getElementById("service-btn");
    const registerBtn = document.getElementById("register-btn");
    const aboutBtn = document.getElementById("about-btn");
    const closeBtns = document.querySelectorAll(".close-btn");
    const popups = document.querySelectorAll(".popup");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const chatBtn = document.getElementById("chat-btn");
    const chatPopup = document.getElementById("chat-popup");
    const chatCloseBtn = document.getElementById("chat-close-btn");

    // Open Popups
    serviceBtn.addEventListener("click", () => {
        document.getElementById("service-popup").classList.remove("hidden");
    });
    
    registerBtn.addEventListener("click", () => {
        document.getElementById("register-popup").classList.remove("hidden");
    });
    
    aboutBtn.addEventListener("click", () => {
        document.getElementById("about-popup").classList.remove("hidden");
    });

    chatBtn.addEventListener("click", () => {
        chatPopup.classList.remove("hidden");
    });
    
    // Close Popups
    closeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            popups.forEach(popup => popup.classList.add("hidden"));
        });
    });
    
    chatCloseBtn.addEventListener("click", () => {
        chatPopup.classList.add("hidden");
    });

    // Dark Mode Toggle
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Smooth Animations for Popups
    popups.forEach(popup => {
        popup.style.transition = "opacity 0.3s ease-in-out, visibility 0.3s";
    });
});