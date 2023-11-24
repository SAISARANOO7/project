/* Script for popover positioning */
(function (selector, horizontalOffset, verticalOffset) {
    var items;
  
    selector = selector || ".date__box";
    horizontalOffset = horizontalOffset || 40;
    verticalOffset = verticalOffset || 40;
  
    items = document.querySelectorAll(selector);
    items = Array.prototype.slice.call(items);
  
    items.forEach(function (item) {
      // Every time the pointer moves over the element the
      //  CSS-rule in overwritten with new values for
      //  top and left.
      item.addEventListener("mousemove", function (e) {
        let countCssRules = document.styleSheets[0].cssRules.length;
        var rightSpace = document.body.clientWidth - e.pageX;
        if (rightSpace > 0) {
          var newRule =
            selector +
            ":hover .box__content {  " +
            "right:auto; left: " +
            (horizontalOffset + e.offsetX) +
            "px; " +
            "top: " +
            (e.offsetY + verticalOffset) +
            "px; }";
        } else {
          var newRule =
            selector +
            ":hover .box__content {  " +
            "left:auto; right: " +
            (item.offsetWidth - e.offsetX) +
            "px; " +
            "top: " +
            (e.offsetY + verticalOffset) +
            "px; }";
        }
  
        document.styleSheets[0].insertRule(newRule, countCssRules);
      });
    });
  })(".date__box", -20, 0);
  // showing the logging as
  var span_login = document.querySelector("#login_info");
  var data = JSON.parse(localStorage.getItem("username"));
  span_login.innerHTML = data;
  var span_logout = document.querySelector(".log_out");
  
  span_logout.addEventListener("click", function () {
    alert("Will go to the home page and you will be log out from page");
    window.document.location = "../argon1/index.html";
  });
  //
  var add__to__calendar = document.getElementById("add__to__calendar");
  var weight = document.getElementById("weight");
  var back__btn = document.getElementById("back__btn");
  var save__btn = document.getElementById("save__btn");
  var popup__close1 = document.getElementById("popup__close1");
  var data__list = [];
  var total__task = [];
  
  popup = () => {
    console.log("popup clicked");
    var shadow1 = document.getElementById("shadow1");
    shadow1.setAttribute("class", "shadow1");
    popup__window();
  };
  
  popup__window = () => {
    var popup__window = document.getElementById("popup__window");
    popup__window.setAttribute("class", "popup__window");
  };
  
  popup__weight = () => {
    console.log("popup__weight clicked");
    var popup__weight = document.getElementById("popup__weight");
    popup__weight.setAttribute("class", "popup__weight");
  
    var popup__window = document.getElementById("popup__window");
    popup__window.setAttribute("class", "hide");
  };
  
  back = (e) => {
    console.log("Back button clicked");
    // var parent = e.parentNode;
    // parent.setAttribute("class", "hide")
  
    var popup__weight = document.getElementById("popup__weight");
    popup__weight.setAttribute("class", "hide");
  
    popup__window();
  };
  
  save = (e) => {
    console.log("save button clicked");
    var title__data = document.getElementById("title").value;
    var time__data = document.getElementById("time").value;
    var day__data = localStorage.getItem("day");
    var content_box = localStorage.getItem("Content_box");
    var icon__url = "https://www.shapelink.com/images/diary_icons/55.png";
    var exercise = "Weight lifting";
    console.log("Title: " + title__data);
    console.log("time: " + time__data);
    console.log("day: " + day__data);
    console.log("Icon url: " + icon__url);
    console.log("exercise: " + exercise);
    console.log("content_box: " + content_box);
    var task = {
      day: day__data,
      title: title__data,
      time: time__data,
      exercise: exercise,
      icon: icon__url,
      content_box: content_box,
    };
  
    var num = localStorage.getItem("count");
    console.log("num: " + num);
  
    if (num == null) {
      num = 0;
      var task__number = Number(num) + 1;
      console.log("task number: " + task__number);
      data__list.push(
        localStorage.setItem(`task_${task__number}`, JSON.stringify(task))
      );
      localStorage.setItem("count", task__number);
    } else {
      var task__number = Number(num) + 1;
      console.log("task number: " + task__number);
      data__list.push(
        localStorage.setItem(`task_${task__number}`, JSON.stringify(task))
      );
      localStorage.setItem("count", task__number);
    }
  
    var parent = document.getElementById("save__btn").parentElement;
    parent.setAttribute("class", "hide");
  
    close();
    return title__data, time__data;
  };
  
  close = () => {
    console.log("close button clicked");
    var popup__window = document.getElementById("popup__window");
    popup__window.setAttribute("class", "hide");
    shadow1.setAttribute("class", "hide");
    var popup__weight = document.getElementById("popup__weight");
    popup__weight.setAttribute("class", "hide");
  };
  
  popup1 = () => {
    console.log("add btn 1");
  };
  
  weight.addEventListener("click", popup__weight);
  back__btn.addEventListener("click", back);
  save__btn.addEventListener("click", save);
  popup__close1.addEventListener("click", close);
  popup__close2.addEventListener("click", close);
  add__to__calendar.addEventListener("click", popup);
  
  return_id = (e) => {
    // alert(e);
    var element_name = document.getElementById(e).parentElement.id;
    // alert(element_name);
    // console.log(element_name)
    var main_div = document.getElementById(element_name).parentElement.id;
    // console.log(main_div)
  
    var content_box = document.getElementById(element_name).nextElementSibling.id;
    // alert(content_box)
  
    var temp = document.getElementById(main_div).firstElementChild.id;
    console.log("ading task in " + temp);
    localStorage.setItem("day", temp);
    localStorage.setItem("Content_box", content_box);
    // alert(day);
    popup();
    return element_name;
  };
  
  var arr = [];
  var arr2 = [];
  get_Task_List = () => {
    var xyz = Object.assign({}, localStorage);
    for (i in xyz) {
      // console.log(i)
      // console.log("Hi: " +  i.substring(0, 4))
  
      var task = i.substring(0, 4);
      if (task == "task") {
        total__task.push(i);
      } else {
        console.log("Not added to local storage key list: " + i);
      }
  
      // if((i == "day") || (i == "count") || (i == "Content_box")){
      //   console.log("Day and Count not printed")
      // } else {
      //   total__task.push(i)
      // }
    }
  };
  get_Task_List();
  
  console.log("total__task: " + total__task);
  // var up = document.getElementById("up");
  // up.addEventListener("click")
  
  display = () => {
    for (i = 0; i < total__task.length; i++) {
      // console.log(total__task[i])
      var temp_task = localStorage.getItem(total__task[i]);
      // console.log(temp_task)
      var temp_task_Obj = JSON.parse(temp_task);
      // console.log(temp_task_Obj)
      var temp_day = temp_task_Obj.day;
      var temp_title = temp_task_Obj.title;
      var temp_time = temp_task_Obj.time;
      var temp_icon = temp_task_Obj.icon;
      var temp_exercise = temp_task_Obj.exercise;
      var temp_content = temp_task_Obj.content_box;
      console.log("temp_day: " + temp_day);
      console.log("temp_title: " + temp_title);
      console.log("temp_time: " + temp_time);
      console.log("temp_icon: " + temp_icon);
      console.log("temp_exercise: " + temp_exercise);
      console.log("temp_content: " + temp_content);
  
      var ex_logo = document.createElement("img");
      ex_logo.setAttribute("src", temp_icon);
      ex_logo.setAttribute("class", "icon");
      document.getElementById(temp_day).appendChild(ex_logo);
  
      var line1 = document.createElement("p");
      line1.textContent = temp_exercise;
      line1.setAttribute("class", "line1");
  
      var line2 = document.createElement("p");
      line2.textContent = temp_time + " minute";
      line2.setAttribute("class", "line2");
  
      var details = document.createElement("div");
      details.append(line1, line2);
      document.getElementById(temp_content).appendChild(details);
    }
  };
  display();