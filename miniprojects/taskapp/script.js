const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") { //inputBox değişkeni boş mu diye kontrol ettim
    alert("Please enter a task"); //eğer bu değişkenim boş ise kullanıcıya uyarı verdim
  } else {
    let li = document.createElement("li"); //li etiketini olusturdum ve bu elementi bir li değişkenine atadım 
    li.innerHTML = inputBox.value; //oluşturduğum li elementinin içerği inputboxın değeri ile doldurdum. inputboxın değerli kullanıcının girdiği değer oluyor.
    listContainer.appendChild(li);  //oluşturduğum li elementini listContainer elementine ekledim
  }
}
