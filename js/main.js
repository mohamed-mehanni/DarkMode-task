let changeTheemBtn = document.getElementById("changetheembtn");
let body = document.body;

changeTheemBtn.addEventListener("click", function () {
    if (body.classList.contains("dark_mode")) {
        body.classList.remove("dark_mode");
        this.classList.replace("btn-light", "btn-dark");
    } else {
        body.classList.add("dark_mode");
        this.classList.replace("btn-dark", "btn-light");
    }
});
