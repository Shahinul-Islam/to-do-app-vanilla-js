// target input field elements
const inputField = document.getElementById("input-field");
// console.log(inputField);

inputFieldText = "";
//target add buttons
const addBtn = document.getElementById("submit");
// console.log(addBtn);

// target ol list
const olList = document.getElementById("task-ol");
addBtn.addEventListener("click", function () {
  let li = document.createElement("li");
  li.innerText = inputField.value;
  li.classList.add("li-property");
  //   olList.appendChild(li);

  //   console.log(li);
  inputField.value = "";

  //edit btn
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("btn-style");
  olList.appendChild(editBtn);
  //add functionality to edit button
  editBtn.addEventListener("click", function () {
    let editThis = li.firstChild;
    // console.log(editThis);
  });
  //delete btn
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("btn-style");
  deleteBtn.setAttribute("class", "delete-item");
  olList.appendChild(deleteBtn);
  //added functionality to delete button
  deleteBtn.addEventListener("click", function () {
    li.remove();
    deleteBtn.style.visibility = "hidden";
    editBtn.style.visibility = "hidden";
  });

  //add all the items into a div
  const div = document.createElement("div");
  div.setAttribute("class", "list-item");
  div.appendChild(li);
  div.appendChild(editBtn);
  div.appendChild(deleteBtn);
  olList.appendChild(div);
});
