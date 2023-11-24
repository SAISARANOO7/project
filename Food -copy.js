var arr=[];
var del_arr=[];
function save_food()
{
   var name=document.getElementById("name").value;
    var cal=document.getElementById("calories").value;
    var pro=document.getElementById("protein").value;
   
    var carbo= document.getElementById("carbohydrates").value;
    var fat= document.getElementById("fat").value;
    var opt=document.getElementById("category_id").selectedIndex ;
    event.preventDefault()
    for(i=0;i<arr.length;i++)
    {
       if(arr[i]==name)
       {
          console.log(arr[i],arr[i+1],arr[i+2],arr[i+3],arr[i+4],arr[i+5]);
          var x1 = document.getElementById(name);
         //  var x1 = document.getElementById(`${name}`)
          console.log(x1)
           x1.style.display="none";
          console.log(name,opt,cal,pro,carbo,fat);
          
       }
    }
    
    var no_provi=document.getElementById("no_provision")
    no_provi.style.display="none";
    var output=""
    output=`<tr id="${name}">
    <td class="first_td" class="${name}" onClick="edit_food('${name}')">
       
           ${name}
        
    </td>
    <td class="sec_td black"  id="${cal}">
       ${cal}
    </td>
    <td class="third_td black"  id="${pro}">
        ${pro}
    </td>
    <td class="third_td black" id="${fat}">
      ${fat}
    </td>
    <td class="third_td black" id="${carbo}">
    ${carbo} 
  </td>
 <td class="third_td">
 <img class="trash" onClick="dell('${name}')" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Trash_font_awesome.svg/1024px-Trash_font_awesome.svg.png"/>
 </td>
</tr>`
del_arr.push(name,opt,cal,pro,fat,carbo)
localStorage.setItem("del_arr",JSON.stringify(del_arr))

arr.push(name,opt,cal,pro,fat,carbo)
localStorage.setItem("arr",JSON.stringify(arr))
console.log(arr)
localStorage.setItem(name,JSON.stringify([name,opt,cal,pro,fat,carbo]))
var data=document.getElementById("cardiolist_table")
data.innerHTML+=output;
document.getElementById("name").value=""
document.getElementById("calories").value=""
document.getElementById("protein").value=""
document.getElementById("carbohydrates").value=""
document.getElementById("fat").value=""
document.getElementById("category_id").selectedIndex = "16";


}

function dell(c_row)
{
   // var name=document.getElementsByClassName("name").value;
  
   // var cal=document.getElementById("cal").value;
   // var pro=document.getElementById("pro").value;
   // var fat=document.getElementById("fat").value;
   // var carbo=document.getElementById("carbo").value;
   // var x =localStorage.getItem("del_arr")
   // var y =JSON.parse(x)
   // console.log(y)
   // var x1 = document.getElementById("name");
           
   //           console.log(x1)
   // for(i=0;i<del_arr.length;i++)
   // {
   //    if(del_arr[i]==name)
   //    {
         
   //       if((del_arr[i]==name)  && (del_arr[i+2]==cal) && (del_arr[i+3]==pro) && (del_arr[i+4]==carbo) && (del_arr[i+5]==fat))
   //       {
   //          var x1 = document.getElementById("name");
           
   //           console.log(x1)
   //       }
         var x1 = document.getElementById(c_row);
           x1.style.display="none";
            x1.style.transition="visibility 2s, opacity 0.5s linear" ;
         
      // }
   // }

}
function edit_food(x)
{

  var x =localStorage.getItem(`${x}`)
  var y =JSON.parse(x)
  console.log(y)
  console.log(typeof(y))

  console.log(y[0])
  console.log(y[1])
  console.log(y[2])
  console.log(y[3])
  console.log(y[4])
  console.log(y[5])
 
 
document.getElementById("name").value=y[0]
document.getElementById("category_id").selectedIndex = y[1];
document.getElementById("calories").value=y[2]
document.getElementById("protein").value=y[3]
document.getElementById("carbohydrates").value=y[4]
document.getElementById("fat").value=y[5]
 
}