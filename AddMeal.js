var id_00=document.getElementById("id_0")
var id_11=document.getElementById("id_1")
var id_22=document.getElementById("id_2")
var id_33=document.getElementById("id_3")
var id_44=document.getElementById("id_4")
var id_55=document.getElementById("id_5")
var meals_arr=[];

function selectclick()
{
    var indi=document.getElementById("category_id").selectedIndex;
    
    if(indi=="0")
    {
        id_00.style.display="block";
        id_11.style.display="none"
         id_22.style.display="none"
        id_33.style.display="none"
        id_44.style.display="none"
       
    }
    if(indi=="1")
    {
        id_11.style.display="block";
        id_00.style.display="none";
        id_22.style.display="none";
        id_33.style.display="none"
        id_44.style.display="none"
    }
    if(indi=="2")
    {
        id_22.style.display="block";
        id_00.style.display="none";
        id_11.style.display="none";
        id_33.style.display="none";
        id_44.style.display="none";
    }
    if(indi=="3")
    {
        id_33.style.display="block";
        id_22.style.display="none";
        id_00.style.display="none";
        id_11.style.display="none";
        id_44.style.display="none";
    }
    if(indi=="4")
    {
        id_44.style.display="block";
        id_33.style.display="none";
        id_22.style.display="none";
        id_00.style.display="none";
        id_11.style.display="none";
    }
    
    
}

function add_amt()
{
    var amt=document.getElementById("units_amt").value;
    console.log(amt)
    var op=document.getElementById("category_id").value;
    console.log(op)
    var op_index=document.getElementById("category_id").selectedIndex;
    console.log(op_index)
    if(op_index==0)
    {
        var a = document.getElementById("category_id0").value; 
        console.log(a)
        
        }
        if(op_index==1)
        {
            var a = document.getElementById("category_id1").value; 
            console.log(a)
            
            }
            if(op_index==2)
           {
            var a = document.getElementById("category_id2").value; 
            console.log(a)
            
            }
            if(op_index==3)
            {
             var a = document.getElementById("category_id3").value; 
             console.log(a)
             
             }
             if(op_index==4)
             {
              var a = document.getElementById("category_id4").value; 
              console.log(a)
              
              }
              if(amt<=50)
              {
                  dum1=5.48;
                  dum2=10.5;
                  dum3=53.7;
                  dum4=45;
              }
              if((amt>50)&&(amt<=60))
              {
                  dum1=5.23;
                  dum2=0.8;
                  dum3=0.7;
                  dum4=60.3;
              }
              if((amt>60)&&(amt<=70))
              {
                  dum1=6.47;
                  dum2=23.1;
                  dum3=65;
                  dum4=49.1;
              }
              if((amt>70)&&(amt<=80))
              {
                  dum1=7.47;
                  dum2=28.1;
                  dum3=43;
                  dum4=59.1;
              }
              if((amt>80)&&(amt<=90))
              {
                  dum1=3.47;
                  dum2=26.1;
                  dum3=33;
                  dum4=49.1;
              }
              var out=`<tr id="${a}" >
              <td width="20%"><b id="amt_name">${a}</b></td>
              <td width="15%"><b id="amt_amt">${amt}</b></td>
              <td width="18%"><b id="amt_cal">${dum1}</b></td>
              <td width="15%"><b id="amt_pro">${dum2}</b></td>
              <td width="15%"><b id="amt_fat">${dum3}</b></td>
              <td width="20%"><b id="amt_carbo">${dum4}</b></td>
              <td width="20%"><img class="trash" onClick="dell('${a}')" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Trash_font_awesome.svg/1024px-Trash_font_awesome.svg.png"/></td>
          </tr>`
          var x11=document.getElementById("exerciselist_table")
          x11.innerHTML+=out;
          var no=document.getElementById("no_ing")
          no.style.display="none"
          var nammy=document.getElementById("meal_info_input").value;
    var portion_val=document.getElementById("meal_info_portions").value;
    console.log(portion_val)
    localStorage.setItem("portion_val",portion_val)
    meals_arr.push([nammy,portion_val,dum1,dum2,dum3,dum4])
    localStorage.setItem("Meals",JSON.stringify(meals_arr))

    }

    function dell(a)
    {
       var ccc= document.getElementById(a)
       ccc.style.display="none"
    }
    function cancell()
    {
        // var portion_val=document.getElementById("meal_info_portions").value;
        // console.log(portion_val)
        // localStorage.setItem("portion_val",portion_val)
        document.getElementById("meal_info_input").value="";
        document.getElementById("meal_info_portions").selectedIndex="0"
        document.getElementById("category_id").selectedIndex="0"
        id_00.style.display="none";
        id_11.style.display="none"
         id_22.style.display="none"
        id_33.style.display="none"
        id_44.style.display="none"

    }
   






















    //     var a = document.getElementById("category_id"); 
// var val=op
// for (var i = 0; i < a.length; i++) { 
//     var option = a.options[i]; 
//     if (option.value == val) { 
//         console.log(option.text,i)  
//     } 
// } 
// 