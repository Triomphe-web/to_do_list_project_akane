let add_button = document.getElementById("btn_add");
let list_task_added = document.getElementById("task_added");
let input = document.getElementById("task_input");


// methode
add_button.addEventListener("click", (e) => {
  e.preventDefault();
  let para = document.createElement("li");
  para.classList.add("task");
  para.style.textTransform = "uppercase";
  para.style.listStyleType = "none";
  para.style.padding = "10px";
  if (input.value == "") {
    alert("Remplissez le champ");
  } else {
    para.innerHTML = input.value;
    list_task_added.append(para);
  }
});

list_task_added.addEventListener("click", (e) => {
  if (e.target.nodeName === "LI") {
    console.log(e.target);
    e.target.classList.toggle('checked');
    setTimeout(()=>{
      e.target.style.display = "none";
    }, 300)
  }
})

