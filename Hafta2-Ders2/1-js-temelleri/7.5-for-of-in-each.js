let list = [5, 2, 3, 7, 9];

for(let i = 0; i < list.length; i++){
    console.log('for: ', list[i])
}

//for-of döngüsü
for(let sayi of list){
    console.log('for-in: ', sayi)
}

list.forEach((sayi) => {
    console.log('forEach: ', sayi)
})

list.forEach((sayi, index) => {
    console.log('forEach: ', sayi, index)
})




//for-in (nesnelerde kullanılır)