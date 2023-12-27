//fonksiyonlar

// function firstFunc(){
//     console.log("nesli");
// }
// firstFunc(); //fonksiyonu çağırdık


// const firstFunc = () => {
//     //arrow function, yukarıda yazılandan sadece syntax farkı var.
// }

// let kullanici = {}

//-------------------------------------------

// let sayi1 = 20;
// let sayi2 =10; 

// const sum  = (num1, num2) => {
//     let result = num1 + num2; bu bana sonuc döndürmek çünkü return etmedik.
//     return result;
// }

// let res = sum(sayi1,sayi2)
// console.log(res)

//-------------------------------------------

//call, apply, bind

function hello() {
    //this 
    console.log(this.name + this.val) 
}

let obj = {name: "js", val:"20"}

hello.call(obj) 

