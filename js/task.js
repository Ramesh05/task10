let sum = document.getElementById("num");
document.getElementById("incr").addEventListener("click", function() {
    sum = parseInt(document.getElementById("num").value);
    if ((sum < 10) && (sum > 0)) {
        sum++;
        document.getElementById("num").value = sum;
    } else {
        document.getElementById("incr").disabled = true;
    }
});
document.getElementById("decr").addEventListener("click", function() {
    sum = parseInt(document.getElementById("num").value)
    if (sum > 0) {
        sum--;
        document.getElementById("num").value = sum;
    } else {
        document.getElementById("decr").disabled = true;
    }
});