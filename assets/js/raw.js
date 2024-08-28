
function triggerCountdown() {
    var input = document.querySelector("#time");
    input.addEventListener("keydown", (e) => {
        e.stopPropagation();
        var num = input.value;
        if (e.key=="Enter") {
            countdownStart(num);
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    triggerCountdown();
})

document.addEventListener("keydown", (e) => {
    console.log(e);
    if (e.key=="Escape") {
        confirmChange();
    }
})

