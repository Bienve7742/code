let changed = false;

function changeText() {
    const title = document.getElementById("title");

    if (changed) {
        title.innerText = "Try more!";
        title.style.color = "blue";
        title.style.fontSize = "32px";
    } else {
        title.innerText = "Do it again!";
        title.style.color = "red";
        title.style.fontSize = "40px";
    }

    changed = !changed;
}

