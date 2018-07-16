'use strict';

var oclock = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total:'];

// store objects
var storePike = 
{
    minCustomersPerLocation: 23,
    maxCustomersPerLocation: 65,
    avgCookiePerSale: 6.3,

    generateRndCustomersPerHour: function (min, max) 
    {
        return Math.random() * (max - min) + min;
    },

    for (var i = 0; i < oclock.length; i++)
    {
        var num = generateRndCustomersPerHour(minCustomersPerLocation, maxCustomersPerLocation) * avgCookiePerSale;

        var s = oclock[i] + ': ' + num + ' cookies';
    }
    


};


//var storesArr = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];


var unorderedListElements = document.createElement('ul');



for(var i = 0; i < oclock.length; i++) {
  var listElement = document.createElement('li');
  listElement.textContent = oclock[i];
  unorderedListElements.appendChild(listElement);
}

var monthsSection = document.getElementById('stores');
monthsSection.appendChild(unorderedListElements);