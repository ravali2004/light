document.addEventListener("DOMContentLoaded", function() {
    const light = document.getElementById("light");
    const toggleButton = document.getElementById("toggleButton");

    toggleButton.addEventListener("click", function() {
        if (light.classList.contains("light-off")) {
            light.classList.remove("light-off");
            light.classList.add("light-on");
            toggleButton.textContent = "Turn Off";
        } else {
            light.classList.remove("light-on");
            light.classList.add("light-off");
            toggleButton.textContent = "Turn On";
        }
    });
});
