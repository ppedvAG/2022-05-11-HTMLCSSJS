// Die einfachste zu erreichende Node ist die Root-Node, also das gesamte Document

let doc = document; // Gibt das gesamte Dokument zurück
// document ist eine globale Variable, deren Wert immer das derzeitige HTML-Dokument ist

// Eine weitere einfach zu erreichende node ist der body-Tag
let body = doc.body; // Der body ist eine feste property vom Dokument

// Zum debuggen eignen sich die Dev-Tools im Browser, da ich dort unter dem Reiter Elemente alle Tags anklicken kann und diese dann im Reiter Konsole mit $0 ansprechen kann

// Node-Types
// Geben auskunft um was für eine Art von Node es sich handelt:
// nodeVariable.nodeType 
// Das prop nodeType gibt uns eine Zahl zurück

console.log(doc.nodeType); // 9 => steht für das Dokument selber
console.log(body.nodeType); // 1 => Steht für ein Element-Node

// Jedes HTML Element ist eine Node, aber nicht jede Node ist ein HTML-Element
// Nur nodes mit wert 1 sind Elemente

// nodeName-Abfrage
// nodeVariable.nodeName

console.log(body.nodeName); // => BODY

// Traversing the DOM
// Wie wir gezielt einzelene Elemente ansprechen

// querySelectors => Funktionieren mit CSS Syntax
// getElementSelektoren => sprechen direkt Klassen, Id's, Tags oder Namen an

// Element per Tagnamen finden

// Allgemeiner Syntax:
// node.querySelector("tagNamen"); => das erste entsprechende Element wird zurückgegeben => einzelnes Element
// node.querySelectorAll("tagNamen"); => gibt alle entsprechenden Elemente zurück => Array

// node.getElementsByTagName("tagNamen"); => gibt alle entsprechenden ELemente zurück => Array
let div1 = document.querySelector("div"); // Gibt mir die erste div zurück, die auf der Seite gefunden wird

let div2 = document.querySelectorAll("div"); // Gibt mir eine NodeList(Array) bestehend aus allen divs zurück 
let div3 = document.getElementsByTagName("div"); // Gibt mir eine HTMLCollection(Array) bestehend aus allen divs zurück

// Element per Id finden:

// node.querySelector("#idNamen"); => gibt das Element mit der entsprechenden Id zurück
// node.querySelectorAll("#idNamen"); => gibt alle Elemente mit der entsprechenden Id zurück => Array

// node.getElementsById("idName"); => gibt ein einziges Element mit der Id zurück

let tr1 = document.querySelector("#table-headings"); // Einzelnes Objekt
let tr2 = document.querySelectorAll("#table-headings"); // NodeList => muss wieder per Index angesprochen werden
// die querySelectors funktionieren mit CSS-Selekotren, d.h. im Falle von Id brauchen wir den #

let tr3 = document.getElementById("table-headings"); // Einzelnes Objekt
// Hier wird das Id-Attribut aller Elemente mit dem Parameter der Methode verglichen und der erste Treffer wird zurückgegeben

// Elemente per Klasse finden:

// node.querySelector(".ClassName"); => gibt das Element mit der entsprechenden Klasse zurück
// node.querySelectorAll(".ClassName"); => gibt alle Elemente mit der entsprechenden Klasse zurück => Array

// node.getElementsByClass("className"); => gibt alle Elemente mit der Klasse zurück

let tr4 = document.querySelector(".row"); // => erste Element mit der Klasse
let tr5 = document.querySelectorAll(".row"); // NodeList mit allen Elemente mit der Klasse

let tr6 = document.getElementsByClassName("row"); // HTMLCollection mit allen Elementen der Klasse

// Der querySelector ist flexibler, da ich auch die Kombinatoren aus CSS benutzen kann um sehr spezifisch Elemente ohne Klassen oder Id's anzusprechen


// Wichtige ElementNode-Props

// nodeVariable.children => Gibt uns alle Kindselemente zurück
let td1 = tr4.children;

// nodeVariable.parentElement => Gibt das Elternelement der aufrufenden Node zurück
let tbody = tr4.parentElement;

// nodeVarialbe.innerHTML => Gibt alles zurück, was zwischen dem Start- und dem End-Tag steht, d.h. auch andere HTML-Elemente
let tbodyInnerHtml = tbody.innerHTML; // Auch die Tags und die Kommentare

