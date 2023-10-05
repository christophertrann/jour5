document.addEventListener("DOMContentLoaded", function () {
    
    var newParagraph = document.createElement("p");
  
    
    newParagraph.textContent = "Now featuring a headphone jack!";
  
    
    var description = document.getElementById("description");
  
    
    description.appendChild(newParagraph);
  });
  