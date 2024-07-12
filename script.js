function validateSyntax() {
    let input = document.getElementById('petInput').value; //Validation//
    let pattern = /^pet_[a-zA-Z0-9]+$/; //pattern//
    let result = '';
    let circle = '';
  
    if (input.match(pattern)) { //if and else conditionals//
      result = 'Valid Syntax';
      circle = '<span class="circle valid"></span>'; // Red circle for valid syntax
    } else {
      result = 'Invalid Syntax';
      circle = '<span class="circle invalid"></span>'; // Green circle for invalid syntax
    }
  
    document.getElementById('result').innerHTML = result + ' ' + circle;
  }
  
  
  
          
          








