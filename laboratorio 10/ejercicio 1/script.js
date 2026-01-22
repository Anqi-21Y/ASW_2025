const btn =document.getElementById("test-click");

btn.addEventListener("mousedown", function (e) {
    console.log(e.type);
});


btn.addEventListener("mouseup", function (e) {
    console.log(e.type);
});

btn.addEventListener("click", function (e) {
    console.log(e.type);
});

btn.addEventListener("dbclick", function (e) {
    console.log(e.type);
});
