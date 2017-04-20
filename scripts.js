// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(){  
    // your code here
    var target = document.getElementById('largest-el');
    var el = [5,12,84,13,7,20];
    // get largest num in array by applyig Math.max function
		var result = Math.max.apply(null, el);
		
			return target.innerHTML = '<p>' + result + '</p>';

    
  },
  
  reversed: function(){  
    // your code here
  },

  loudSnakeCase: function(){  
    // your code here
  },

  compareArrays: function(){ 
    // your code here (replace the return)
    return "Finish compareArrays first!" 
  },

  fizzBuzz: function(){  
    // your code here
  },

  myMap: function(){  
    // your code here
  },

  primes: function(){  
    // your code here
  },
};

sprintFunctions.largestEl();