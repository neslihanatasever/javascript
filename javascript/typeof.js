
//typeof kullanımı
//neyin önüne koyarsak typeof'u onun değerinin ne olduğunu consolden görebiliriz.

let sayi1 = 10;
let sayi2 = "5";

//işin içine string girerse eğer toplama yaptırmak istersek bu birleştirme işlemine dönüyor. yani sonuç 105 oluyor.

let toplam = sayi1 + Number(sayi2)

console.log( typeof sayi2, "toplam");