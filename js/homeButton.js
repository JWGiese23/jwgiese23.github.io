function goHome() {
    window.location.href = "https://jwgiese23.github.io/index.html";
}

// Create button automatically
window.onload = function () {
    const btn = document.createElement("button");
    btn.innerText = "Back to Home";
    btn.style.position = "fixed";
    btn.style.top = "20px";
    btn.style.left = "20px";
    btn.style.padding = "10px 20px";
    btn.style.fontSize = "16px";
    btn.style.cursor = "pointer";
    btn.style.borderRadius = "6px";
    btn.style.border = "none";
    btn.style.backgroundColor = "#28a745";
    btn.style.color = "white";

    btn.onclick = goHome;

    document.body.appendChild(btn);
};
