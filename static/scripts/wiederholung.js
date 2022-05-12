// Variablen definieren:
// var veraltet

// let neue Variante, best practice
// const, keine neuzuweisung möglich, veränderung schon

// Primitives:
// 7 gibt es insgesamt

// number - Integer und floats
// string - Texte
// booleans - Wahr/falsch
// null - "leere" daten

// bigInt - falls number zu groß wird
// undefined - wenn nie ein wert zugewiesen wird
// symbol - einzigarter wert

let id = Symbol("id")
console.log(id.description)
id = id.toString()
console.log(id)

