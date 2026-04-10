// 3. Fonksiyon Tanımlama Türleri

// 1. Fonksiyon bildirimi (Function Declaration)
function selamVer(isim) {
    console.log("Merhaba, " + isim);
}
selamVer("Ayşe");

// 2. Fonksiyon ifadesi (Function Expression)
//Hoisting
let topla = function(a, b) {
    return a + b;
};
console.log(topla(3, 4));

// 3. Arrow Function (ok fonksiyonu) =>
const carp = (x, y) => {
    return x * y;
};
console.log(carp(5, 6));

// Tek satırlıksa süslü parantez ve return gerekmez
const karesi = sayi => sayi * sayi;
console.log(karesi(9));