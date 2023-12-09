const button = document.getElementById('btn');

button.addEventListener("click", function (event) {
    console.log(event.target === this);
});