'use strict'

var num = 0;
// var n;
let arrFood = [];

function Restaurant(foodName, foodType, price) {
    this.foodName = foodName;

    this.foodType = foodType;
    this.price = price;
    arrFood.push(this);

}
Restaurant.prototype.UniqueID = function () {//UNIQUE ID FUNCTION
    var count = "" + num;

    num++;
    return count;


};
console.log("before ", arrFood)
let befor = localStorage.getItem("formFood");
let beforRefeshing = JSON.parse(befor);
console.log("beforerefehing", beforRefeshing)
if (beforRefeshing != null) {
    arrFood = beforRefeshing;
} else {
    arrFood = [];
}

console.log("after ", arrFood)
let form = document.getElementById('foodForm');
form.addEventListener('submit', handler);
function handler(event) {
    event.preventDefault(event);
    let foodName = event.target.foodName.value;
    let foodType = event.target.foodType.value;

    let price = event.target.price.value;
    let newForm = new Restaurant(foodName, foodType, price);
    newForm.UniqueID();
    saveData(arrFood);

}
function saveData(order) {
    let stringObj = JSON.stringify(order);
    localStorage.setItem("formFood", stringObj);

}




