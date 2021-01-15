function compute()
{
    var principal = Number(document.getElementById("principal").value);
    var rate = Number(document.getElementById("rates").value);
    var years = Number(document.getElementById("years").value);
    if(principal == 0 || principal <0 || principal == "")
    {
        alert('Enter a positive number');
        document.getElementById("principal").focus();
    }
    else
    {
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear() + years;
        var result = document.getElementById("result");
        result.innerHTML = "If you deposit "+ "<span id='test'>" + principal+ "</span>" + ",<br>at an interest rate of "+"<span id='test'>" + rate+ "%</span>"+".<br>You will receive an amount of "+"<span id='test'>" + interest+ "</span>"+ ",<br>in the year " + "<span id='test'>"+year+"</span>";
    }
}
function calculate()
{
    var i = document.getElementById("rates").value;
    var res= document.getElementById("irate");
    res.innerHTML = i+"%";
}
