

let inactivityTime = function () {
    let time;
    const timeout = 5000; // 5 seconds

    // Reset timer on events
    window.onload = resetTimer;
    document.onmousemove = resetTimer;

    function changeStyle() {
        document.getElementById("title").style.backgroundColor = "#000000"; // Change background color
        document.getElementById("title").style.fontSize = "2rem"; // Change font size
    }

    function revertStyle() {
        document.getElementById("title").style.backgroundColor = "#1e63d2"; // Revert background color
        document.getElementById("title").style.fontSize = "1rem"; // Revert font size
    }

    function resetTimer() {
        clearTimeout(time);
        revertStyle();
        time = setTimeout(changeStyle, timeout);
    }
};

window.onload = function () {
    inactivityTime();
};
