let data = document.getElementById("btn");
data.addEventListener("mouseover",()=>
{
    let data1 = document.getElementById("first").value;
    let data2 = document.getElementById("second").value;
    let sum = Number(data1) + Number(data2);
    alert(sum);
});