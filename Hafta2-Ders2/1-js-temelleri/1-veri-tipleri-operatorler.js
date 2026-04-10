// 1. Veri Tipleri, Değişken Oluşturma, Operatörler

// Değişken oluşturma (let, const, var)
let isim = "Ahmet";       // String (metin)
const yas = 25;           // Number (sabit değer)
var aktifMi = true;       // Boolean (doğru/yanlış)

let notYok;               // undefined (tanımsız)
let bosDeger = null;      // null (bilinçli boş değer)

//typeof ile veri tipini kontrol edebiliriz
console.log(typeof isim);      // string
console.log(typeof yas);       // number
console.log(typeof aktifMi);   // boolean
console.log(typeof notYok);    // undefined
console.log(typeof bosDeger);  // object (JavaScript'in bilinen hatası)

// Aritmetik Operatörler
let a = 10;
let b = 3;
console.log(a + b);  // Toplama: 13
console.log(a - b);  // Çıkarma: 7
console.log(a * b);  // Çarpma: 30
console.log(a / b);  // Bölme: 3.333...
console.log(a % b);  // Mod (kalan): 1

// Atama Operatörleri
a += 2;  // a = a + 2
console.log(a);  // 12

//Karşılaştırma Operatörleri
console.log(a == b);   // eşit mi? false
console.log(a != b);   // eşit değil mi? true
console.log(a > b);    // büyük mü? true
console.log(a <= b);   // küçük eşit mi? false

// === ve !== tip kontrolüyle birlikte eşitlik kontrol eder
console.log("10" == 10);   // true (sadece değer)
console.log("10" === 10);  // false (hem değer hem tip)

// Mantıksal Operatörler
let x = true;
let y = false;
console.log(x && y); // AND -> false
console.log(x || y); // OR -> true
console.log(!x);     // NOT -> false