// Referenzen auf meine Elemente anlegen

let createButton = document.querySelector(".btn-success");
let taskName = document.querySelector("#taskName");
let listBody = document.querySelector("ul");

// Anforderungen:
//// Neues li in der ul einfügen mit Klasse: list-group-item und dem Textinhalt von Taskname
//// taskName soll nach Absenden geleert werden
// beim klick auf createButton darf die Seite nicht neuladen

function appendListitem(ev) {
    // erstellt das Element
    let newLi = document.createElement("li");
    // Fügt die Klasse hinzu
    newLi.classList.add("list-group-item");
    // Setzen den Textinhalt auf den Wert in der Input-Box
    newLi.innerText = taskName.value;
    // leeren die Input-Box
    taskName.value = "";
    // neues Listitem wird angehängt
    listBody.appendChild(newLi);
}

createButton.addEventListener("click", ev => appendListitem(ev));
// Verhindert das Neuladen
document.querySelector("form").addEventListener("submit", ev => ev.preventDefault());

// Wir wollen die Listitems so erweitern, dass sie sich grün einfäbren wenn man auf sie klickt
// Falls man dann ein zweites mal auf sie klickt sollen sie gelöscht werden

function updateListitem(ev) {
    let target = ev.target;
    // Prüfen hier ob das richtige Element angeklickt wurde
    if (target.nodeName === "LI") {
        console.log("li wurde geklickt");
        // Müssen nun prüfen ob das Element bereits über die Klasse list-group-item-success verfügt
        // classList.contains("KlassenName")
        // true, falls die Klasse in der Klassenliste enthalten ist
        if (target.classList.contains("list-group-item-success")) {
            // Falls es hier true ist, ist die Klasse bereits vorhanden und das Element soll gelöscht werden
            listBody.removeChild(target);
            console.log(`${target} wird gelöscht.`);
        }
        else {
            target.classList.add("list-group-item-success");
            // Um klarer anzuzeigen, dass eine Aufgabe erledigt ist soll sie zusätzlich noch durgestrichen werden
            target.style.textDecoration = "line-through";
            console.log(`${target} hat die Klasse list-group-item-success erhalten.`);
        }
    }
}

listBody.addEventListener("click", ev => updateListitem(ev));