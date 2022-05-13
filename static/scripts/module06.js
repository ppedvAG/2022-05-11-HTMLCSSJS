// Vordefinierte Objekte in JS
// Objekte sind an sich einfach Schlüssel=Wert Paare
// Objekte beinhalten Funktionen, dann sprechen wir von Methoden

// String-Objekt

// String enhält eine Eigenschaft
// nameDerVariable.length
// .length enthält die Länge des Strings, also die Anzahl der enthaltenen Zeichen
let testString = "Der schnelle braune Fuchs springt über den faulen Hund";
testString.length; // => 54
let fullName = "Marius Sommer"; 
fullName.length; // => 13 Zeichen

// Methoden des Strings

// namenDerVariable/"string".methodenName(parameter);

// .charAt(zahl) => Sagt mir welcher Buchstabe an der Stelle "zahl" steht
// Funktioniert über den Index des Strings
// strings beginnen mit Index 0
fullName.charAt(0); // => "M"
fullName[0] // => "M"
// Indexlänge ist also length - 1
fullName[12]; // => "r"
fullName.charAt(12); // => "r"
testString[53]; // => "d"
testString.charAt(53); // => "d"

// fullName.charCodeAt(index) => Zeigt mir den Unicode-Wert des Zeichens an der Stelle index
fullName.charCodeAt(0) // => 77 => Unicode für "M"

// fullName.concat(string1,...stringN) => Ein neuer String wird zurückgegeben, der den aufrufenden String mit den Strings im Parameter kombiniert
let combinedString = fullName.concat(testString);
let combinedAlt = fullName + testString; // Gültige Alternative zur Concat Methode

// fullName.indexOf("Gesuchte Zeichen", Startposition)
// Falls Startposition weggelassen wird, wird es durch 0 ersetzt
// indexOf("a") => Gibt die Indexposition des ersten gefundenen a zurück
// falls es gar nicht gefunden wird, wird -1 zurückgegeben
fullName.indexOf("a"); // => 1, da a an Index 1 steht
fullName.indexOf("Z"); // => -1, weil es nicht im Namen vorkommt
fullName.indexOf("r"); // => 2, da er nur das erste gefunden zurückgibt
fullName.indexOf("r", 5) // => 12

// fullName.lastIndexOf("gesuchtes Zeichen", startposition);
// auch hier ist default für startposition 0
// es sucht von vorne und gibt die letzte gefunden Position zurück
// Gibt das letzte gefunden Zeichen zurück
// Falls es nicht gefunden wird -1
fullName.lastIndexOf("r"); // => 12

// fullName.slice(startpunkt, endpunkt)
// default für start = 0
// default für ende = länge des Strings
// GIbt einen neuen String zurück, der bei startposition beginnt und bis vor den endindex geht
preName = fullName.slice(0,6); // "Marius"
// Der Endpunkt ist nicht inklusive, d.h. wenn ich die ersten 5 Buchstaben haben will: slice(0,6)
// Wenn ich nur einen Parameter übergebe wird er als Startpunkt genommen
let lastName = fullName.slice(7);
// Wenn ich gar keinen parameter angebe, wird der String 1:1 kopiert
let copyOfName = fullName.slice();

// fullName.split("zeichen")
// Der String wird dann bei jedem AUftreten von zeichen aufgespalten
// Gibt ein Array zurück, das aus den aufgespaltenen Strings besteht
// Das Zeichen bei dem getrennt wird, wird rausgeschnitten
fullName.split(" "); // ["Marius", "Sommer"] => Enthält das leerzeichen nicht
fullName.split("m"); // ["Marius So", "", "er"] => die "m" werden ausgeschnitten 

// .toLowerCase()
// .toUpperCase()
// Geben einen String zurück der eine klein-/großgeschriebene Kopie des Originalstrings ist

let testCapital = testString.toUpperCase(); // enthält den Teststring, aber diesmal ist alles großgeschrieben
let testSmall = testCapital.toLowerCase(); // Teststring, aber alles kleingeschrieben

// Übung:
// Schreibe eine Funktion, die einen String als Parameter erhält
// und in der Konsole ausgibt aus wie vielen klein und großbuchstaben der String besteht
function countChars(text) {
    let groß = 0;
    let klein = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i].toLowerCase() == text[i].toUpperCase()) {
            continue;
        }
        else if (text[i] == text[i].toLowerCase()) {
            klein++;
        }
        else {
            groß++;
        }
    }
    console.log(`Klein: ${klein} | Groß: ${groß}`);
}
// countChars("TesT")
// Kleinbuchstaben: 2, Großbuchstaben: 2
// Bonusaufgabe: leerzeichen und zahlen sollen nicht mitgezählt werden

