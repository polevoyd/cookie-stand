'use strict';


var oclock = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// store objects
var storePike = 
{
  storeName: '1st and Pike',
  minCustomersPerLocation: 23,
  maxCustomersPerLocation: 65,
  avgCookiePerSale: 6.3,
  total: 0,

  generateRndCustomersPerHour: function (min, max) 
  {
    return Math.random() * (max - min) + min;
  },

  generateString: function ()
  {
    var monthsSection = document.getElementById('stores');

    // name of the store 
    var storeNameElement = document.createElement('h3');
    storeNameElement.textContent = this.storeName;
    monthsSection.appendChild(storeNameElement);
    
    // listElement.textContent = this.storeName;
    for (var i = 0; i < oclock.length; i++)
    {
      // creating a number and a string to pring 
      var num = this.generateRndCustomersPerHour(this.minCustomersPerLocation, this.maxCustomersPerLocation) * this.avgCookiePerSale;
      var s = oclock[i] + ': ' + Math.floor(num) + ' cookies';
      this.total += num;

      // creating unordered list to put values in 
      var unorderedListElements = document.createElement('ul');
      var listElement = document.createElement('li');
      listElement.textContent = s;
      unorderedListElements.appendChild(listElement);
      monthsSection.appendChild(unorderedListElements);
    }

    listElement.textContent = 'Total: ' + Math.floor(this.total) + ' cookies';
  }
};
storePike.generateString();

/*******************************************************************************************/
/*******************************************************************************************/

// store objects
var storeSeaTac = 
{
  storeName: 'SeaTac Airport',
  minCustomersPerLocation: 3,
  maxCustomersPerLocation: 24,
  avgCookiePerSale: 1.2,
  total: 0,

  generateRndCustomersPerHour: function (min, max) 
  {
    return Math.random() * (max - min) + min;
  },

  generateString: function ()
  {
    var monthsSection = document.getElementById('stores');

    // name of the store 
    var storeNameElement = document.createElement('h3');
    storeNameElement.textContent = this.storeName;
    monthsSection.appendChild(storeNameElement);
    
    // listElement.textContent = this.storeName;
    for (var i = 0; i < oclock.length; i++)
    {
      // creating a number and a string to pring 
      var num = this.generateRndCustomersPerHour(this.minCustomersPerLocation, this.maxCustomersPerLocation) * this.avgCookiePerSale;
      var s = oclock[i] + ': ' + Math.floor(num) + ' cookies';
      this.total += num;

      // creating unordered list to put values in 
      var unorderedListElements = document.createElement('ul');
      var listElement = document.createElement('li');
      listElement.textContent = s;
      unorderedListElements.appendChild(listElement);
      monthsSection.appendChild(unorderedListElements);
    }

    listElement.textContent = 'Total: ' + Math.floor(this.total) + ' cookies';
  }
};
storeSeaTac.generateString();

/*******************************************************************************************/
/*******************************************************************************************/

// store objects
var storeCenter = 
{
  storeName: 'Seattle Center',
  minCustomersPerLocation: 11,
  maxCustomersPerLocation: 38,
  avgCookiePerSale: 3.7,
  total: 0,

  generateRndCustomersPerHour: function (min, max) 
  {
    return Math.random() * (max - min) + min;
  },

  generateString: function ()
  {
    var monthsSection = document.getElementById('stores');

    // name of the store 
    var storeNameElement = document.createElement('h3');
    storeNameElement.textContent = this.storeName;
    monthsSection.appendChild(storeNameElement);
    
    // listElement.textContent = this.storeName;
    for (var i = 0; i < oclock.length; i++)
    {
      // creating a number and a string to pring 
      var num = this.generateRndCustomersPerHour(this.minCustomersPerLocation, this.maxCustomersPerLocation) * this.avgCookiePerSale;
      var s = oclock[i] + ': ' + Math.floor(num) + ' cookies';
      this.total += num;

      // creating unordered list to put values in 
      var unorderedListElements = document.createElement('ul');
      var listElement = document.createElement('li');
      listElement.textContent = s;
      unorderedListElements.appendChild(listElement);
      monthsSection.appendChild(unorderedListElements);
    }

    listElement.textContent = 'Total: ' + Math.floor(this.total) + ' cookies';
  }
};
storeCenter.generateString();

/*******************************************************************************************/
/*******************************************************************************************/

// store objects
var storeCapitolHill = 
{
  storeName: 'Capitol Hill',
  minCustomersPerLocation: 20,
  maxCustomersPerLocation: 38,
  avgCookiePerSale: 2.3,
  total: 0,

  generateRndCustomersPerHour: function (min, max) 
  {
    return Math.random() * (max - min) + min;
  },

  generateString: function ()
  {
    var monthsSection = document.getElementById('stores');

    // name of the store 
    var storeNameElement = document.createElement('h3');
    storeNameElement.textContent = this.storeName;
    monthsSection.appendChild(storeNameElement);
    
    // listElement.textContent = this.storeName;
    for (var i = 0; i < oclock.length; i++)
    {
      // creating a number and a string to pring 
      var num = this.generateRndCustomersPerHour(this.minCustomersPerLocation, this.maxCustomersPerLocation) * this.avgCookiePerSale;
      var s = oclock[i] + ': ' + Math.floor(num) + ' cookies';
      this.total += num;

      // creating unordered list to put values in 
      var unorderedListElements = document.createElement('ul');
      var listElement = document.createElement('li');
      listElement.textContent = s;
      unorderedListElements.appendChild(listElement);
      monthsSection.appendChild(unorderedListElements);
    }

    listElement.textContent = 'Total: ' + Math.floor(this.total) + ' cookies';
  }
};
storeCapitolHill.generateString();

/*******************************************************************************************/
/*******************************************************************************************/

// store objects
var storeAlki = 
{
  storeName: 'Alki',
  minCustomersPerLocation: 2,
  maxCustomersPerLocation: 16,
  avgCookiePerSale: 4.6,
  total: 0,

  generateRndCustomersPerHour: function (min, max) 
  {
    return Math.random() * (max - min) + min;
  },

  generateString: function ()
  {
    var monthsSection = document.getElementById('stores');

    // name of the store 
    var storeNameElement = document.createElement('h3');
    storeNameElement.textContent = this.storeName;
    monthsSection.appendChild(storeNameElement);
    
    // listElement.textContent = this.storeName;
    for (var i = 0; i < oclock.length; i++)
    {
      // creating a number and a string to pring 
      var num = this.generateRndCustomersPerHour(this.minCustomersPerLocation, this.maxCustomersPerLocation) * this.avgCookiePerSale;
      var s = oclock[i] + ': ' + Math.floor(num) + ' cookies';
      this.total += num;

      // creating unordered list to put values in 
      var unorderedListElements = document.createElement('ul');
      var listElement = document.createElement('li');
      listElement.textContent = s;
      unorderedListElements.appendChild(listElement);
      monthsSection.appendChild(unorderedListElements);
    }

    listElement.textContent = 'Total: ' + Math.floor(this.total) + ' cookies';
  }
};
storeAlki.generateString();

/*******************************************************************************************/