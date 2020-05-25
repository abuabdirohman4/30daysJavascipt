// 1. Percabangan

// IF
if (syarat) {
    // Jalankan kode jika syarat terpenuhi atau bernilai benar
}

let usia = 19
if (usia >= 18) {
    console.log("Okay selamat, Anda boleh ikut")
}
// hasil: Okay selamat, Anda boleh ikut

// IF ELSE
if (syarat) {
    // Jalankan kode jika syarat terpenuhi atau bernilai benar
} else {
    // Jalankan kode jika syarat tidak terpenuhi atau bernilai salah
}

let usia = 10
if (usia >= 18) {
    console.log("Okay selamat, Anda boleh ikut")
} else {
    console.log("Maaf nak, Anda harus menunggu beberapa tahun lagi")
}
// hasil: Maaf nak, Anda harus menunggu beberapa tahun lagi

// IF ELSE ELSE
if (syarat) {
    // jalankan jika syarat terpenuhi 
} else if (kondisi) {
    // jalankan jika syarat terpenuhi dan syarat sebelumnya tidak terpenuhi
} else {
    // jalankan jika semua syarat tidak terpenuhi
}

// 2. Switch

switch (nilai) {
    case 1:
        // jalankan jika nilai sama dengan case 1
        break

    case 2:
        // jalankan jika nilai sama dengan case 2
        break
    default:
    // jalankan jika semua case salah 
}

let cuaca = 'berawan'
switch (cuaca) {
    case 'hujan':
        console.log('Kamu butuh jas hujan')
        break
    case 'berawan':
        console.log('Sedikit dingin, gunakan jaket kesayanganmu')
        break
    case 'cerah':
        console.log('Senangnya bisa kemana saja')
        break
    default:
        console.log('BMKG belum update cuaca nih :(')
}
// hasil: Sedikit dingin, gunakan jaket kesayanganmu

// 3. Ternary

let sedangHujan = true
sedangHujan
    ? console.log('Kamu butuh payung')
    : console.log('Slow aja hari cerah kok')