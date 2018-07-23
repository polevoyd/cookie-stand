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
/***********************************FUNCTION DEFINITIONS************************************/
/*******************************************************************************************/

/*----------------------------create and render a table head-------------------------------*/

function renderTableHead(tableElement)
{
  // creating a table header element
  var tableHeaderElement = document.createElement('thead');
  // creating a first row with hours
  var trTableHeadElement = document.createElement('tr');
  // put empty cell first
  trTableHeadElement.appendChild(document.createElement('td'));
  // run array with hours and create a cell for each
  for (var hr of hours)
  {
    var tdHeadElement = document.createElement('td');
    // tdHeadElement.textContent(hr); // has to work but doesn't?
    tdHeadElement.appendChild(document.createTextNode(hr));
    trTableHeadElement.appendChild(tdHeadElement);
  }
  // last cell will be a total
  var tdFirstTotalElement = document.createElement('td');
  tdFirstTotalElement.appendChild(document.createTextNode('Daily Location Total'));
  trTableHeadElement.appendChild(tdFirstTotalElement);
  tableHeaderElement.appendChild(trTableHeadElement);
  tableElement.appendChild(tableHeaderElement);
}

/*--------------------------create and render a table footer-------------------------------*/

function renderTableFooter(tableElement)
{
  // if footer already exist - delete it first
  if (document.getElementsByTagName('tfoot') !== undefined)
  {
    document.getElementById('storesData').deleteTFoot();
  }
 
  // creating a table footer
  var tableFooterElement = document.createElement('tfoot');
  // creating a footer row
  var trTableFooterElement = document.createElement('tr');
  // put first cell with 'Totals:'
  var tdFooterElement = document.createElement('td');
  tdFooterElement.appendChild(document.createTextNode('Total:'));
  // add cell to a row
  trTableFooterElement.appendChild(tdFooterElement);

  // run array with totals and create a cell for each
  for (var index in totals)
  {
    var tdFooterTotalElement = document.createElement('td');
    tdFooterTotalElement.appendChild(document.createTextNode(totals[index]));
    trTableFooterElement.appendChild(tdFooterTotalElement);
  }
  // append row to a footer
  tableFooterElement.appendChild(trTableFooterElement);
  // append footer to a table
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

//--------------------render all stores
function renderAllStores()
{
  // render each store
  for (var st of storesArr)
  {
    renderStore(st);
  }
}

/*******************************************************************************************/
/*************************************FORMS CONNECTING**************************************/
/*******************************************************************************************/

// connecting a the form
var formElement = document.getElementById('main-form');
formElement.addEventListener('submit', function(event)
{
  event.preventDefault();

  var store_name = event.target.store_name.value;
  var store_min = event.target.store_min.value;
  var store_max = event.target.store_max.value;
  var store_avg = event.target.store_avg.value;

  new Store(store_name, store_min, store_max, store_avg);

  renderStore(storesArr[storesArr.length-1]);
  renderTableFooter(tableElement);
});


/*******************************************************************************************/
/*******************************************END*********************************************/
/*******************************************************************************************/

// instance of store
new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

// attach html table to a variable
var tableElement = document.getElementById('storesData');

// render a table head
renderTableHead(tableElement);



renderAllStores();

// render a table footer
renderTableFooter(tableElement);

