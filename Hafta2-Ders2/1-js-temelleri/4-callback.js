//1. toplama işlemi yapan ve sonucu döndüren bir fonksiyon tanımlayın (function expression)

//2. çarpma işlemi yapan ve sonucu döndüren bir fonksiyon tanımlayın (arrow function)


const topla = function(s1, s2){
    return s1 + s2;
}

const carp = (s1, s2) => {
    return s1 * s2;
}

// const carp = (s1, s2) => s1 * s2;


//Callback -> Bir fonksiyona parametre olarak başka bir fonksiyonu verme işlemidir

function islemYap(islem, s1, s2){
    // let islem = (s1, s2) => {return s1 - s2};
    let sonuc = islem(s1, s2);
    console.log("Sonuç:", sonuc);
}


//islemYap(topla, 2, 3);
//islemYap(carp, 2, 3);

//let cikart = (s1, s2) => {
    //return s1 * s2;
//}
//islemYap(cikart, 2, 3)

islemYap((s1, s2) => {return s1 - s2}, 2 ,3);


// let s1 = 2;
// let s2 = 3;
// topla(s1, s2)
// topla(2, 3)