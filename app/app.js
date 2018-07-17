'use strict';


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storesArr = [];
/*******************************************************************************************/
/*********************************CREATING A CLASS******************************************/
/*******************************************************************************************/

function Store(name, minCus, maxCus, avgCookieSale)
{
  this.name = name;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avgCookieSale = avgCookieSale;
  this.total = 0;
  this.hoursSales = [];

  storesArr.push(this);

  Store.prototype.generateRndCustomersPerHour = function(min, max)
  {
    return Math.random() * (max - min) + min;
  };

  Store.prototype.generateAvgCookieSale = function()
  {
    return Math.floor(this.generateRndCustomersPerHour(this.minCus, this.maxCus) * this.avgCookieSale);
  };

}

/*******************************************************************************************/
/*******************************************************************************************/
/*******************************************************************************************/


// instance of store
new Store('1st and Pike', 23, 65, 6.3);





// creating a table
var tableElement = document.getElementById('storesData');

// for each store we create a row
for (var st of storesArr)
{
// create a row 
  var trElement = document.createElement('tr'); 

  // create a first cell and put a store name there
  // create a cell
  var tdElement = document.createElement('td');


}


  
// create a cell
var tdElement = document.createElement('td');
// create a data for a cell
var textElement = document.createTextNode(storesArr[0].generateAvgCookieSale());
// connect text to a cell
tdElement.appendChild(textElement);
// connect cell to a row
trElement.appendChild(tdElement);
// connect row to a table
tableElement.appendChild(trElement);
// connect table to a page
document.body.appendChild(tableElement);





























// var storePike = 
// {
//   storeName: '1st and Pike',
//   minCustomersPerLocation: 23,
//   maxCustomersPerLocation: 65,
//   avgCookiePerSale: 6.3,
//   total: 0,

//   generateRndCustomersPerHour: function (min, max) 
//   {
//     return Math.random() * (max - min) + min;
//   },

//   generateString: function ()
//   {
//     var monthsSection = document.getElementById('stores');

//     // name of the store 
//     var storeNameElement = document.createElement('h3');
//     storeNameElement.textContent = this.storeName;
//     monthsSection.appendChild(storeNameElement);
    
//     // listElement.textContent = this.storeName;
//     for (var i = 0; i < oclock.length; i++)
//     {
//       // creating a number and a string to pring 
//       var num = this.generateRndCustomersPerHour(this.minCustomersPerLocation, this.maxCustomersPerLocation) * this.avgCookiePerSale;
//       var s = oclock[i] + ': ' + Math.floor(num) + ' cookies';
//       this.total += num;

//       // creating unordered list to put values in 
//       var unorderedListElements = document.createElement('ul');
//       var listElement = document.createElement('li');
//       listElement.textContent = s;
//       unorderedListElements.appendChild(listElement);
//       monthsSection.appendChild(unorderedListElements);
//     }

//     listElement.textContent = 'Total: ' + Math.floor(this.total) + ' cookies';
//   }
// };
// storePike.generateString();
