
let shoppingListItems = ["milk", "eggs", "bread"];

const addItem = () => {
    let item = document.getElementById("new-item-text").value;
    shoppingListItems = [...shoppingListItems, item];
    item = "";
    updateItems();
};

const updateItems = () => {
    // First we get the list element
    let listElement = document.getElementById("shopping-list-items");
    // Then we clear it of any existing items
    listElement.innerHTML = "";
    
    // Then we loop through the shopping list items and add them to the list
    for (const shoppingItem of shoppingListItems) {
      let itemElement = document.createElement("li");
      itemElement.innerText = shoppingItem;
      listElement.appendChild(itemElement);
    }
};

const clearField = () => {
    let textField = document.getElementById("new-item-text");
    textField.value = "";
}

updateItems()
