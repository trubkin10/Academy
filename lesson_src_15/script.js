var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close");

console.log(btn1);
console.log(btn2);
console.log(ul);
console.log(story);

function addItem(){
    var newLi = document.createElement("li");
    newLi.innerHTML = "Новая задача!";
    newLi.className = "item";
    myList.appendChild(newLi);
    popup.style.display = "none";
}
function delItem(){
    myList.removeChild(story[0]);

    if(story.length == 0){
        popup.style.display = "block";
    }
}

function closePopup(){
    popup.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);

var name = '',
    age = 0,
    logicalValue = false;

function writeName() {
    name = prompt('Напишите Ваше имя');
    console.log(name);
}

writeName();

function writeAge(){
    logicalValue = confirm('Вам есть 18 лет?');

    if (logicalValue == true) {
        var subscription = confirm('Вы подписаны на рассылку?');
            if (subscription == true) {
                alert('Доступ разрешен');
            }
        else{
            alert('У вас нет, подписки. Советуем оформить!');
            }
    }
    else{
        alert('Доступ запрещен');
    }
}

writeAge();
