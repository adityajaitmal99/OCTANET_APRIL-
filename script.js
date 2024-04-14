function addItem() {
    var inputValue = document.getElementById("todoInput").value;
    if (inputValue === '') {
        alert("Please enter a to-do item!");
        return;
    }

    var listItem = document.createElement("li");
    listItem.textContent = inputValue;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function() {
        listItem.remove();
    };

    listItem.appendChild(deleteButton);
    document.getElementById("todoList").appendChild(listItem);

    document.getElementById("todoInput").value = "";
}