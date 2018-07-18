'use strict';


var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var totals = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
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

  storesArr.push(this);
}

Store.prototype.generateRndCustomersPerHour = function(min, max)
{
  return Math.random() * (max - min) + min;
};

Store.prototype.generateAvgCookieSale = function()
{
  return Math.floor(this.generateRndCustomersPerHour(this.minCus, this.maxCus) * this.avgCookieSale);
};


/*******************************************************************************************/
/**************************************END OF CLASS*****************************************/
/*******************************************************************************************/


// instance of store
new Store('1st and Pike', 23, 65, 6.3);
// new Store('SeaTac Airport', 3, 24, 1.2);
// new Store('Seattle Center', 11, 38, 3.7);
// new Store('Capitol Hill', 20, 38, 2.3);
// new Store('Alki', 2, 16, 4.6);



/*******************************************************************************************/
/***********************************FUNCTION DEFINITIONS************************************/
/*******************************************************************************************/



// </thead>
//   <tfoot>
//     <tr>
//       <td>Sum</td>
//       <td>$180</td>
//     </tr>
//   </tfoot>












/*----------------------------create and render a table head-------------------------------*/

function renderTableHead(tableElement)
{
  // creating a first row with hours
  var tableHeadElement = document.createElement('tr');
  // put empty cell first
  tableHeadElement.appendChild(document.createElement('td'));
  // run array with hours and create a cell for each
  for (var hr of hours)
  {
    var tdHeadElement = document.createElement('td');
    // tdHeadElement.textContent(hr); // has to work but doesn't?
    tdHeadElement.appendChild(document.createTextNode(hr));
    tableHeadElement.appendChild(tdHeadElement);
  }
  // last cell will be a total
  var tdFirstTotalElement = document.createElement('td');
  tdFirstTotalElement.appendChild(document.createTextNode('Daily Location Total'));
  tableHeadElement.appendChild(tdFirstTotalElement);
  tableElement.appendChild(tableHeadElement);
}

/*--------------------------create and render a table footer-------------------------------*/

function renderTableFooter(tableElement)
{
  // creating a footer row
  var tableFooterElement = document.createElement('tr');
  // put first cell with 'Totals:'
  var tdFooterElement = document.createElement('td');
  tdFooterElement.appendChild(document.createTextNode('Total:'));
  // add cell to a row
  tableFooterElement.appendChild(tdFooterElement);

  // run array with totals and create a cell for each
  for (var index in totals)
  {
    var tdFooterTotalElement = document.createElement('td');
    tdFooterTotalElement.appendChild(document.createTextNode(totals[index]));
    tableFooterElement.appendChild(tdFooterTotalElement);
  }

  tableElement.appendChild(tableFooterElement);
}

/*-------------------------rendering a store object in a table-----------------------------*/

function renderStore(storeObj)
{
  // for each store create a total value
  var totalSum = 0;
  // create a row
  var trElement = document.createElement('tr');
  // create a first cell with a name of store
  var tdStoreName = document.createElement('td');
  // create a data and connect it to a cell
  tdStoreName.appendChild(document.createTextNode(storeObj.name));
  // connect cell to a row
  trElement.appendChild(tdStoreName);

  // run another loop through hours and create a cell for each
  for (var i in hours)
  {
    // create a cell
    var tdElement = document.createElement('td');
    // generate a text data for a cell
    var temp = storeObj.generateAvgCookieSale();
    // each time we generate a random number:
    // 1 - we add it to a 'totalSum' - which it will be on a left
    var textElement = document.createTextNode(temp);
    totalSum += temp;
    // 2 - we add it to a same index array 'totals' - which will be at the bottom
    totals[i] += temp;
    // 3 - last element of 'totals' will be a sum of all previous calculated totals
    totals[totals.length-1] += temp;
    // connect text to a cell
    tdElement.appendChild(textElement);
    // connect cell to a row
    trElement.appendChild(tdElement);
  }

  // create a last cell with a total (calculated in previous block)
  var tdTotalElement = document.createElement('td');
  // generate a text data for a cell
  var totalTextElement = document.createTextNode(totalSum);
  // connect text to a cell
  tdTotalElement.appendChild(totalTextElement);
  // connect cell to a row
  trElement.appendChild(tdTotalElement);
  // connect row to a table
  tableElement.appendChild(trElement);
}

