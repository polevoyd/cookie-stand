'use strict';


var oclock = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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

    storesArr.push(this);

}

Store.prototype.generateRndCustomersPerHour = function(min, max)
{
    return Math.random() * (max - min) + min;
};









new Store('1st and Pike', 23, 65, 6.3);













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
