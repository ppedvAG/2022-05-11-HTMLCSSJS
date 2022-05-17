let upload = document.querySelector("#fileupload");
let output = document.querySelector("#output");

upload.addEventListener("change", function() {

    const reader = new FileReader();
    if (reader) {

        // loadstart wird ausgelöst sobald das einlesen der Datei beginnt
        reader.addEventListener("loadstart", onStart);

        // load wird ausgelöst wenn der Einleseprozess erfolgreich beendet wurde
        reader.addEventListener("load", onLoad);

        // loadend wird ausgelöst sobald der Einleseprozess beendet wurde, egal ob mit Fehler oder ohne
        reader.addEventListener("loadend", onLoadend);

        // abort, wird ausgelöst wenn der Prozess abgebrochen wurde
        reader.addEventListener("abort", onAbort);

        // error, wird ausgelöst falls ein Fehler auftritt
        reader.addEventListener("error", onError);

        // progress, wird ausgelöst wenn ein byte eingelesen wurde, aber höchstens alle 50 ms
        reader.addEventListener("progress", onProgress);
        //! liest die Datei nur als string ein
        //reader.readAsText(this.files[0]);
        //! Im Falle von Bildern:
        reader.readAsDataURL(this.files[0]);
    }
    else {
        output.innerText = "Ihr Browser unterstützt den FileReader nicht";
        console.log("FileReader wird nicht unterstützt");
    }

});

function onStart() {
    console.log("Einleseprozess wurde gestartet.");
}

function onLoad() {
    console.log("Prozess wurde abgeschlossen.");
    // ! Im Falle von Text
    //output.innerText = this.result;
    // ! Im Falle von Bildern:
    let img = document.createElement("img");
    img.src = this.result;
    output.appendChild(img);
}

function onLoadend() {
    console.log("Einlesen beendet");
}

function onAbort() {
    console.log("Prozess wurde durch den User abgebrochen.");
}

function onError(ev) {
    console.log(`Es trat ein Fehler auf: ${ev.error}`);
}

function onProgress(ev) {
    console.log("Wird eingelesen...");
    console.log(`Anzahl Bytes: ${ev.total}`);
}


// WebWorker sind eigenständige JavaScript Dateien
// Wir können die von unserem "Hauptskript" aus aufrufen und dann arbeiten diese parallel auf einem anderen Thread => einzige Arte JavaScript Multithreaded zu machen

// Dafür müssen wir unseren Worker erstellen
const worker = new Worker("./webworker.js");

// Die Arbeit mit Webworkern funtkioniert mittels Nachrichten
// Wir schicken eine Nachricht an den Worker und dieser reagiert auf sie

document.querySelector("#generate").addEventListener("click", () => {
    const amount = document.querySelector("#amount").value;
    worker.postMessage({
        command: "generate",
        amount: amount
    });
});

// Wenn der Worker uns eine Nachricht sendet müssen wir diese mittels EventListenener erwarten
worker.addEventListener("message", message => {
    document.querySelector("#outputWorker").innerText = `Es wurden ${message.data} Primzahlen generiert!`;
});

// Wenn wir den Worker beenden wollen:
// worker.terminate(); // beendet den Worker sofort

