// 1. Boolean

let punyaCinta = false
let udahNikah = true
let lebihTua = 40 > 13

// 2. Operator

// Assignment Operator
let usia = 25

let nilai = 19
nilai += 20
console.log(nilai)
// hasilnya: 39

// Operator Aritmatika
let bil1 = 10
let bil2 = 5
console.log(bil1 * bil2)
// hasil: 50

// Operator Perbandingan
console.log(5 > 1)
// hasilnya: true, karena 5 lebih besar dari 1
console.log(2 <= 3)
// hasilnya: true, karena 2 lebih kecil dari 3
console.log(3 == 2)
// hasilnya: false, karena 3 tidak sama dengan 2
console.log(0 == false)
// hasilnya: true, karena 0 dianggap false dalam javascript
console.log(1 === true)
// hasilnya: false, karena tipe data berbeda

// Operator Logika
console.log(5 > 3 && 10 > 5)
// hasil: true
console.log(true || 1 > 5)
// hasil: true
console.log(!true)
// hasil: false

// Operator Kenaikan dan Penurunan
// Pra
let hitung = 0
console.log(++hitung)
// hasil: 1
console.log(hitung)
// hasil: 1

// Pasca
let hitung = 0
console.log(hitung--) // 0
console.log(hitung)   // -1

// Operator Ternary
let sedangHujan = true
sedangHujan
    ? console.log('Kamu butuh payung')
    : console.log('Slow aja hari cerah kok')
// hasil: Kamu butuh payung