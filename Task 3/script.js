function showHide() {
    var pass = document.getElementById("mypassword");

    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}
