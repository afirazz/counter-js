
let shoppingListItems = ["milk", "eggs", "bread"];

const shoppingList = document.getElementById("shopping-list-items");

const clearList = () => {
    shoppingList.innerHTML = "";
}

const addItem = () => {
    let item = document.getElementById("new-item-text").value;
    shoppingListItems = [...shoppingListItems, item];
    updateItems();
};

const updateItems = () => {
    // First we get the list element and clear it of any existing items
    clearList()
    
    // Then we loop through the shopping list items and add them to the list
    for (const shoppingItem of shoppingListItems) {
      let itemElement = document.createElement("li");
      itemElement.innerText = shoppingItem;
      shoppingList.appendChild(itemElement);
    }
};

const clearField = () => {
    let textField = document.getElementById("new-item-text");
    textField.value = "";
}

updateItems()