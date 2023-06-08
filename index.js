  const create = document.querySelector("#create");
  const checkbox = document.querySelector("#list-checkbox");
 
 function createTodo() {
    const createV = create.value;
    const err = document.querySelector("small")
    if(createV == ""){
      err.innerHTML = "add a todo"
    } else{
    var div = document.createElement("div");
    var checkDiv = document.createElement("div");
   var checkboxD = document.createElement("input");
   checkboxD.setAttribute('type' , 'checkbox');
    var todoName = document.createElement("p");
    todoName.innerHTML = createV;
    todoName.classList.add("list-par");
    var del = document.createElement("img");
    del.src = "./images/icon-cross.svg";

    checkDiv.appendChild(checkboxD);
    checkDiv.appendChild(todoName);
    div.appendChild(checkDiv);
    div.appendChild(del);
    div.classList.add("list");
    checkDiv.classList.add("list-left");
    del.classList.add("cross");

    const list = document.querySelector(".lists")
    list.appendChild(div);
    create.value = "";
    err.innerHTML = "";
    saveData();
    }
 };

 //--------delete and line through---------------------///
 const lists = document.querySelector(".lists");
 const list = document.querySelectorAll(".list");
lists.addEventListener("click", function(e) {
  if(e.target.tagName === "INPUT"){
    e.target.nextElementSibling.classList.toggle("dec");
    saveData();
  }else if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    saveData();
  }
});

//---------------change background----------------//
const light = document.querySelector("#light");
const body = document.body;
const creat = document.querySelector(".create");
const todo = document.querySelector(".todo-list");
const listP = document.querySelectorAll(".list-par");

light.addEventListener("click", function(e) {
  body.classList.toggle("back");
  creat.classList.toggle("back");
  todo.classList.toggle("back");
  body.classList.toggle("light")
  dark();
  saveData();
}) ;

//change body background
function dark(){
const body = document.querySelector("body");
  if(body.classList.contains("back")){
    light.src = "./images/icon-moon.svg";
    saveData();
  }
  else {
   light.src = "./images/icon-sun.svg";
   saveData();
  }
}

//-----------------completed---------------//
const complete = document.querySelector("#complete")
 complete.addEventListener("click", function(e) {
  const items = lists.querySelectorAll(".list")
  items.forEach(function (item) {
  const checkbox1 = item.querySelector("input");
  if(!checkbox1.checked){
    item.classList.add("hide");
    saveData();
  }else {
    item.classList.remove("hide");
    saveData();
  }
})
 });

 //------------active------------------//
 const active = document.querySelector("#active")
 active.addEventListener("click", function(e) {
  const items = lists.querySelectorAll(".list")
  items.forEach(function (item){
  const checkbox1 = item.querySelector("input");
  if(checkbox1.checked){
   item.classList.add("hide");
   saveData();
  }else{
    item.classList.remove("hide");
    saveData();
  }
})
 });

 //-----------all-list------------//
 const all = document.querySelector("#all-list");
 all.addEventListener("click", function(e) {
  const items = lists.querySelectorAll(".list")
  items.forEach(function (item){
  const checkbox1 = item.querySelector("input");
  item.classList.remove("hide");
  saveData();
})
 });

 //-------------clear-----------//
 const clear = document.querySelector("#clear");
 clear.addEventListener("click", function(e) {
  const items = lists.querySelectorAll(".list")
  items.forEach(function (item){
  const checkbox1 = item.querySelector("input");
  if(checkbox1.checked){
    item.remove();
    saveData();
  }else {
    item.classList.remove("hide");
    saveData();
  }

})
 });


 //--------------save data-------------//
 function saveData() {
  localStorage.setItem("data", list.innerHTML)
 };

 function showlist(){
  list.innerHTML = localStorage.getItem("data");
 };

 showlist();

 