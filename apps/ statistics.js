'use strict';
const arrFood = [];
let num = 0;
const foodTable = document.getElementById('foodtable');
const tr = document.createElement('tr')

foodTable.appendChild(tr);
const th1 = document.createElement('th');
th1.textContent = "Food ID";
tr.appendChild(th1);
const th2 = document.createElement('th');
th2.textContent = "Food Name";
tr.appendChild(th2);
const th3 = document.createElement('th');
th3.textContent = "Food Type";
tr.appendChild(th3);
const th4 = document.createElement('th');
th4.textContent = "Price";
tr.appendChild(th4);



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
Restaurant.prototype.render = function () {


    const trl = document.createElement('tr')
    table.appendChild(trl)

    const td1 = document.createElement('td');
    td1.textContent = this.UniqueID();
    trl.appendChild(td1);
    const td2 = document.createElement('td');
    td2.textContent = this.foodName;
    trl.appendChild(td2);
    const td3 = document.createElement('td');
    td3.textContent = this.foodType;
    trl.appendChild(td3);
    const td4 = document.createElement('td');
    td4.textContent = this.price;
    trl.appendChild(td4);




};


function getData() { 
    let retrievedData = localStorage.getItem("formFood");
    let arrayData = JSON.parse(retrievedData);
    console.log(arrayData)
    if (arrayData != null) {
        for (let i = 0; i < arrayData.length; i++) {
          
            let newOrder= new Restaurant(
           
            arrayData[i].foodName,
            arrayData[i].foodType,
            arrayData[i].price  
          );
            newOrder.UniqueID();
            // newOrder.render()
        }
        for (let i = 0; i < arrFood.length; i++) {
            arrFood[i].render()
            
        }
    }
  }

getData()