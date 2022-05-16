// 1. Referenz auf das Element, bei dem auf das Event geachtet werden soll
// 2. Funktion, die ausgeführt werden soll
// 3. Auf welches Event geachtet werden soll
// "click" 

// Referenzen anlegen

let addButton = document.querySelector("#createItem");
let deleteButton = document.getElementById("deleteItems");
let ulBody = document.querySelector("#listBody");

// funktion um ein neues li-Element zu erstellen und in den ListBody einzufügen

function addListItem() {
    let newLi = document.createElement("li");
    newLi.innerText = "neuer Eintrag";
    ulBody.appendChild(newLi);
}

addButton.addEventListener("click", addListItem);

// funktion um die Liste zu leeren

function deleteListItems() {
    ulBody.innerHTML = "";
}

deleteButton.addEventListener("click", deleteListItems);

// FUnktion um einzelene Elemente aus der List ezu löschen
function deleteEntry(ev) {
    console.log(ev.target);
    // Beim löschen brauchen wir eine Referenz auf das Elternelement und eine Referenz auf das zu löschende Element
    ulBody.removeChild(ev.target);
}

ulBody.addEventListener("click", ev => deleteEntry(ev));

