/*
Harga awal baju= 10000, 
Harga awal celana = 20000, 
Harga awal kacamata = 30000

Harga baju naik 10% tiap menitnya
Harga celana naik 20% tiap menitnya
Harga kacamata naik 30% tiap menitnya
Tiap harga dibulatkan ke atas (Math.ceil)

return string informasi dari setiap barang
*/

const lelang = (menit) => {
    let hargaBaju = 10000
    let hargaCelana = 20000
    let hargaKacamata = 30000
    
    for(i=1; i<=menit; i++){
        if(true){
            hargaBaju += hargaBaju*0.1
            hargaCelana += hargaCelana*0.2
            hargaKacamata += hargaKacamata*0.3
        }
        hargaBaju = Math.ceil(hargaBaju)
        hargaCelana = Math.ceil(hargaCelana)
        hargaKacamata = Math.ceil(hargaKacamata)
    }
    return `Di menit ke "+${i-1}+" Product info: \nNama barang: Baju, harga: Rp.${hargaBaju} `
}
    
console.log(lelangArr(1))
console.log(lelangArr(5))
console.log(lelangArr(10))
}


