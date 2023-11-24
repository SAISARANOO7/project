var count=0;

function check()
{
    if(!this.per_portion.checked)
    {
        alert("hiii")
    }
    else if(this.per_portion.checked)
    {
        alert("Aiiiii")
    }
}

function add_meal()
{
    var mm=localStorage.getItem("Meals");
    var y = JSON.parse(mm);
    console.log(y.length)
}