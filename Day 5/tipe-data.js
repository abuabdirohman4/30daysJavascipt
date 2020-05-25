// 1. Array

// let peliharaan = []
// let makanan = ["pisang", "susu", "indomie"]
// console.log(makanan[2])
// hasil: indomie

// 2. Ubah nilai Array

// let makanan = ["pisang", "susu", "indomie"]
// console.log(makanan[2])
// // hasil: indomie
// makanan[2] = "Nasi"
// console.log(makanan[2])
// hasil: Nasi

// 3. .concat()

// let buah = ['pisang', 'jeruk', 'mangga', 'lemon']
// let sayuran = ['Tomat', 'Kentang', 'Kubis', 'Bawang', 'Wortel']
// let isiKulkas = buah.concat(sayuran)
// console.log(isiKulkas)
// hasil: ['pisang', 'jeruk', 'mangga', 'lemon', 'Tomat', 'Kentang', 'Kubis', 'Bawang', 'Wortel']

// 4. .length()

// let siswa = ["Anis", "Asrul", "Tisha"]
// console.log(siswa.length)
// hasil: 3

// 5. .indexOf()

// let isiKulkas = ['semangka', 'pisang', 'mangga', 'apel']
// let index = isiKulkas.indexOf('alpukat')
// console.log(index)
// // hasil: 0
// if (index != -1) {
//     console.log('Buah tersebut ada dalam kulkas, silahkan ambil')
// } else {
//     console.log('Buah itu belum tersedia dalam kulkas')
// }
// hasil: Buah tersebut ada dalam kulkas, silahkan ambil

// 6. .join()

// let mugiwara = ['Luffy', 'Zorro', 'Sanji', 'Nami']
// console.log(mugiwara.join())
// hasil: Luffy,Zorro,Sanji,Nami
// console.log(mugiwara.join(' atau '))
// hasil: Luffy atau Zorro atau Sanji atau Nami
// console.log(mugiwara.join('**'))
// hasil: Luffy**Zorro**Sanji**Nami
// console.log(mugiwara.join(', '))
// hasil: Luffy, Zorro, Sanji, Nami
// console.log(mugiwara.join('-'))
// hasil: Luffy-Zorro-Sanji-Nami

// 7. .push()

// let bilangan = [0, 1, 2, 3]
// bilangan.push(4)
// console.log(bilangan)
// hasil: [0, 1, 2, 3, 4]

// 8. .pop()

// let bilangan = [0, 1, 2, 3]
// bilangan.pop()
// console.log(bilangan)
// hasil: [0, 1, 2]

// 9. .unshift()

// let bilangan = [0, 1, 2]
// bilangan.unshift(3)
// console.log(bilangan)
// hasil: [3, 0, 1, 2]

// 10. .shift()

// let bilangan = [3, 0, 1, 2]
// bilangan.shift()
// console.log(bilangan)
// hasil: [0, 1, 2]

// 11. .sort()

// let bilangan = [3, 5, 7, 1, 2]
// // bilangan.sort()
// console.log(bilangan)
// hasil: [1, 2, 3, 5, 7]

// let siswa = ['Sani', 'Anis', 'Kiki', 'Fahri']
// siswa.sort()
// console.log(siswa)
// hasil: ['Anis', 'Fahri', 'Kiki', 'Sani']

// Permasalahan
// let bilangan = [1, 2, 15]
// bilangan.sort();
// console.log(bilangan)
// hasil: [1, 15, 2]

// Solusi
// Ascending
// let bilangan = [1, 2, 15]
// bilangan.sort(function (value1, value2) {
//     return value1 > value2
// })
// console.log(bilangan)
// hasil: [1, 2, 15]

// Descending
// let bilangan = [1, 2, 15]
// bilangan.sort(function (value1, value2) {
//     return value1 < value2
// })
// console.log(bilangan)
// hasil: [15, 2, 1]

// 12. .slice()

let bilangan = [0, 1, 2, 3, 4]
let porongan = bilangan.slice(1, 3)
console.log(porongan)
// hasil: [1, 2]
let potonganLain = bilangan.slice(1);
console.log(potonganLain)
// hasil: [1, 2, 3, 4]

// 13. Array Multidimensional

let matriks = [[1, 2], [3, 4], [5, 6]]
console.log(matriks[0])
// hasil: [1, 2]
console.log(matriks[0][1])
// hasil: 2
let siswa = [['Asrul Harahap', 'Universitas Negeri Padang'], ['Anis Fikriyyah', 'Universitas Bale Bandung']]
console.log(siswa[1])
// hasil: ['Anis Fikriyyah', 'Universitas Bale Bandung']
console.log(siswa[0][1])
// hasil: 'Universitas Negeri Padang'