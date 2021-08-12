

function compute()
{
    var p = document.getElementById("principal").innerText.value;
    p=parseFloat(p);
    
    var r = document.getElementById("rate").innerText.value;
    var t = document.getElementById("years").innerText.value;
    r=parseFloat(r);
    t=parseFloat(t);

    var si=(p*t*r)/100;
    var date= new Date();
    var y=date.getFullYear()+t;
    console.log("kKKKKKKKKKKKKKKKKKK");

    console.log(p+" "+r+" "+t+" "+si+" "+y);
    var result = document.getElementById("result");
    result.innerHTML="<p>If you deposit "+p+"<br> at an interest rate of "+ 
    r+"% <br> You will receive an amount of "+p+si+"<br> in the year "+y+" </p>";

    
}

console.log("kKKKKKKKKKKKKKKKKKKMMMMMMMMMMMMMMMMMMM");
        