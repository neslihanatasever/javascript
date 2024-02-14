const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    //inputBox değişkeni boş mu diye kontrol ettim
    alert("Please enter a task"); //eğer bu değişkenim boş ise kullanıcıya uyarı verdim
  } else {
    let li = document.createElement("li"); //li etiketini olusturdum ve bu elementi bir li değişkenine atadım
    li.innerHTML = inputBox.value; //oluşturduğum li elementinin içerği inputboxın değeri ile doldurdum. inputboxın değerli kullanıcının girdiği değer oluyor.
    listContainer.appendChild(li); //oluşturduğum li elementini listContainer elementine ekledim
    let span = document.createElement("span"); //span etiketini oluşturdum ve bu elementi bir span değişkenine atadım
    span.innerHTML = "\u00d7"; //oluşturduğum span elementinin içeriğini x olarak doldurdum
    li.appendChild(span); //oluşturduğum span elementini li elementine ekledim
  }
  inputBox.value = ""; //inputboxın değerini boşalttım
}
listContainer.addEventListener(
  "click",
  function (e) {
    //listContainer elementine click eventi ekledim
    if (e.target.tagName === "LI") {
      //eğer tıklanan elementin etiketi li ise
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      //eğer tıklanan elementin etiketi span ise
      e.target.parentElement.remove(); //tıklanan elementin parent elementini yani li elementini sildim
    }
  },
  false
);
