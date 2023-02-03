const input = require('prompt-sync')({sigint: true});

var flag=false;

do {
var nilai = input ("Masukkan angka : ");
akar(nilai);
} while (flag==false)

function akar (x){
    if(x%2==0 & x>0){
        flag=true
        console.log("Akar pangkat 2 dari " + x + " adalah " + Math.sqrt(x));
    }
    else if (x%2!=0){
        flag=false
        console.log("Tidak boleh input bilangan ganjil");
    }
    else if (x<0){
        flag=false
        console.log ("Tidak boleh bilangan Negatif");
    }
    else { 
        console.log ("Tidak boleh kosong");
    }
}