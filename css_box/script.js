let outer = document.getElementById("outer-box");
let middle = document.getElementById("middle-box");
let inner = document.getElementById("inner-box");

outer.addEventListener("click",(e)=>
{
    e.stopPropagation();
    alert("danger zone");

});
middle.addEventListener("click",(e)=>
{
    e.stopPropagation();
    alert("Not safezone");

});

inner.addEventListener("click",(e)=>
{
    e.stopPropagation();
    alert("Safe zone");
    
});



 