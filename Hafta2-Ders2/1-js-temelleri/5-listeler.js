let liste = [5, 7, 13, 45, 65, 87, 25];
let isimler = ["mehmet", "buket", "enver"];
let liste2 = ["hasan", 23, true, [1, 2]];

console.log(liste.length);

liste[2] = 30;
console.log(liste[2]);

//sona eleman ekleme
liste.push(89)

//başa eleman ekleme
liste.unshift(2)

//console.log(liste)

//sondan eleman çıkarmak
liste.pop()

//baştan eleman çıkarmak
liste.shift()

console.log(liste)

//aradan bir eleman çıkarmak (kaçıncı indexten, kaç eleman)
liste.splice(2, 1);

console.log(liste)

//araya bir eleman eklemek için
//2. index'e 700 değerini ekle (araya ekleme)
liste.splice(2, 0, 700, 800);

//splice fonksiyonunu detaylı bir şekilde pratik et

console.log(liste)
console.log(liste.indexOf(87))
console.log(liste.includes(87))

//içerisine verdiğimiz koşula uyan elemanları ayrı bir listeye filtreler
// let filtrelenmisListe = liste.filter(s => s % 2 == 0)
//bkz: C# linq

console.log(liste.filter(s => s % 2 == 0))

console.clear();

//metinsel sıralama (alfabetik)
console.log(isimler)
isimler.sort()
console.log(isimler)

console.log(liste)
let siralamaFonksiiyonu = (a, b) => a - b;
liste.sort((a, b) => a - b)
// liste.sort(siralamaFonksiyonu)
// liste.sort((a, b) => b - a) // büyükten küçüğe
console.log(liste)

//sort, find, some, every, map, reduce