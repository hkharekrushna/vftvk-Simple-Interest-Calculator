function showlatest() {
    var rt = document.getElementById("rate").value;
    document.getElementById("rv").innerText = rt + '%';
    document.getElementById("errorP").style.display = "none";
    document.getElementById("errorT").style.display = "none";
}

function showRV() {
    var rt = document.getElementById("rate").value;
    document.getElementById("rv").innerText = rt + '%'
}

function compute() {
    var p = document.getElementById("principal").value;
    console.log(p);


    var r = document.getElementById("rate").value;
    var t = document.getElementById("years").value;
    p = parseFloat(p);
    r = parseFloat(r);
    t = parseFloat(t);

    if (isNaN(p)) {
        document.getElementById("errorP").style.display = "block";
        document.getElementById("errorT").style.display = "none";
    } else if (isNaN(t)) {
        document.getElementById("errorP").style.display = "none";
        document.getElementById("errorT").style.display = "block";
    } else {

        if (p <= 0) {
            document.getElementById("errorP").innerText = "Enter a positive value";
            document.getElementById("errorP").style.display = "block";

        } else {

            document.getElementById("errorP").style.display = "none";
            document.getElementById("errorT").style.display = "none";
            var si = (p * t * r) / 100;
            var total = p + si;
            var date = new Date();
            var y = date.getFullYear() + t;

            console.log(p + " " + r + " " + t + " " + si + " " + y);
            var result = document.getElementById("result");
            result.innerHTML = "<p>If you deposit <span id='num'> " + p + " </span><br> at an interest rate of <span id='num'>" 
            +
                r + "% </span> <br> You will receive an amount of <span id='num'>" + total + " </span><br> in the year <span id='num'>" + y + " </span></p>";

        }


    }







    console.log("kKKKKKKKKKKKKKKKKKKMMMMMMMMMMMMMMMMMMM");


}


