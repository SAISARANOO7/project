var modal = document.getElementById("myModal");


var btn = document.getElementById("contentbox_btn");
// var editval=document.getElementsByClassName("pencil")

var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function save()
{
    var activity_value=document.getElementById("activity_name").value;
    console.log(activity_value)
   
  
   var x=localStorage.getItem("val")
    if(activity_value=="")
    {
        alert("Something went wrong, check that you filled in a name")
    }
    if(activity_value!="")
    {
    var tab_add_value=document.getElementById("cardiolist_table")
    var output=` <tr id=${activity_value}>
    <td class="first_td">
        <div>
           <img id="to_update_${activity_value}"src="${x}"/>
        </div>
    </td>
    <td class="sec_td">
       <a id='${activity_value}_text' href="backcountry.html">${activity_value}</a>
    </td>
    <td class="third_td">
        <a><img src="https://www.shapelink.com/images/icons/pencil.png" id='${activity_value}_pencil' alt="pencil" onclick="edit('${activity_value}_pencil','${activity_value}_text','to_update_${activity_value}')"/></a>
    </td>
    <td class="third_td">
      <a><img src="https://www.shapelink.com/images/icons/cross.png" alt="cross" onClick="del('${activity_value}')"/></a>
    </td>
</tr>`
tab_add_value.innerHTML+=output;
    }
}
function cancel()
{
    document.getElementById("activity_name").value="";
}
 function set_activity_icon(a,b)
{
    var val=""
    var img1=document.getElementById(a);
    console.log(img1.src)
    val=img1.src;
    var img2=document.getElementById("activityIcon");
    img2.src=val;
    console.log(val)
    localStorage.setItem("val",val);
}
function del(c)
{
  var delete_val =""
  var del_val1=document.getElementById(c);
  del_val1.style.display="none";
}
function set_activity_icon1(d,e)
{
    var val=""
    var img1=document.getElementById(d);
    console.log(img1.src)
    val=img1.src;
    var img2=document.getElementById("activityIcon1");
    img2.src=val;
    console.log(img2.src)
    localStorage.setItem("val",val);
}
function edit(a,b,c)
{
    var activity_value=document.getElementById(b).textContent;
    console.log(activity_value)
    console.log(a,b,c)
    var edit_id=document.getElementById(a);
    console.log(edit_id)
    var modal = document.getElementById("myModal1");
  //  var inputval=document.getElementById("activity_name11").textContent;
  //  inputval.innerHTML=activity_value;
  // inputval="siri"
  //  console.log(inputval)
  //  document.getElementById("activity_name11").textContent=activity_value;
  //  console.log( document.getElementById("activity_name11").textContent);
  //  document.getElementById("activity_name1").textContent=document.getElementById(b).innerHTML;

// var editval=document.getElementsByClassName("pencil")

var span = document.getElementsByClassName("close1")[0];


edit_id.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
   
var edit_it=document.getElementById("edit_activity")
edit_it.onclick = function()
{
  // var update_val = document.getElementById("activity_name11").innerHTML;
  // console.log(update_val)
  
  var update_val1 = document.getElementById(b).value;
  console.log(update_val1)
  update_val=document.getElementById(b).value;
  console.log(update_val)
  console.log(c)
  var c1=document.getElementById(c)
  console.log(c1.src)
  // c1.src="https://www.shapelink.com/images/diary_icons/174.png"
  var u=document.getElementById("activityIcon1")
  c1.src=u.src;
}  
// // var update_img=document.getElementById("activity_Icon1")
//   // console.log(update_img)
//   var u_img=document.getElementById("to_update_backcountry");
//   u_img.src = update_img.src;
//   console.log(u_img.src)
}