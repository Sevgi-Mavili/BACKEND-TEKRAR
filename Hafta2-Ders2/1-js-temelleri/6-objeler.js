let ogrenci1 = {
    isim: "kemal",
    yas: 43,
    notlar: [5, 2, 7, 3],
    adres: {
        il: "ankara",
        ilçe: "kızılay"
    },

    selamVer: function(kime){
        let metin = "Merhaba " + kime + " ben " + this.isim;
        console.log(metin)
    },

    //bu işlem için arrow function çalışmaz
    // yaslan: function(){
    //     this.yas++;
    // }

    yaslan(){
        this.yas++;
    }
}

// console.log(ogrenci1)
console.log(ogrenci1.isim)
console.log(ogrenci1.yas)
ogrenci1.notlar.push(90)
console.log(ogrenci1.notlar)
console.log(ogrenci1.adres.il)

ogrenci1.selamVer("merve")
ogrenci1.selamVer("hasan")

ogrenci1.isim = "hasan";
console.log(ogrenci1.isim)
ogrenci1.selamVer("falan")

console.log(ogrenci1)

//nesneye daha önceden var olmayan bir alanı eklemek
ogrenci1.sinif = "BE127"

console.log(ogrenci1)


console.log(ogrenci1.yas);
ogrenci1.yaslan();
ogrenci1.yaslan();
console.log(ogrenci1.yas);