// nodeVariable.innerText => Gibt den SICHTBAREN Text zwischen start und endtag zurück
let tbodyInnerText = tbody.innerText; // Nur die Inhalte der td-Elemente

// let text = prompt("Gib einen Text ein:\n");
let text = "Test";

// Übung:
// Speicher die div mit der Id Übung in eine Variable und setzte ihren Textinhalt auf die Variable text, die wir in Zeile 88 definiert haben
// 
let divÜbung = document.querySelector("#übung");
divÜbung.innerText = text;

// Node-Methoden
// document.createElement("tag-Name") => liefert ein neues Objekt zurück, das ein HTML-Element des entsprechenden Tag-Namens ist

let p = document.createElement("p");
p.innerText = "Ich bin ein neuer p-Tag";
// Ist bis jetzt nicht auf der Seite zu sehen, sonder nur im Speicher vorhanden
// Bevor wir ihn auf der Seite sehen können, müssen wir ihn in unsere DOM einfügen

// nodeVariable.appendChild(objektVariable)
divÜbung.appendChild(p);
// Dadurch wird der neue p-Tag in die div eingefügt
// mit .appendChild(neuerTag) wird der Tag immer am Ende des Parents eingefügt

// Wir könenn aber auch spezifischer sagen, wo wir das neue Element einfügen wollen
// nodeVariable.insertBefore(neueElement, referenzElement)
// nodeVariable muss der parent vom referenzElement sein
// das neue Element wird dann direkt vor dem referenzElement eingefügt

// Wir wollen einen neuen p-Tag erstellen und diesen direkt vor dem gerade eingefügten p-Tag in die Div einfügen

let p2 = doc.createElement("p");
p2.innerText = "Ich stehe jetzt vor dem alten p-Tag";
divÜbung.insertBefore(p2, p);
// p2 direkt über dem p-Tag mit Text "Ich bin ein neuer p-Tag" stehen

// Können aber auch Elemente entfernen
// nodeVariable.removeChild(zuEntfernendeNode)
// nodeVariable muss der Parent der zu entfernenden sein
// removeChild entfernt das referenzierte Kindselement aus der DOM
divÜbung.removeChild(p);
// Entfernt den p-Tag mit Text "Ich bin ein neuer p-Tag"

// Verändern von bestehenden Elementen
// Hinzufügen/Ändern von Id's
p2.id = "neuerTag"; // Hier fügen wie eine neue id ein
divÜbung.id = "neueÜbung"; // Bestehende Id wird geändert
p2.id = ""; // Bestehende ID wird entfernt
// Wirkt sich auch auf die Styles aus

// Hinzufügen und löschen von Klassen
// Klassen werden in einem Array gespeichert
// Abrufen von vorhanden Klassen:
// nodeVariable.classList => Gibt uns das Array mit allen Klassen zurück
let pClasses = p2.classList; // leeres Array, da p2 keine Klassen hat

// Hinzufügen von Klassen:
// nodeVariable.classList.add("KlassenName");
p2.classList.add("Test-Klasse"); // Fügt die neue Klasse Test-Klasse hinzu
p2.classList.add("Test-Klasse2"); // Fügt Test-Klasse2 hinzu
// Wirkt sich auf das Styling aus, falls diese Klasse Style-Regeln besitzt

// Löschen von Klassen:
// nodeVariable.classList.remove("KlassenName");
p2.classList.remove("Test-Klasse2"); // Entfernt Test-Klasse2
// Wirkt sich auch auf das Styling aus, da Regeln evtl. nicht mehr gelten


// Wir können auch direkt auf die Attribute im Style zugreifen und diese verändern
// nodeVariable.style
// Fässt alle möglichen stylings zusammen
let divStyle = divÜbung.style;
console.log(divStyle); // Sehr lange liste an styles
// Können die einzelnen styles über dot- oder bracket-Notation ansprechen
// Wenn etwas in CSS mit Bindestrich geschrieben war (z.B. font-size)
// wird es in JavaScript zu camelCase umgewandelt (=> fontSize)
p2.style.fontSize = "40px";

// Übung zu Style:
// Speichere den table-tag in einer Variable
// und ändere die Hintergrundfarbe des Tables auf blau
let table = document.querySelector("table");

table.style.backgroundColor = "blue";