/*******************************************************************************************/
/********************************END OF FUNCTION DEFINITIONS********************************/
/*******************************************************************************************/



/*******************************************************************************************/

// connecting a the form
var formElement = document.getElementById('main-form');
formElement.addEventListener('submit', function(event)
{
  event.preventDefault();
  // console.log('something happened!');

  var store_name = event.target.store_name.value;
  var store_min = event.target.store_min.value;
  var store_max = event.target.store_max.value;
  var store_avg = event.target.store_avg.value;

  new Store(store_name, store_min, store_max, store_avg);

  renderStore(storesArr[storesArr.length-1]);
  renderTableFooter(tableElement);
});



// attach html table to a variable
var tableElement = document.getElementById('storesData');

// render a table head
renderTableHead(tableElement);

// render each store
for (var st of storesArr)
{
  renderStore(st);
}

// render a table footer
// renderTableFooter(tableElement);


































// /*******************************************************************************************/
// /***********************************BEGINNING OF TABLE**************************************/
// /*******************************************************************************************/
// // 1. creating a table
// var tableElement = document.getElementById('storesData');
// //-----------------------------------------------------first string:
// // 2.a creating a first row with hours
// var tableHeadElement = document.createElement('tr');

// //-----------------------------------------------------empty cell
// // create a cell (can skip this line and make it in one line)
// //var tdEmptyElement = document.createElement('td');
// // connect cell to a row
// tableHeadElement.appendChild(document.createElement('td'));
// //-----------------------------------------------------hours part
// for (var hr of hours)
// {
//   var tdHeadElement = document.createElement('td');
//   tdHeadElement.appendChild(document.createTextNode(hr));
//   tableHeadElement.appendChild(tdHeadElement);
// }
// //-----------------------------------------------------total part
// // create a cell
// var tdFirstTotalElement = document.createElement('td');
// // generate a text data for a cell
// var totalFirstTextElement = document.createTextNode('Daily Location Total');
// // connect text to a cell
// tdFirstTotalElement.appendChild(totalFirstTextElement);
// // connect cell to a row
// tableHeadElement.appendChild(tdFirstTotalElement);
// // connect row to a table
// tableElement.appendChild(tableHeadElement);
// //-----------------------------------------------------rows in the middle
// // for each store we create a row
// for (var st of storesArr)
// {
//   // our total sum
//   var totalSum = 0;
//   // create a row
//   var trElement = document.createElement('tr');
//   //-----------------------------------------------------first cell with a name
//   // create a cell
//   var tdStoreName = document.createElement('td');
//   // generate a text data for a cell
//   var storeName = document.createTextNode(st.name);
//   // connect text to a cell
//   tdStoreName.appendChild(storeName);
//   // connect cell to a row
//   trElement.appendChild(tdStoreName);
//   //-----------------------------------------------------next cells with a data
//   // run another loop through hours and create a cell for each
//   for (var hr of hours)
//   {
//     // create a cell
//     var tdElement = document.createElement('td');
//     // generate a text data for a cell
//     var temp = st.generateAvgCookieSale();
//     var textElement = document.createTextNode(temp);
//     totalSum += temp;
//     // connect text to a cell
//     tdElement.appendChild(textElement);
//     // connect cell to a row
//     trElement.appendChild(tdElement);
//   }
//   //-----------------------------------------------------Total calculation

//   // create a cell
//   var tdTotalElement= document.createElement('td');
//   // generate a text data for a cell
//   var totalTextElement = document.createTextNode(totalSum);
//   // connect text to a cell
//   tdTotalElement.appendChild(totalTextElement);
//   // connect cell to a row
//   trElement.appendChild(tdTotalElement);
  
//   //-----------------------------------------------------Connect everything to table
//   // connect row to a table
//   tableElement.appendChild(trElement);
// }

// //-----------------------------------------------------connect table to a page
// // we dont need to look and connect cause we did it in the beginning
// // document.body.appendChild(tableElement);
// // document.getElementById('storesData').appendChild(tableElement);

// /*******************************************************************************************/
// /**************************************END OF TABLE*****************************************/
// /*******************************************************************************************/








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