function countCharsUnicode(text) {
    let groß = 0;
    let klein = 0;
    let charCode;
    for (let i = 0; i < text.length; i++) {
        charCode = text.charCodeAt(i);
        if (charCode > 64 && charCode < 91) {
            groß++;
        }
        else if (charCode > 96 && charCode < 123) {
            klein++;
        }
    }
    console.log(`Klein: ${klein} | Groß: ${groß}`);
}

// SwapCase
// TeSt => tEsT

function swapCase(text) {
    let returnString = "";
    for (let i = 0; i < text.length; i++) {
        let currentChar = text[i];
        if (currentChar == currentChar.toUpperCase()) {
            currentChar = currentChar.toLowerCase();
            returnString += currentChar;
        }
        else {
            currentChar = currentChar.toUpperCase();
            returnString += currentChar;
        }
    }
    return returnString;
}

let testSwap = swapCase("HaLlOweRtsaS");

// Arrays
// Sind eine Art Liste
// Sind auch per Index ansprechbar
// Können beliebig viele Werte enthalten
// Können verschachtelt werden => multidimensionales Array
// Verfügen auch über die Eigenschaft length

// Wie definieren wir ein Array?
// Array literal:
let arr1 = [1, 2, 3, 4, 5, "hallo"];
// Datentypen können gemischt werden

// Constructor:
let arr2 = new Array(1, 2, 3, 4, 5, 6);

// arr1.length => 6, sagt uns wie viele Elemente im Array enthalten sind

// Array Methoden:
// arr1.concat(arr2) => Gibt ein neues Array zurück, das aus arr1 und arr2 zusammengefügt ist

// .indexOf("Such", Start) => Gibt den Index des ersten Auftretens zurück
// .lastIndexOf("Suche", Start) => GIbt das letzte Auftreten als Index zurück
// .slice(start, ende) => Kopiert das Array von startposition bis exklusive Ende
// default sind 0 und länge

// arr1.join("seperator") 
// Gibt einen String zurück, der jedes Zeichen des Arrays enhätl wobei zwischen den Elementen jeweils der sperator eingefügt wurde
// default seperator = ,

arr1.join(","); // => "1,2,3,4,5,Hallo"

// .toString()
// Gibt einen String zurück, der jedes Zeichen des Arrays enhält wobei zwischen den Elementen jeweils ein Komma eingefügt wurde 
// Also wie .join() oder .join(",")

// arr1.sort() => Sortiert alphabetisch aufsteigend

let arr3 = [100, 10000, 999, 90, 1900]; // Wir falsch sortiert

// Zum Entfernen von Elementen:

// arr1.pop() => Entfernt das letzte Element aus dem Array und gibt es uns zurück
// Verändert das bestehende Array
let numberOne = arr3.pop(); // numberOne => 1900
// arr1.shift() =>  Entfernt das erste Element aus dem Array und gibt es uns zurück
// Verändert das bestehende Array
let numberTwo = arr3.shift(); // numberTwo = 100

// Zum Hinzufügen von Elementen:

// arr1.unshift(Element1,...ElementN) // Fügt die Elemente am Anfang des Arrays an
// Verändert das bestehende Array
// Rückgabe: die neue länge des Arrays

let numberThree = arr3.unshift(50, 40); // [50, 40, 10000, 999, 90] Rückgabe => 5

// arr1.push(Element1,...ElementN) // Fügt die Elemente am Ende des Arrays an
// Verändert das bestehende Array
// Rückgabe: die neue länge des Arrays

let numberFour = arr3.push(24); // [50, 40, 10000, 999, 90, 24] Rückgabe => 6

// Übung:
// Wir wollen eine Funktion erstellen, die ein beliebig langes Array übergeben bekommt
// Die Funktion soll über das Array iterieren und die größte Zahl aus dem Array zurückgeben

function returnLargest(arr) {
    let zahl1 = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (zahl1 < arr[i]) {
            zahl1 = arr[i];
        }
    }
    console.log(`Die größte Zahl im Array ist ${zahl1}`);
    return zahl1;
}
// returnLargest(arr3) => 10000

// Übung:
// Wir wollen eine Funktion erstellen, die ein beliebig langes Zweidimensionales Array übergeben bekommt
// Die Funktion soll über das Array iterieren und die größte Zahl aus dem Array zurückgeben
// [1,2,3,4,5]
/* [ [1,2,3,4],
    [50, 60, 100],
    [80, 90, 12123]
]
*/
let multiArr = [ [1,2,3,4],
[50, 60, 100],
[80, 90, 12123]
];

function returnLargestNested(arr) {
    let zahl1 = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (zahl1 < arr[i]) {
            zahl1 = arr[i];
        }
    }
    console.log(`Die größte Zahl im Array ist ${zahl1}`);
    return zahl1;
}
// returnLargest(arr3) => 10000

// arr.splice(Start,AnzahlLöschung, Element1, ELement2, ElementN...)
// Fügt an Index "start" beginnend die neuen Elemente ein und löscht davor AnzahlLöschung aus dem Array


