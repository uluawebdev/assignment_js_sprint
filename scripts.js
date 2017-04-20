// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(el) {
    // your code here
    var target = document.getElementById('largest-el');

    // get largest num in array by applyig Math.max function
    var result = Math.max.apply(null, el);

    //target.innerHTML = '<p>' + result + '</p>';
    document.querySelector('.output').innerHTML = '<p>' + result + '</p>';
  },

  reversed: function(str) {
    // your code here
    var target = document.getElementById('reversed');

    target.innerHTML = '<p>' + str.split('').reverse().join('') + '</p>';
  },

  loudSnakeCase: function(str) {
    // your code here
    var target = document.getElementById('loud-snake-case');
    var regex = /\W/g;
    var arr = [];
    str = str.replace(regex, '_');
    str = str.toLowerCase().split('_');
    str = str.map(function(el) {
      return el.charAt(0).toUpperCase() + el.slice(1);
    });
    var result = str.join('_');
    target.innerHTML = '<p>' + result + '</p>';
  },

  compareArrays: function(arr1, arr2) {
    // your code here (replace the return)
    var target = document.getElementById('compare-arrays');
    if (arr1.toString() === arr2.toString()) {
      target.innerHTML = '<p>' + true + '</p>';
    } else {
      target.innerHTML = '<p>' + false + '</p>';
    }

  },

  fizzBuzz: function(num) {
    // your code here
    var target = document.getElementById('fizz-buzz');
    var arr = [];
    for (var i = 0; i <= num; i++) {
      if ((i % 3 == 0) && (i % 5 == 0)) {
        arr.push('<p>FIZZBUZZ</p>');
      } else if (i % 3 == 0) {
        arr.push('<p>FIZZ</p>');
      } else if (i % 5 == 0) {
        arr.push('<p>BUZZ</p>');
      } else {
        arr.push('<p>' + i + '</p>');
      }
    }

    target.innerHTML = '<p>' + arr.join('') + '</p>';

  },

  myMap: function(arr, fn) {
    // your code here
    var target = document.getElementById('my-map');
    arr = [24, 6, 12, 22, 9, 3];
    
    return arr.map(fn);
    
    function fn() {
      target.innerHTML = '<p>' + arr + '</p>';
    }
    
  },

  primes: function(val) {
    // your code here
    var target = document.getElementById('primes');
    var primeNum = [];
    
    for(var i = 2; i < val; i++) {
      var isPrime = true;
      
      for(var j = 2; j < i; j++) {
        if(i % j == 0) {
          isPrime = false;
        }
      }
      
      if(isPrime) {
        primeNum.push(i);
      }
    }
    target.innerHTML = '<p>' + primeNum + '</p>';
  },
};

sprintFunctions.largestEl([5, 12, 84, 13, 7, 20]);
sprintFunctions.reversed('triumph');
sprintFunctions.loudSnakeCase('LOrEm&IpSUM dOLor.AMIt');
sprintFunctions.compareArrays(['dog', 'cat', 'fish'], ['dog', 'cat', 'fish']);
sprintFunctions.fizzBuzz(50);
sprintFunctions.myMap();
sprintFunctions.primes(5);