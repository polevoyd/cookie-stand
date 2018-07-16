'use strict';

// var turtle = {
//   legs: 4,
//   shell: true,
//   age: 115,
//   colors: ['turquoise'],
//   weight: 25,
//   ninja: true,
//   snap: function() {
//     console.log('cowabunga!');
//   },
// };


var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
var ulEl = document.createElement('ul');

for(var i = 0; i < months.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = months[i];
  ulEl.appendChild(liEl);
}

var monthsSection = document.getElementById('months');
monthsSection.appendChild(ulEl);