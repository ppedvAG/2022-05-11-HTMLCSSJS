//! Cookies

let createCookie = document.querySelector("#createCookie"); 
let displayCookie = document.querySelector("#displayCookie"); 
let output = document.querySelector("#cookies"); 

// Ohne ExpireDate
function setCookie() {
    let exampleCookie = "ich bin ein cookie";
    document.cookie = `example=${exampleCookie};`;
}

// Mit ExpireDate
function setCookieWithDate() {
    let exampleCookie = "ich bin ein cookie mit expirationdate";
    // dynamisches Expirationdate:
    let tempDate = new Date();
    // Date ist ein vordefiniertes Objekt um Daten darzustellen
    // der aufruf new Date() gibt uns das derzeitige Datum zurück
    // Wir basteln uns nun mittels des temporären Datums unser neues Ablaufdatum
    // new Date(Jahr, Monat, Tag)
    // Ziel: unser Cookie soll 10 Tage gültig sein
    let expirationdate =  new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate() + 10);
    console.log("Neues Datum: " + expirationdate);
    console.log(tempDate);
    document.cookie = `example2=${exampleCookie}; expires=${expirationdate}`;
}

function showCookies() {
    let cookies = document.cookie;
    cookies = cookies.split(";");
    for (let i = 0; i < cookies.length; i++) {
        output.innerText += cookies[i];
        output.innerText += "\n";
    }
}

createCookie.addEventListener("click", setCookie);
createCookie.addEventListener("click", setCookieWithDate);
displayCookie.addEventListener("click", showCookies);

// Cookies per Code löschen:
let deleteCookie = document.querySelector("#deleteCookies");

function clearCookies() {
    // Wenn wir alle löschen wollen müssen wir wie oben vorgehen
    let cookieArray = document.cookie;
    cookieArray = cookieArray.split(";");
    // Um einen cookie zu löschen, setze ich ihn neu und gebe ihm ein expirationdate in der Vergangenheit
    let pastDate = new Date(0); // 01.01.1970 00:00:00
    for (let i = 0; i < cookieArray.length; i++) {
        document.cookie = cookieArray[i] + `;expires=${pastDate};`
        // Setzen das expirationdate jedes cookies auf den 01.01.1970 => werden dann gelöscht
    }
}

deleteCookie.addEventListener("click", clearCookies);

// ! localStorage und sessionStorage
// Funktionieren identisch, nur davon Abhängig was vor dem Methoden/Eigenschaftsaufruf steht

// Referenz auf die buttons und das output-Element
let addStorage = document.querySelector("#addStorage");
let displayStorage = document.querySelector("#displayStorage");
let deleteStorage = document.querySelector("#deleteStorage");
let outputStorage = document.querySelector("#outputStorage");

function insertStorage() {
    // Fügt ein Schlüssel-Wert paar mit schlüssel "example" und wert "Ich bin im localStorage gespeichert" hinzu
    localStorage.setItem("example", "Ich bin im localStorage gespeichert");
}

function clearStorage() {
    // Löscht alles aus dem localStorage
    localStorage.clear();
}

function showStorage() {
    // Funktioniert für ein Element mit bekanntem Schlüssel ganz gut
    //outputStorage.innerText = localStorage.getItem("example");
    // outputStorage.innerText = localStorage["example"];
    // ! Wird aber problematisch sobald wir mehrere Schlüssel haben und eventuell auch deren Namen nicht kennen
    // * For-Schleife mit local/sessionStorage
    for (let i = 0; i < localStorage.length; i++) {
        let currentKey = localStorage.key(i); // Gibt mir den Schlüssel an Indexposition i wieder
        outputStorage.innerText += localStorage.getItem(currentKey) + "\n";
    }
}

addStorage.addEventListener("click", insertStorage);
displayStorage.addEventListener("click", showStorage);
deleteStorage.addEventListener("click", clearStorage);