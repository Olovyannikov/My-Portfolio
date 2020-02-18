function f() {

var chbox;
chbox = document.getElementById('myTheme');

if (chbox.checked) {
        document.getElementById("theme").href = "css/style.css";
        return false;
    }
    else {
        document.getElementById("theme").href = "basic-dark-theme/style.css";
}
}