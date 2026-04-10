// JS TEMELLER

// 1. Console Fonksiyonları

// console.log() - Konsola bilgi yazdırır
console.log("Bu bir log mesajıdır.");

// console.info() - bilgi mesajı verir (console.log() ile benzer)
console.info("Bu bir bilgi mesajıdır.");

// console.warn() - uyarı mesajı verir (sarı renkli görünür)
console.warn("Bu bir uyarıdır!");

// console.error() - hata mesajı verir (kırmızı renkli görünür)
console.error("Bir hata oluştu!");

//
--------------------------------------------------

// 2. alert() Fonksiyonu

// Kullanıcıya sadece bilgi verir, tamam butonuyla kapatılır.
alert("Hoş geldiniz!");

//
-----------------------------------------------

// 3. prompt() Fonksiyonu

// Kullanıcıdan veri alır, girilen veri string olarak döner.
const isim = prompt("Adınızı giriniz:");
console.log("Giriilen isim:", isim);

// prompt ile alınan sayı değerini number'a çevirmek gerekir
const yas = parseInt(prompt("Yaşınızı giriniz:"));
console.log("Yaşınız:", yas);

//
----------------------------------------------------

// 4. confirm() Fonksiyonu

// Kullanıcıya evet/hayır (tamam/iptal) sorusu sorar
// true (tamam) veya false (iptal) döner
const devamMi = confirm("Devam etmek istiyor musunuz?");
console.log("Kullanıcının cevabı:", devamMi);

// confirm() örneği koşul ile
if(devamMi) {
    console.log("Kullanıcı devam etmek istiyor.");
} else {
    console.log("Kulanıcı iptal etti.");
}