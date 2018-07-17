'use strict';


var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
var storesArr = [];

/*******************************************************************************************/
/*************************************BEGINNING OF CLASS************************************/
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
/**************************************END OF CLASS*****************************************/
/*******************************************************************************************/


// instance of store
new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);




// 1. creating a table
var tableElement = document.getElementById('storesData');
// 2. creating a first row
// 2.a creating a first row with hours
var tableHeadElement = document.createElement('tr');
// 2.b create empty cell
var tdEmptyElement = document.createElement('td');
// 2.c connect empty cell to a row
tableHeadElement.appendChild(tdEmptyElement);

// 2.d going throught hours array
for (var hr of hours)
{
  // create a cell
  var tdHeadElement = document.createElement('td');
  // generate a text data for a cell
  var textHeadElement = document.createTextNode(hr);
  // connect text to a cell
  tdHeadElement.appendChild(textHeadElement);
  // connect cell to a row
  tableHeadElement.appendChild(tdHeadElement);
}
///////////////////////////////////////////////////////////

// create a cell
var tdTotalElement = document.createElement('td');
// generate a text data for a cell
var textTotalElement = document.createTextNode('Daily Location Total');
// connect text to a cell
tdTotalElement.appendChild(textTotalElement);
// connect cell to a row
tableHeadElement.appendChild(tdTotalElement);

///////////////////////////////////////////////////////////
// connect row to a table
tableElement.appendChild(tableHeadElement);


// for each store we create a row
for (var st of storesArr)
{
  hours.shift(' ');
  hours.push('Daily Location Total');

  /* array with all info we need to put into string*/
  var arrayToPrint = [];
  for (var hr of hours)
  {
    arrayToPrint.push(st.generateAvgCookieSale());
  }

  var totalSum = arrayToPrint.reduce(function(acc, curr){ acc += curr; });
  arrayToPrint.push(totalSum);
  arrayToPrint.shift(st.name);
  /*-----------------------------------------------*/





  // create a row 
  var trElement = document.createElement('tr'); 

  /**---------------------------------------------------------- */
  // creating a first empty cell
  // create a cell
  var tdStoreName = document.createElement('td');
  // generate a text data for a cell
  var storeName = document.createTextNode(st.name);
  // connect text to a cell
  tdStoreName.appendChild(storeName);
  // connect cell to a row
  trElement.appendChild(tdStoreName);



  // run another loop through hours and create a cell for each
  for (var hr of hours)
  {
    // create a cell
    var tdElement = document.createElement('td');
    // generate a text data for a cell
    var textElement = document.createTextNode(st.generateAvgCookieSale());
    // connect text to a cell
    tdElement.appendChild(textElement);
    // connect cell to a row
    trElement.appendChild(tdElement);
  }


  // connect row to a table
  tableElement.appendChild(trElement);

}

// connect table to a page
document.body.appendChild(tableElement);













// /* create a row with HOURS and put in first (first cell should be empty) */
// // create a row 
// var tableHeadElement = document.createElement('tr');
// for (var hrHead of hours)
// {
//   // create a cell
//   var tdHeadElement = document.createElement('td');
//   // generate a text data for a cell
//   var textHeadElement = document.createTextNode(hrHead);
//   // connect text to a cell
//   tdHeadElement.appendChild(textHeadElement);
//   // connect cell to a row
//   tableHeadElement.appendChild(tdHeadElement);
// }
// /*-----------------------------------------------------------------*/










/* DOM table manipulation */
// // creating a table
// var tableElement = document.getElementById('storesData');
// // create a row 
// var trElement = document.createElement('tr'); 
// // create a cell
// var tdElement = document.createElement('td');
// // create a data for a cell
// var textElement = document.createTextNode(storesArr[0].generateAvgCookieSale());
// // connect text to a cell
// tdElement.appendChild(textElement);
// // connect cell to a row
// trElement.appendChild(tdElement);
// // connect row to a table
// tableElement.appendChild(trElement);
// // connect table to a page
// document.body.appendChild(tableElement);





























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
