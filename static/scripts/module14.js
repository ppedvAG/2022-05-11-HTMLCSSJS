// Erst wieder Referenzen auf die verwendeten Elemente anlegen

let amount = document.querySelector("#amount");
let generateButton = document.querySelector("#generate");
let outputDiv = document.querySelector("#output");

// Funktion, die uns unsere Primzahlen generiert
function generatePrimes(amount) {

    // Funktion, die prüft ob eine Zahl eine Primzahl ist
    function isPrime(n) {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    const primes = [];
    const maximum = 1000000;

    while (primes.length < amount) {
        // Generiert eine Zahl, die mindestens 0 ist und maximal unserem maximum entspricht
        const possiblePrime = Math.floor(Math.random() * (maximum + 1));
        // Prüft ob unsere erstellte Zahl eine Primzahl ist
        if (isPrime(possiblePrime)) {
            // Falls ja wird sie zum Array hinzugefügt
            primes.push(possiblePrime);
        }
    }

    return primes;
}

generateButton.addEventListener("click", () => {
    // Hier nehmen wir den Wert der input-Box und konvertieren sie in eine Zahl
    const numberOfPrimes = parseInt(amount.value);
    // Lassen uns dementsprechend viele Primzahlen erstellen
    const primes = generatePrimes(numberOfPrimes);
    // Lassen darstellen welche generiert wurden
    outputDiv.innerText = `Es wurden ${primes.length} Primzahlen generiert: ${primes}`;
})


// Timeouts
// setTimeout(functionCallback, zeitInMs);
// Schieben die Ausführung unserer Funktion um mindestens zeitInMs nach hinten
// Wenn die Ausführung des Codes nach dem Timeout länger dauert als die zeitInMs verzögert sich die Ausführung weiter, da die Ausführung der Funktion nach ganz hinten geschoben wird und somit frühestens nach Ausführung des ganzen synchronen Codes geschehen kann
// setTimeout(function, time) hat auch einen Rückgabewert und zwar eine timeout-Id
// Mittels dieser Timeout id können wir die Ausführung stoppen

// Der Timeout wartet nun 3 Sekunden bis er frühestens ausgeführt werden kann
// Wenn ich auf den Primzahlen generieren Button klicke verzögert sich die Ausführung weiter, da der synchrone Code zuerst ausgeführt wird
let timeoutOne = setTimeout(() => alert("timeoutOne wurde ausgeführt."), 3000);

// Wenn ich verhindern will, dass der timeout ausgeführt wird kann ich das mittels der Timeout-Id stoppen
// clearTimeout(timeoutId)
// Stoppt die Ausführung des jeweiligen Timeouts
// Funktioniert nur wenn clearTimeout() vor dem Timeout selbst ausgeführt wird
clearTimeout(timeoutOne);

// die timeout Funktion wird trotzdem ausgeführt, da er vor dem stoppen ausgeführt wird
//setTimeout(() => clearTimeout(timeoutOne), 4000);

// Beispiel wie es früher ablief eine große Datei zu laden:
// In Pseudocode:
/*
    let myFile = download(hugeImage);
    
    function displayImage() {
        document.querySelector("output").innerText = hugeImage;
    }

    setTimeout(displayImage, 25000);
    Wartet 25 Sekunden bis das Bild dargestellt wird
*/

// setInterval(function, zeitInMs) 
// Führt eine Funktion alle zeitInMs aus

// Erstellen einer Uhr mit setInterval()

// Funktion zum erstellen eines Datums und darstellen des Datums in HTML
function displayTime() {
    const date = new Date();
    outputDiv.innerText = date.toLocaleTimeString();
}
let timeoutTwo = setInterval(displayTime, 1000);
// Auch setInterval gibt eine timeoutId zurück, die wir dann mittels clearInterval beenden können

// Promise selbstständige erstellung:

let promiseOne = new Promise(function (resolve, reject) {
    // Die Funktion, die hier definiert wird, wird immer ausgeführt sobald das Promise constructed wurde
    // Der aufruf von resolve ändert den State von pending zu fulfilled
    setTimeout(() => resolve("Ich habe funktioniert."), 5000);
});

// Können auch mit lambdas definiert werden
let promiseTwo = new Promise((resolve, reject) => {
    // Der aufruf von reject ändert den State von pending zu rejected
    reject(new Error("Ich schlage immer Fehl!"));
    // resolve("Klappt"); würde ignoriert werden
    // reject("Geht nicht!"); würde auch ignoriert werden
});

// Ein Promise kann resolve oder reject immer nur einmal aufrufen
// jeder weitere aufruf wird ignoriert

// reject() Reject kann jeglichen Parameter bekommen, kann auch weggelassen werden, aber die Empfehlung ist es ein Error Objekt zurückzugeben
// resolve() Kann auch jeglichen Parameter erhalten

// reject und resolve werden normalerweise erst nach eingier Zeit aufgerufen, da es sich meist um Code handelt, der länger zum ausführen braucht, aber wir können sie auch sofort aufrufen

// Was im promise Körper enthalten ist, ist der Producing Code
// Das Promise Objekt selbst ist das Bindeglied
// Also fehlt noch unser Consumer

// Für den Consuming Code haben wir eigens Methoden
// promise.then(callback1, callback2)
// callback1 wird ausgeführt, falls das Promise fulfilled wird
// callback2 wird ausgeführt, falls das Promise rejected wird
// callback2 ist optional

// Beispiel für den consuming Code:

// .then() bedeutet, dass wir warten bis das Promise entweder fulfilled oder rejected ist
// und danach mit jeweiligen Ergebnis etwas ausführen oder dieses darstellen
promiseOne.then(
    fulfilled => document.querySelector("#fulfilled").innerText = fulfilled
).catch(error => alert(error));

promiseTwo.then(
    result => alert(result)
).catch(error => document.querySelector("#rejected").innerText = error);
// Der zweite Parmater error ist optional
// Wir könenn Fehler, die in einem Promise auftreten auch mit catch behandeln
// .catch ist dafür gedacht, dass wir in einer .then() Reihe nur einmalig einen Fehlerfall definieren müssen

// fetch-API
// fetch-API ist dafür gedacht, dass wir anderen Seiten einen HTTP-Request senden und dann mit dessen Antwort weiterarbeiten
// Die fetch-API gibt immer ein promise zurück
// ! Im Falle von HTTP 404 (not found) oder 500 (server error) wird nicht rejected
// Wir nutzen nun die fetch-Api um einen Request an eine Fake-API zu senden
// Syntax: für ein get fetch("url")
// der erste Aufruf liefert uns ein response-Objekt zurück
// Dieses müssen wir mit .then() weiterverarbeiten
let firstCall = fetch("https://jsonplaceholder.typicode.com/posts/1");
// Bei diesem Objekt stehen uns wieder einige Methoden zur Verfügung:
// .json() Wandelt den Körper der Response in ein Objekt um
let secondCall = firstCall.then(response => response.json());
// seconCall ist nun ein normales Objekt mit den  Eigenschaften wie auf der URL definiert
secondCall.then(body => console.log(body.title));
// Gibt in der Konsole den Wert des Attributs title aus

// fetch zum Befüllen einer Tabelle benutzen:

function jsonToTable(jsonArray) {
    let tableBody = document.querySelector("tbody");
    for (let i = 0; i < jsonArray.length; i++) {
        // Ist eine Methode für tbody, thead und tfoot, die eine neue Zeile einfügt
        let row = tableBody.insertRow();
        // insertCell() fügt eine neue Zelle in eine bestehende Zeile ein
        row.insertCell().innerText = jsonArray[i].userId;
        row.insertCell().innerText = jsonArray[i].id;
        row.insertCell().innerText = jsonArray[i].title;
        row.insertCell().innerText = jsonArray[i].completed;
    }
}
// Diese Funktion wollen wir nun innerhalb unseres fetches ausführen
let data = fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(jsonArray => console.log(jsonArray));

// Gibt auch für das .then() syntaktischen Zucker
// async & await
// Können bis jetzt nur in Funktionen genutzt werden
// Um eine Funktion als asynchron zu markieren setzten wir das keyword async vor function

async function getTodos() {
    // await verhält sich wie ein then(), funktioniert aber ohne Callbacks
    let todoArray = await fetch("https://jsonplaceholder.typicode.com/todos");
    todoArray = await todoArray.json();
    console.log(todoArray)
    jsonToTable(todoArray);
}

document.querySelector("#fetchTodo").addEventListener("click", getTodos);


// Wollen eine Funktion erstellen, die ein HTTP-Post an die Fake-API sendet

// Klasse für das Objekt, das wir an den Server senden wollen
class Post {
    constructor (userId, title, body) {
        this.userId = userId;
        this.title = title;
        this.body = body;
    }
}

// Form daran hindern die Seite neuzuladen

document.querySelector("form").addEventListener("submit", ev => ev.preventDefault());

async function sendUser() {
    let userId = document.querySelector("#userId").value;
    let title = document.querySelector("#title").value;
    let body = document.querySelector("#body").value;
    const newPost = new Post(userId, title, body);
    let response = await fetch("https://jsonplaceholder.typicode.com/posts",
    {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    );
    console.log(await response.json());
}


document.querySelector("#postButton").addEventListener("click", sendUser);

// Für einen Post-Request benötige ich zusätzlich einen zweiten Parameter
// Dieser ist ein JavaScript Objekt, das die methode, den body sowie die header beinhalten muss
// Beim body muss zusätzlich JSON.stringify(zusendendesObjekt) aufgerufen werden
// Würde wegfallen, wenn wir nur einen string schicken würden

// HTTP-Methods:
// Sind die möglichen Operationen bei einem HTTP-Request
// GET, dient der Anforderung eines Dokuments
// POST, dient dem Senden von Formulardaten/JSons
// PUT, dient auch dem Senden von Daten, aber mit Identifikationsquelle
// V.a. für das Updaten eines Eintrages gedacht
// DELETE, dient dem löschen von daten

