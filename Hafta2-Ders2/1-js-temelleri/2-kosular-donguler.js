// 2. Koşullar ve Döngüler

// Koşullar (if, else if, else)
let notDegeri = 75;

if(notDegeri >= 90) {
    console.log("Harika, A aldınız!");
} else if (notDegeri >= 70) {
    console.log("Gayet iyi, B aldınız!");
} else {
    console.log("Daha çok çalışmalısınız.");
}

// Ternary (üçlü) operatör
let yas = 12;
let mesaj = (yas >= 18) ? "Reşitsiniz." : "Reşit değilsiniz.";
console.log("Mesaj", mesaj);

// switch-case yapısı
let gun = "Pazartesi";

switch (gun) {
  case "Pazartesi":
    console.log("Haftanın ilk günü");
    break;
  case "Cuma":
    console.log("Hafta sonu yaklaştı");
    break;
  default:
    console.log("Standart bir gün");
}

// Döngüler

// for döngüsü
for (let i = 0; i < 5; i++) {
    console.log("Döngü 1 -> i: " + i);
}

// while döngüsü
let sayac = 0;
while (sayac < 3) {
  console.log("While Döngüsü: " + sayac);
  sayac++;
}

// do-while döngüsü (en az bir kez çalışır)
let sayi = 0;
do {
  console.log("Do-While: " + sayi);
  sayi++;
} while (sayi < 2);

// break ve continue örneği
for (let i = 0; i < 10; i++) {
  if (i === 2) continue; // 2 atlanır
  if (i === 4) break;    // 4'te döngü biter
  console.log("i: " + i);
}