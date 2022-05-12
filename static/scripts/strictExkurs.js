// strict mode in JavaScript
// Setzt uns mehr grenzen
// Dafür gedacht, dass wir cleaner code schreiben und somit weniger Fehler machen
"use strict";
let x = 15;

function count(limit) {
    for (var i = 0; i < limit; i++) {
        console.log(i);
    }
    for (var i = 0; i < limit; i++) {
        console.log(i);
    }
}
