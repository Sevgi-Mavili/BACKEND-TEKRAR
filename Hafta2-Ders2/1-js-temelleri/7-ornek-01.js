//Ders notları sayfa: 14
// Aşağıdaki dizideki;
// JavaScript bilen kişileri ekrana yazdırın.

let ogrenciler = [
    { isim: 'Cem', github_adresi: 'cemg', bildigi_diller: ['C#', 'ASP.NET'] },
    { isim: 'Ali', github_adresi: 'ali', bildigi_diller: ['C#'] },
    { isim: 'Emircan', github_adresi: 'emircan', bildigi_diller: ['C#', 'JavaScript'] },
    { isim: 'İrem', github_adresi: 'irem', bildigi_diller: ['C#', 'JavaScript'] },
];


//filter, includes

//ogrenciler listesindeki öğrencilerden bildigi_diller alanında "JavaScript" olan öğrencileri filtrelemem lazım
//C# Where
let bilenOgrenciler = ogrenciler.filter (ogrenci => ogrenci.bildigi_diller.includes('JavaScript'));

//aslında olan...
// const kural = (ogrenci) => ogrenci.bildigi_diller.includes('JavaScript')
// let bilenOgrenciler = ogrenciler.filter(kural);

console.log(bilenOgrenciler)