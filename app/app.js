'use strict';


var oclock = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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

  generateString: function ()
  {
    for (var i = 0; i < oclock.length; i++)
    {
      var num = this.generateRndCustomersPerHour(this.minCustomersPerLocation, this.maxCustomersPerLocation) * this.avgCookiePerSale;

      var s = oclock[i] + ': ' + Math.floor(num) + ' cookies';

      var unorderedListElements = document.createElement('ul');

      var listElement = document.createElement('li');
      listElement.textContent = s;
      unorderedListElements.appendChild(listElement);
    
      var monthsSection = document.getElementById('stores');
      monthsSection.appendChild(unorderedListElements);


      
    }
  }

    
  


};
storePike.generateString();

//var storesArr = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
