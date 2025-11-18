function changeImage() {
    var img = document.getElementById("myImg");

    if (img.src.includes("img1.jpg")) {
        img.src = "./images/img2.jpg";
    } else {
        img.src = "./images/img1.jpg";
    }
}
