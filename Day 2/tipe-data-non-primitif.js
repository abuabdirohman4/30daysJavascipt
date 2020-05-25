// 1. Tipe Data non-Primitif

// Macamnya :
// 1. Array
// 2. Object
// 3. Function

// let siswa = ["Asrul", "Anis", "Tisha", "Rifky"]
// console.log(siswa[1])
// hasilnyya: Anis

// Tipe data ini tidak bisa dibandingkan
// let nilai = [1, 2, 3]
// let angka = [1, 2, 3]
// console.log(nilai === angka)
// hasilnya: false

// 2. Number

// let panjang = 30
// let lebar = 21.52
// let luas = panjang * lebar
// console.log("Luas adalah ", luas)
// Hasilnya: Luas adalah 645.6

// 3. Math

// let d = 14
// let r = d / 2
// let luas = Math.PI * r * r
// console.log(luas)
// hasilnya: 153.93804002589985
// console.log(Math.round(luas))
// hasilnya 154

// 4. String

// let nama = "Asrul Harahap"
// let alamat = `Jl. Tanah Kusir II
//              Gang Pramuka II
//              Kelurahan Kebayoran Lama Selatan
//              Kecamatan Kebayoran Lama
//              Kota Jakarta Selatan
//              DKI Jakarta - 12240
//              Indonesia           
// `
// let pekerjaan = 'Full Stack Developer'

// Menggabungkan String
// let firstName = "Asrul"
// let lastName = "Harahap"
// let fullName = firstName + " " + lastName
// console.log(fullName)
// hasil: Asrul Harahap

// dengan Template Literal
// console.log(`${firstName} ${lastName}`)
// hasil: Asrul Harahap

// Macam String:
// 1. .length
// let nama = "Anis Fikriyyah"
// console.log(nama.length)
// hasil: 14

// 2. .toUpperCase()
// let nama = "Anis Fikriyyah"
// console.log(nama.toUpperCase())
// hasil: ANIS FIKRIYYAH

// 3. .toLowerCase()
// let nama = "ANIS FIKRIYYAH"
// console.log(nama.toLowerCase())
// hasil: anis fikriyyah

// 4. .substr()
// let nama = 'Abu Abdirohman'
// console.log(nama.substr(4,10))

// 5. .split()
// let nama = 'Asrul Harahap'
// console.log(nama.split(' '))
// hasil: ["Asrul", "Harahap"]
// let firstName = 'Asrul'
// console.log(firstName.split(''))
// hasil: ["A", "s", "r", "u", "l"]
// let countries = 'Asrul, Anis, Tisha, Lan, Rifki'
// console.log(countries.split(', '))
// hasil: ["Asrul", "Anis", "Tisha", "Lan", "Rifki"]

// 6. .trim()
// let nama = "   Anies Baswedan                     "
// console.log(nama)
// hasil:    Anies Baswedan                      
// console.log(nama.trim())
// hasil: Anies Baswedan

// 7. .repeat()
// let mood = 'bahagia'
// console.log(mood.repeat(10))