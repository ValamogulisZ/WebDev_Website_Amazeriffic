var addCounter = 0;

function changeOption(nid){
  var current_tag = document.getElementById(nid);
  if (nid=="op1"){
    document.getElementById("Newest").classList.remove("hide");
    document.getElementById("Oldest").classList.add("hide");
    document.getElementById("Add").classList.add("hide");
    document.getElementById("Tags").classList.add("hide");
    current_tag.style.background="#ddd";
    current_tag.nextElementSibling.style.background="gray";
    current_tag.nextElementSibling.nextElementSibling.style.background="gray";
    current_tag.nextElementSibling.nextElementSibling.nextElementSibling.style.background="gray";
  }
  else if (nid=="op2") {
    document.getElementById("Newest").classList.add("hide");
    document.getElementById("Oldest").classList.remove("hide");
    document.getElementById("Add").classList.add("hide");
    document.getElementById("Tags").classList.add("hide");
    current_tag.style.background="#ddd";
    current_tag.nextElementSibling.style.background="gray";
    current_tag.nextElementSibling.nextElementSibling.style.background="gray";
    current_tag.previousElementSibling.style.background="gray";
  }
  else if (nid=="op3") {
    document.getElementById("Newest").classList.add("hide");
    document.getElementById("Oldest").classList.add("hide");
    document.getElementById("Tags").classList.remove("hide");
    document.getElementById("Add").classList.add("hide");
    current_tag.style.background="#ddd";
    current_tag.nextElementSibling.style.background="gray";
    current_tag.previousElementSibling.style.background="gray";
    current_tag.previousElementSibling.previousElementSibling.style.background="gray";
  }
  else if (nid=="op4") {
    document.getElementById("Newest").classList.add("hide");
    document.getElementById("Oldest").classList.add("hide");
    document.getElementById("Tags").classList.add("hide");
    document.getElementById("Add").classList.remove("hide");
    current_tag.style.background="#ddd";
    current_tag.previousElementSibling.style.background="gray";
    current_tag.previousElementSibling.previousElementSibling.style.background="gray";
    current_tag.previousElementSibling.previousElementSibling.previousElementSibling.style.background="gray";
  }
}

function addContent(){
  var node = document.createElement("LI");
  var newAdded = document.getElementById("inputBox").value;
  console.log(newAdded);
  var textNode = document.createTextNode(newAdded);
  node.appendChild(textNode);
  console.log(node, textNode);
  document.getElementById("oldestUl").appendChild(node);
  if (addCounter<=5) {
    document.getElementById("newestUl").children[addCounter].innerHTML = newAdded;
  }else {
    addCounter = 0;
    document.getElementById("newestUl").children[addCounter].innerHTML = newAdded;
  }
  addCounter++;
}

var main = function(toDoObjects){
  "use strick";
  var toDos = toDoObjects.map(function (toDo) {
    // we'll just return the description
    // of this toDoObject
    return toDo.description;
    console.log(toDoObjects);
    console.log(toDo);
  });

  if ($element.parent().is(":nth-child(3)")) {
    // THIS IS THE TAGS TAB CODE
    console.log("the tags tab was clicked!");
    var organizedByTag = [
      /* etc */
    ];
    organizedByTag.forEach(function (tag) {
       var $tagName = $("<h3>").text(tag.name),
           $content = $("<ul>");
       tag.toDos.forEach(function (description) {
         var $li = $("<li>").text(description);
         $content.append($li);
       });
       $("main .content #Tags").append($content);
       $("main .content #Tags").append($tagName);
       $("main .content #Tags").append($content);
     });
  }

};

$(document).ready(function(){
  $.getJSON("todos.json", function (toDoObjects) {
    // call main with the to-dos as an argument
    main(toDoObjects);
    console.log(toDoObjects);
  });
})




// Uncaught TypeError: Cannot read property 'appendChild' of null

/*
var main = function () {
   "use strict";
   var toDos = [
     "Finish writing this book",
     "Take Gracie to the park",
     "Answer emails",
     "Prep for Monday's class",
     "Make up some new ToDos",
     "Get Groceries"
   ];
}

$(element).on("click", function () {
   var $element = $(element),
    $content;

   $(".tabs a span").removeClass("active");
   $element.addClass("active");
   $("main .content").empty();

   if ($element.parent().is(":nth-child(1)")) {
     console.log("FIRST TAB CLICKED!");
   }
   else if ($element.parent().is(":nth-child(2)")) {
       $content = $("<ul>");
       toDos.forEach(function (todo) {
       $content.append($("<li>").text(todo));
       });
     $("main .content").append($content);
   }
   else if ($element.parent().is(":nth-child(3)")) {
     console.log("THIRD TAB CLICKED!");
   }
})
*/
